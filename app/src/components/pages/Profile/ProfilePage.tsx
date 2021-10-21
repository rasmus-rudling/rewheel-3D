import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery, gql } from "@apollo/client";

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated && user) {
    return (
      <div className="w-full">
        <div className="flex flex-col mt-5 items-center">
          <img className="w-20 m-2 rounded-full" src={user.picture} />
          <span className="m-1 font-medium text-2xl">
            Välkommen {user.email}!
          </span>
          <p className="m-2 font-light">
            Här kan du se de cyklar du har sparat.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col mt-10 items-center">
        <p className={"font-medium text-2xl"}>
          Du måste vara inloggad för att se den här sidan.
        </p>
      </div>
    );
  }
};

export default ProfilePage;
