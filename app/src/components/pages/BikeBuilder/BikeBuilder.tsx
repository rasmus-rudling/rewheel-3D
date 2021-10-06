import SidePanel from "./SidePanel";
import BikeView from "./BikeView";

const BikeBuilder = () => {
  return (
    <div className="App">
      <nav className="w-full h-14 bg-purple-400 fixed top-0"></nav>
      <div className="flex items-stretch pt-14 h-full">
        <div className="flex-grow">
          <BikeView />
        </div>
        <SidePanel />
      </div>
    </div>
  );
};

export default BikeBuilder;
