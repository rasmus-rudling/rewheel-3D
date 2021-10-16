import BikeView from "./bikeView/BikeView";
import SidePanel from "./sidePanel/SidePanelPresenter";
import { Suspense } from "react";

const BikeBuilderPage = () => {
  return (
    <div className="flex h-full">
      <div className="h-full flex-grow">
        <Suspense fallback={<div>Loading... </div>}>
          <BikeView />
        </Suspense>
      </div>
      <div className="h-full w-2/6 max-w-sm">
        <SidePanel />
      </div>
    </div>
  );
};

export default BikeBuilderPage;
