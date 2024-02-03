import { gql } from 'apollo-server-express';

export const ImageTypeDefs=gql`

  scalar Upload

  type Mutation {
    receiveImage(imageData: String!)
  }
`;