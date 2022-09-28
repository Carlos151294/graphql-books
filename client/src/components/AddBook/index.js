import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_AUTHORS, GET_BOOKS } from '../../graphql/queries';
import { ADD_BOOK } from '../../graphql/mutations';

export default function AddBook() {
  const {
    loading: authorsLoading,
    error: authorsError,
    data: authorsData,
  } = useQuery(GET_AUTHORS);
  const [addBook, { loading: bookLoading, error: bookError, data: bookData }] =
    useMutation(ADD_BOOK);
  const [author, setAuthor] = useState({ name: '', genre: '', authorId: '' });

  if (authorsError) return <p>Error :(</p>;

  const handleChange = (e) =>
    setAuthor({ ...author, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      variables: { ...author },
      refetchQueries: [{ query: GET_BOOKS }],
    });
  };

  return (
    <form className='book-form' onSubmit={handleSubmit}>
      <div className='field'>
        <label>Book name:</label>
        <input type='text' name='name' onChange={handleChange} />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input type='text' name='genre' onChange={handleChange} />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select name='authorId' onChange={handleChange}>
          {authorsLoading ? (
            <option disabled>Loading authors</option>
          ) : (
            <>
              <option>Select author</option>
              {authorsData.authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </>
          )}
        </select>
      </div>
      <button type='submit'>+</button>
    </form>
  );
}
