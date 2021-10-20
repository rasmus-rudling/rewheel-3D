import React, { useState } from "react";
import { useHistory } from "react-router";
import DesktopNavBarView from "./NavBarView";
import { useAuth0 } from "@auth0/auth0-react";
import { useApolloClient } from "@apollo/client";
import { debug } from "console";

export interface NavButton {
  route: string;
  text: string;
}

const navButtons: NavButton[] = [
  { route: "discover", text: "utforska" },
  { route: "bike-builder", text: "cykelbyggaren" },
  { route: "profile", text: "profil" },
  { route: "login", text: "logga in" },
  { route: "logout", text: "logga ut" },
];

const NavBarPresenter = () => {
  const history = useHistory();

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const client = useApolloClient();

  const navButtonClickHandler = (newRoute: string) => {
    if (newRoute === "login") {
      loginWithRedirect();
    } else if (newRoute === "logout") {
      logout();
      client.resetStore();
    } else {
      history.push(newRoute);
    }
  };

  const navButtonsFiltered = [...navButtons].filter((navButton) => {
    if (isAuthenticated) {
      return navButton.route !== "login";
    } else {
      return navButton.route !== "logout" && navButton.route !== "profile";
    }
  });

  return (
    <>
      <DesktopNavBarView
        navButtons={navButtonsFiltered}
        navButtonClickHandler={navButtonClickHandler}
      />
      {/* <MobileNavBar navigationButtons={navigationButtons} /> */}
    </>
  );
};

export default NavBarPresenter;
