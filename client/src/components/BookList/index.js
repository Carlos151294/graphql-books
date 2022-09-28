import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../../graphql/queries';

import BookDetails from '../BookDetails';

function BookList() {
  const [bookSelected, setBookSelected] = useState(null);
  const query = useQuery(GET_BOOKS);
  const { loading, error, data } = query;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { books = [] } = data;

  return (
    <div>
      <ul className='book-list'>
        {books.map(({ id, name }) => (
          <li key={id} onClick={() => setBookSelected(id)}>
            {name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={bookSelected} />
    </div>
  );
}

export default BookList;
