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
