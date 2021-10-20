import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./components/pages/Profile/ProfilePage";
import BikeBuilderPage from "./components/pages/BikeBuilder/BikeBuilderPage";
import PageWrapper from "./components/common/PageWrapper";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "./components/common/Spinner";
import DiscoverPage from "./components/pages/Discover/DiscoverPage";

// Testing GQL
import { useQuery, gql } from "@apollo/client";
const GET_ALL_BIKES = gql`
  query GetAllBikes {
    getAllBikes {
      id
      color
    }
  }
`;

// const GetAllBikes = () => {
//   const { loading, error, data } = useQuery(GET_ALL_BIKES);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error when querying API :(</p>;

//   return data.getAllBikes.map(
//     ({ id, color }: { id: String; color: String }) => (
//       <div>
//         <p>
//           {id}: {color}
//         </p>
//       </div>
//     )
//   );
// };
// /Testing GQL

const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) return <Spinner />;
  console.log(process.env.AUTH0_DOMAIN)
  return (
    <Router>
      <Switch>
        <Route exact path="/discover">
          <PageWrapper>
            <DiscoverPage />
          </PageWrapper>
        </Route>
        <Route exact path={["/", "/bike-builder"]}>
          {/* Testing GQL */}
          {/* <GetAllBikes /> */}
          <PageWrapper>
            <BikeBuilderPage />
          </PageWrapper>
        </Route>

        <Route exact path="/profile">
          <PageWrapper>
            <ProfilePage />
          </PageWrapper>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
