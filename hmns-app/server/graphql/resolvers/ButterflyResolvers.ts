import { ObjectId } from 'mongoose';
import { Butterfly,BOTD } from '../../models/Butterfly';
const cron=require('node-cron');

interface Butterfly {
  _id: ObjectId;
  commonName: string;
  scientificName: string;
  photoUrl: string[];
  location: string;
  family: string[];
  funFact: string;
  priority: string;
}

export const ButterflyResolvers = {
  Butterfly: {
    id: (parent: Butterfly) => parent._id.toString(),
  },
  Query: {
    getButterfly: async (_: any, { id }: { id: string }) => {
      return await Butterfly.findById(id);
    },
    randomButterfly: async () => {
        const randomButterflies = await Butterfly.aggregate([
          { $sample: { size: 1 } }
        ]);
        return randomButterflies[0];
  },
  getBOTD:async ()=>{
    return await BOTD.findOne({isBotd:true});
  }
},
Mutation: {
  createButterfly: async (_: any, { input }: { input: any }) => {
      const {commonName,scientificName, photoUrl, location, family, funFact, priority}=input;
      const butterfly=new Butterfly({
        commonName,scientificName, photoUrl, location, family, funFact, priority
      });
      await butterfly.save();
      return butterfly;
  },
  createBOTD:async () => {
    const botd=new BOTD({botdId:"dummy",isBotd:true});
    await botd.save();
    return botd;
  },
  setBOTD:async (_: any, { botdId }: { botdId: string }) => {
    const filter={isBotd:true};
    await BOTD.replaceOne(filter,{botdId,isBotd:true});
    const botd=new BOTD({botdId,isBotd:true});
    return botd;
  },
}
};

let randomButterflyId:string="653d56ec705f7a57e560d711"; //default BOTD
//set new BOTD every midnight
cron.schedule('0 0 * * *', function() {
 const randomButterfly=ButterflyResolvers.Query.randomButterfly();
 randomButterfly.then(function(result){
    randomButterflyId=result._id.toString();
 })
 console.log(randomButterflyId);
 ButterflyResolvers.Mutation.setBOTD(null,{botdId:randomButterflyId});
});