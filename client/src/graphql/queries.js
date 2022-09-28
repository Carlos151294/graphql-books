import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  {
    books {
      id
      name
    }
  }
`;

export const GET_AUTHORS = gql`
  {
    authors {
      id
      name
      age
    }
  }
`;

export const GET_BOOK = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;
