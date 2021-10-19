import { useQuery, gql } from "@apollo/client";

const GET_ALL_BIKES = gql`
  query GetAllBikes {
    getAllBikes {
      id
      color
    }
  }
`;

export const GetAllBikesTest = () => {
  let loading;
  let error;
  let data;
  let dataDiv = <div></div>;

  const onClickHandler = () => {
    const queryAnswer = useQuery(GET_ALL_BIKES);
    loading = queryAnswer.loading;
    error = queryAnswer.error;
    data = queryAnswer.data;

    dataDiv = data.getAllBikes.map(
      ({ id, color }: { id: string; color: string }) => (
        <div>
          <p>
            {id}: {color}
          </p>
        </div>
      )
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error when querying API :(</p>;

  return (
    <div>
      <button onClick={onClickHandler} className="bg-blue-400">
        TEST API
      </button>
      {dataDiv}
    </div>
  );
};
