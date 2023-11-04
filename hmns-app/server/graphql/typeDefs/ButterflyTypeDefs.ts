import { gql } from 'apollo-server-express';

export const ButterflyTypeDefs = gql`
  type Butterfly {
    id: ID!
    commonName: String!
    scientificName: String!
    photoUrl: [String]!
    location: String
    family: [String]
    funFact: String
    priority: String
  }
  type BOTD{
    id: ID!
    botdId: String!
    isBotd: Boolean!
  }

  input ButterflyInput {
    commonName: String!
    scientificName: String!
    photoUrl: [String]!
    location: String
    family: [String]
    funFact: String
    priority: String
  }

  type Query {
    getButterfly(id: ID!): Butterfly
    randomButterfly: Butterfly
    getBOTD: BOTD
  }

  type Mutation{
    createButterfly(input:ButterflyInput!):Butterfly!
    createBOTD: BOTD!
    setBOTD(botdId:String!):BOTD!
  }

`;
