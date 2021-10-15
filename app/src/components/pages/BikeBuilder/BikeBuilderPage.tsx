import LoginButton from "../../common/buttons/LoginButton";
import LogoutButton from "../../common/buttons/LogoutButton";
import BikeView from "./BikeView";
import SidePanel from "./sidePanel/SidePanelPresenter";

const BikeBuilderPage = () => {
  return (
    <div className="flex h-full">
      <LoginButton />
      <LogoutButton />
      <div className="h-full flex-grow">
        <BikeView />
      </div>
      <div className="h-full w-2/6 max-w-sm">
        <SidePanel />
      </div>
    </div>
  );
};

export default BikeBuilderPage;
