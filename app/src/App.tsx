import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./components/pages/Profile/ProfilePage";
import BikeBuilderPage from "./components/pages/BikeBuilder/BikeBuilderPage";
import NavBarPresenter from "./components/common/NavBar/NavBarPresenter";
import PageWrapper from "./components/common/PageWrapper";
import LoginPage from "./components/pages/Login/LoginPage";
import AuthCallback from "./components/common/AuthCallback";
import { useCallback, useEffect, useState } from "react";
import auth from "./Auth";

const App = () => {
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    async () => {
      if (window.location.href.split("/")[-1] === "callback") return;
      try {
        await auth.silentAuth();
        forceUpdate();
      } catch (err: any) {
        if (err.error === "login_required") return;
        console.log(err.error);
      }
    };
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/bike-builder"]}>
          <PageWrapper>
            <BikeBuilderPage />
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

        <Route exact path="/callback">
          <PageWrapper>
            <AuthCallback />
          </PageWrapper>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
