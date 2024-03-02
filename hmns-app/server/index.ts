import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose from 'mongoose';
import { MONGO_URI } from "./config"
import { typeDefs } from './graphql/typeDefs/indexTypeDefs';
import { resolvers } from './graphql/resolvers/indexResolvers';
import { ButterflyResolvers } from './graphql/resolvers/ButterflyResolvers';
import { BOTD } from './models/Butterfly';

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

//Create one BOTD document with a random butterfly if BOTD collection is empty
async function initializeBOTD() {
  try {
    let count = await BOTD.countDocuments({});
    if (count==0){
      ButterflyResolvers.Mutation.createBOTD();
    }
  } catch (error) {
    console.error(`Error initializing BOTD: ${error}`);
  }
}
initializeBOTD();

//set new BOTD every midnight
const MAX_TRIES:number=3;
cron.schedule('0 0 * * *',function(){
    try{
      for(let attempt=0;attempt<MAX_TRIES;attempt++){
        const randomButterfly=ButterflyResolvers.Query.randomButterfly();
        randomButterfly.then(function(result){
          let randomButterflyId:string=result._id.toString();
          console.log(randomButterflyId);
          ButterflyResolvers.Mutation.setBOTD(null,{botdId:randomButterflyId});
        });
        return;
      }
    }
    catch(error){
      console.error(`Error setting new BOTD: ${error}`);
    }
 })