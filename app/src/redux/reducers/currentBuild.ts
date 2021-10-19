import { BikeBuild, BikeConfig, Product } from "../../types";
import { GLTFResult, ComponentConfig, Anchor, Anchors } from "../../types/three";


import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import BikeFrameModel from "./../../resources/testGeometry/bikeFrame.gltf";
import FrontWheelModel from "./../../resources/testGeometry/frontWheel.gltf";

interface Action {
  type: "TOGGLE_PRODUCT";
  data: {
    newProduct: Product;
  };
}

// const part = {
//     id: "12435",
//     modelSrc: BikeFrameModel,
//     name: "Super fancy frame",
//     brand: "Specialized",
//     grade: 2,
//     numReviews: 2,
//     price: 324,
//     imgLink:
//       "https://shimmercat.abicart.se/shop/32301/art1/h1325/172811325-origpic-eb3c2a.jpg?max-width=500&max-height=500&quality=85",
//     type: 'frame',
//   };

//   const part2 = {
//     id: "342",
//     modelSrc: FrontWheelModel,
//     name: "Super fancy frame",
//     brand: "Specialized",
//     grade: 2,
//     numReviews: 2,
//     price: 324,
//     imgLink:
//       "https://shimmercat.abicart.se/shop/32301/art1/h1325/172811325-origpic-eb3c2a.jpg?max-width=500&max-height=500&quality=85",
//     type: 'wheel',
//   };

const initBuild: BikeBuild = {
  products: [],
  totalPrice: 0,
  renderedBuildConfig: {},
};

const getNewBuild = (products: Product[], newProduct: Product) => {
  let oldProducts = [...products];

  const newProductAlreadyInBuild = oldProducts.some(
    (product) => product.id === newProduct.id
  );

  let oldProductsCleared = oldProducts.filter(
    (product) => product.type !== newProduct.type
  );

  if (!newProductAlreadyInBuild) {
    oldProductsCleared.push(newProduct);
  }

  let newTotPrice;

  if (oldProductsCleared.length > 0) {
    const totPriceReducer = (totPrice: number, currentPrice: number) =>
      totPrice + currentPrice;
    const productPrices = oldProductsCleared.map((product) => product.price);
    newTotPrice = productPrices.reduce(totPriceReducer);
  } else {
    newTotPrice = 0;
  }

  let newBuild = {
    products: oldProductsCleared,
    totalPrice: newTotPrice,
    renderedBuildConfig: {},
  };

  return newBuild;
};

const getNewRenderedBuildConfig = (products: Product[]) => {
  const bikeConfig: BikeConfig = {};

  products.forEach((product: Product) => {
    // console.log(scene)
    const productGLTF = useGLTF(product.modelSrc) as GLTFResult;
    console.log(productGLTF);

    const componentConfig = {} as ComponentConfig;
    const anchors: Anchors = {};
    let partType = "";

    Object.values(productGLTF.nodes).forEach((key) => {
      if (key.type === "Object3D") {
        const anchor: Anchor = {
          position: key.position,
          rotation: key.rotation,
        };
        anchors[key.name] = anchor;
      }
      if (key.type === "Mesh") {
        const material = key.material as THREE.MeshStandardMaterial
        partType = key.name;
        componentConfig.geometry = key.geometry;
        componentConfig.color = material.color;
      }
    });

    componentConfig.anchors = anchors;
    bikeConfig[partType] = componentConfig;
  });

  return bikeConfig;
};

const currentBuildReducers = (state = initBuild, { type, data }: Action) => {
  switch (type) {
    case "TOGGLE_PRODUCT":
      let newBuild: BikeBuild = getNewBuild(state.products, data.newProduct);

      const newRenderedBuildConfig = getNewRenderedBuildConfig(newBuild.products);

      newBuild.renderedBuildConfig = newRenderedBuildConfig;

      return newBuild;
    default:
      return state;
  }
};

export default currentBuildReducers;
