import { useQuery, gql } from '@apollo/client';

const GET_AUTHORS = gql`
  {
    authors {
      id
      name
      age
    }
  }
`;

export default function AddBook() {
  let authors = [];
  const query = useQuery(GET_AUTHORS);
  const { loading, error, data } = query;

  if (error) return <p>Error :(</p>;

  if (data) {
    authors = data.authors;
  }

  return (
    <form className='book-form'>
      <div className='field'>
        <label>Book name:</label>
        <input type='text' />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input type='text' />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select>
          {loading ? (
            <option disabled>Loading authors</option>
          ) : (
            <>
              <option>Select author</option>
              {authors.map((author) => (
                <option key={author.id}>{author.name}</option>
              ))}
            </>
          )}
        </select>
      </div>
    </form>
  );
}
