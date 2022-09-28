import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from '../../graphql/queries';

export default function AddBook() {
  const { loading, error, data } = useQuery(GET_AUTHORS);
  const [author, setAuthor] = useState({ name: '', genre: '', authorId: '' });

  if (error) return <p>Error :(</p>;

  const handleChange = (e) =>
    setAuthor({ ...author, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(author);
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
          {loading ? (
            <option disabled>Loading authors</option>
          ) : (
            <>
              <option>Select author</option>
              {data.authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </>
          )}
        </select>
      </div>
      <button type='submit'>Add</button>
    </form>
  );
}
