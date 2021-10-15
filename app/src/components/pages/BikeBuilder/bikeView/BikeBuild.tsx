const BikeBuild = () => {
    const bikeConfig: BikeConfig = {
      FRAME: {
        id: 0,
        source: BikeFrameModel,
        anchors: {
          "FRONTWHEEL": {
            position: new THREE.Vector3(-1.638202428817749,16668516397476196, 0),
            rotation: new THREE.Euler(0, 0, 0, 'y')
          }
        }          
        },
      };
  
    const buildComponents = [];
  
    return (
      <group name="bikeBuild">
        <BikeComponent path={BikeFrameModel} bikeConfig={bikeConfig} />
        <BikeComponent path={FrontWheelModel} bikeConfig={bikeConfig} />
      </group>
    );
  };