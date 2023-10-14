import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose from 'mongoose';
import { MONGO_URI } from "./config"
import { typeDefs } from './graphql/typeDefs/indexTypeDefs';
import { resolvers } from './graphql/resolvers/indexResolvers';

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start()
  server.applyMiddleware({ app });

  // MongoDB Connection
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any);
    console.log('🚀 MongoDB connected ');
  } catch (error) {
    console.log('Could not connect to MongoDB', error);
  }

  app.listen({ port: 4000 }, () => {
    console.log(`🕸️ Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};

startServer().catch((error) => console.log(error));
