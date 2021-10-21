import React, { useEffect } from "react";
import { useHistory } from "react-router";
import DesktopNavBarView from "./NavBarView";
import { useAuth0 } from "@auth0/auth0-react";
import { useApolloClient } from "@apollo/client";
import { CREATE_USER } from "../../../../src/graphql/mutations/createUser";
import { useMutation } from "@apollo/client";

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
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
    errorPolicy: "all",
  });

  const { loginWithPopup, logout, isAuthenticated, user } = useAuth0();

  const client = useApolloClient();

  const navButtonClickHandler = (newRoute: string) => {
    if (newRoute === "login") {
      loginWithPopup();
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

  useEffect(() => {
    if (user) {
      createUser({
        variables: {
          email: user.email,
          firstName: user.given_name ? user.given_name : " ",
          lastName: user.family_name ? user.family_name : " ",
          imgUrl: user.picture ? user.picture : " ",
          username: user.nickname ? user.nickname : " ",
        },
      });
    }
  }, [user]);

  if (error)
    console.log("Error when creating user (user probably already exists).");

  return (
    <>
      <DesktopNavBarView
        navButtons={navButtonsFiltered}
        navButtonClickHandler={navButtonClickHandler}
      />
    </>
  );
};

export default NavBarPresenter;
