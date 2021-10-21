import { Component, useRef, useState, useEffect } from "react";
import BikeView from "../../pages/BikeBuilder/bikeCanvas/BikeCanvasView";
import CarouselView from "./CarouselView";

import { BikeBuild, BikeConfig, Product } from "../../../types/index";
import { useGLTF } from "@react-three/drei";
import { modelsAndImages } from "../../../utility/models";
import { getNewRenderedBuildConfig } from "../../../utility/functions";

interface Props {
  index: number;
  allBikes: any[];
  allProducts: Product[];
}

const CarouselPresenter = ({ index, allBikes, allProducts }: Props) => {
  const [bikeConfigs, setBikeConfigs] = useState<BikeConfig[]>([]);

  for (let i = 1; i < 14; i++) {
    useGLTF.preload(modelsAndImages[i].model);
  }

  useEffect(() => {
    if (allBikes && allProducts) {
      if (allBikes.length !== 0 && allProducts.length !== 0) {
        const newBikeConfig: BikeConfig[] = [];

        allBikes.forEach((bike) => {
          const bikeProductIds: string[] = bike.products;

          const currentBikeParts: Product[] = [];

          bikeProductIds.forEach((productId: string) => {
            const bikePart =
              allProducts.find(
                (currentProduct: Product) =>
                  currentProduct.product_id === productId
              ) || allProducts[0];

            currentBikeParts.push(bikePart);
          });

          const currentBikeConfig: BikeConfig =
            getNewRenderedBuildConfig(currentBikeParts);

          newBikeConfig.push(currentBikeConfig);
        });

        setBikeConfigs(newBikeConfig);
      }
    }
  }, [allBikes]);

  return (
    <CarouselView
      leftBikeConfig={bikeConfigs[index - 1]}
      mainBikeConfig={bikeConfigs[index]}
      rightBikeConfig={bikeConfigs[index + 1]}
    />
  );
};

export default CarouselPresenter;
