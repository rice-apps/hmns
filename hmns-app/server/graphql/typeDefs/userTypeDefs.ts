import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    users: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(name: String!): User!
  }
`;
