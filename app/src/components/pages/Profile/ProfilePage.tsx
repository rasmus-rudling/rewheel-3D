import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery, gql } from "@apollo/client";

const callAPI = () => {};

const callProtectedAPI = () => {};

const GET_ALL_BIKES = gql`
  query GetAllBikes {
    getAllBikes {
      id
      color
    }
  }
`;

const GetAllBikes = () => {
  const { loading, error, data } = useQuery(GET_ALL_BIKES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error when querying API :(</p>;

  return data.getAllBikes.map(
    ({ id, color }: { id: String; color: String }) => (
      <div>
        <p>
          {id}: {color}
        </p>
      </div>
    )
  );
};

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated && user) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex justify-center h-max w-max">
          <img className="block" src={user.picture} />
          <p className="block">{user.email}</p>
          <button>Get all bike builds</button>
          <GetAllBikes />
          {/* {JSON.stringify(user, null, 2)} */}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Ej inloggad.</p>
      </div>
    );
  }
};

export default ProfilePage;
