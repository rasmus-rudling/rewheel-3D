import { useQuery, gql, useApolloClient } from "@apollo/client";

const GET_ALL_BIKES = gql`
  query GetAllBikes {
    getAllBikes {
      id
      color
    }
  }
`;

export const GetAllBikesTest = () => {
  const apolloClient = useApolloClient();
  const { loading, error, data } = useQuery(GET_ALL_BIKES);

  //   dataDiv = data.getAllBikes.map(
  //     ({ id, color }: { id: string; color: string }) => (
  //       <div>
  //         <p>
  //           {id}: {color}
  //         </p>
  //       </div>
  //     )

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error when querying API :(</p>;

  // const [dataDiv, setDataDiv] = useState(null);

  const onClickHandler = async () => {
    const result = await apolloClient.query({
      query: GET_ALL_BIKES,
    });

    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickHandler} className="bg-blue-400">
        TEST API
      </button>
      {/* {dataDiv} */}
    </div>
  );
};
