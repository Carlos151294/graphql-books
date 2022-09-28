import { useQuery } from '@apollo/client';
import { GET_BOOK } from '../../graphql/queries';

export default function BookDetails({ bookId }) {
  const query = useQuery(GET_BOOK, { variables: { id: bookId } });
  const { data } = query;

  if (data?.loading) {
    return <div>Loading book details...</div>;
  }

  if (!data?.book) {
    return <p>No book selected</p>;
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
