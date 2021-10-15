import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./components/pages/Profile/ProfilePage";
import BikeBuilderPage from "./components/pages/BikeBuilder/BikeBuilderPage";
import DiscoverPage from "./components/pages/Discover/DiscoverPage";
import PageWrapper from "./components/common/PageWrapper";
import LoginPage from "./components/pages/Login/LoginPage";
import CurrentBuildProvider from "./contexts/CurrentBuildContext";
import CurrentProductTypeProvider from "./contexts/CurrentProductTypeContext";

const App = () => {
  return (
    <CurrentBuildProvider>
      <CurrentProductTypeProvider>
        <Router>
          <Switch>
            <Route exact path={["/", "/bike-builder"]}>
              <PageWrapper>
                <BikeBuilderPage />
              </PageWrapper>
            </Route>
            <Route exact path="/discover">
              <PageWrapper>
                <DiscoverPage />
              </PageWrapper>
            </Route>
            <Route exact path="/profile">
              <PageWrapper>
                <ProfilePage />
              </PageWrapper>
            </Route>
            <Route exact path="/login">
              <PageWrapper>
                <LoginPage />
              </PageWrapper>
            </Route>
          </Switch>
        </Router>
      </CurrentProductTypeProvider>
    </CurrentBuildProvider>
  );
};

export default App;
