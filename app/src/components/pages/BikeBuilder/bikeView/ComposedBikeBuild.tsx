import { BikeConfig } from "./bikeViewTypes";
import * as THREE from "three";
import BikePart from "./BikePart";

interface Props {
  bikeConfig: BikeConfig;
}

const ComposedBikeBuild = ({ bikeConfig }: Props) => {
  const buildComponents = [];

  for (const item in bikeConfig) {
    // Generate a BikePart for each item in the bikeConfig object
    buildComponents.push(
      <BikePart
        modelSrc={'src'}
        position={new THREE.Vector3()}
        orientation={new THREE.Euler()}
      />
    );
  }

  return (
    <group name="bikeBuild">
    </group>
  );
};

export default ComposedBikeBuild;
