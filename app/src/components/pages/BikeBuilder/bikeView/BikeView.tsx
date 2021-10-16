import React, { useRef, Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import BikeFrameModel from "./testGeometry/bikeFrame.gltf";
import FrontWheelModel from "./testGeometry/frontWheel.gltf";

import ComposedBikeBuild from "./ComposedBikeBuild";

import { BikeConfig, Anchors, Anchor, ComponentConfig } from "./bikeViewTypes";
import { ProductType, BikeBuild } from "../../../../types";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, Object3D } from "three";

type GLTFResult = GLTF & {
  nodes: Mesh[];
};

const BikeView = () => {
  // const currentBikeBuild = useCurrentBuild();

  // const currentBikeBuild = useSele

  // const currentBikeBuild: BikeBuild = { products: [], totalPrice: 0 };
  // const frameProductType: ProductType = {
  //   name: "frame",
  //   idx: 0,
  //   numberOfTypes: 1,
  // };

  // const part = {
  //   id: "qwe",
  //   modelSrc: BikeFrameModel,
  //   name: "Super fancy frame",
  //   brand: "Specialized",
  //   grade: 2,
  //   numReviews: 2,
  //   price: 324,
  //   imgLink:
  //     "https://shimmercat.abicart.se/shop/32301/art1/h1325/172811325-origpic-eb3c2a.jpg?max-width=500&max-height=500&quality=85",
  //   type: frameProductType,
  // };

  // const part2 = {
  //   id: "qwe",
  //   modelSrc: FrontWheelModel,
  //   name: "Super fancy frame",
  //   brand: "Specialized",
  //   grade: 2,
  //   numReviews: 2,
  //   price: 324,
  //   imgLink:
  //     "https://shimmercat.abicart.se/shop/32301/art1/h1325/172811325-origpic-eb3c2a.jpg?max-width=500&max-height=500&quality=85",
  //   type: frameProductType,
  // };

  // currentBikeBuild.products.push(part);
  // currentBikeBuild.products.push(part2);
  // const bikeConfig: BikeConfig = {};

  // const scene = useGLTF(BikeFrameModel);
  // console.log("HELLO");
  // console.log(scene);

  currentBikeBuild.products.forEach((product) => {
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
        partType = key.name;
        componentConfig.geometry = key.geometry;
      }
    });

    componentConfig.anchors = anchors;
    bikeConfig[partType] = componentConfig;
  });

  console.log(bikeConfig)

  useEffect(() => {
    console.log("Rerender");
  }, []);


  return (
    <Canvas dpr={[1, 2]} camera={{ position: [-4, 2, -4], fov: 45 }}>
      <ambientLight intensity={.5} />
      <pointLight position={[-1.160, 1.262, -2.143]} />
      <pointLight position={[0.442, 0.868, 1.574]} />
      <pointLight position={[-2.427, 2.070, 1.574]} />


      <Suspense fallback={<div>Loading... </div>}>
        <ComposedBikeBuild bikeConfig={bikeConfig} />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default BikeView;
