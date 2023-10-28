import { Butterfly } from '../../models/Butterfly';

export const ButterflyResolvers = {
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
},
Mutation: {
  createButterfly: async (_: any, { input }: { input: any }) => {
      const butterfly = new Butterfly({ name });
      await butterfly.save();
      return butterfly;
    },
}

};
