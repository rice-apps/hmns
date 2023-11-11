import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose from 'mongoose';
import { MONGO_URI } from "./config"
import { typeDefs } from './graphql/typeDefs/indexTypeDefs';
import { resolvers } from './graphql/resolvers/indexResolvers';
import { ButterflyResolvers } from './graphql/resolvers/ButterflyResolvers';

const cron=require('node-cron')
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

let randomButterflyId:string="653d56ec705f7a57e560d711"; //current BOTD
//set new BOTD every midnight
cron.schedule('0 0 * * *', function() {
 const randomButterfly=ButterflyResolvers.Query.randomButterfly();
 randomButterfly.then(function(result){
    randomButterflyId=result._id.toString();
 })
 console.log(randomButterflyId);
 ButterflyResolvers.Mutation.setBOTD(null,{botdId:randomButterflyId});
});