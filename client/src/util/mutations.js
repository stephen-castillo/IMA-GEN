import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!, $username: String!) {
    createUser(email: $email, password: $password, username: $username) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const GENERATE_IMAGE = gql`
    mutation getImage($name: String!, $prompt: String!) {
        getImage(name: $name, prompt: $prompt) {
            name
            prompt
            photo
        }
    }
`;

export const CREATE_POST = gql`
    mutation createPost($name: String!, $prompt: String!, $photo: String!) {
        createPost(name: $name, prompt: $prompt, photo: $photo) {
            name
            prompt
            photo
        }
    }
`;
