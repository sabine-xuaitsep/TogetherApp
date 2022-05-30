import gql from 'graphql-tag'

export const userQuery = gql`
  query user($id: ID!) {
    user(id : $id) {
      id
      name
    }
  }
`;