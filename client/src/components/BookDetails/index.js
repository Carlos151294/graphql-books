import { useQuery } from '@apollo/client';
import { GET_BOOK } from '../../graphql/queries';

export default function BookDetails({ bookId }) {
  const query = useQuery(GET_BOOK, { variables: { id: bookId } });
  const { loading, data } = query;

  if (loading) {
    return <div className='book-details'>Loading book details...</div>;
  }

  if (!data?.book) {
    return (
      <div className='book-details'>
        <h2>No book selected</h2>
      </div>
    );
  }

  const { book } = data;

  return (
    <div className='book-details'>
      <h2>{book.name}</h2>
      <p>{book.genre}</p>
      <p>{book.author.name}</p>
      <p>All books by this author</p>
      <ul className='other-books'>
        {book.author.books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}
