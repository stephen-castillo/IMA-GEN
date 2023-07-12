import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
      _id
      lastLogin
      username
      email
    }
  }
`;

export const GET_POSTS = gql`
    query posts {
        posts {
            name
            prompt
            photo
            id
        }
    }
`;