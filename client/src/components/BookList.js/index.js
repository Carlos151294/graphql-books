import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  {
    books {
      id
      name
    }
  }
`;

function BookList() {
  const query = useQuery(GET_BOOKS);
  const { loading, error, data } = query;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { books = [] } = data;

  return (
    <div>
      <ul className='book-list'>
        {books.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
