import { Butterfly } from '../../models/Butterfly';

export const ButterflyResolvers = {
  Query: {
    getButterfly: async (_: any, { id }: { id: string }) => {
      return await Butterfly.findById(id);
    },
    users: async () => {
        return await Butterfly.find();
      }
  },
  Mutation: {
    createUser: async (_: any, { name }: { name: string }) => {
        const newButterfly = new Butterfly({ name });
        await newButterfly.save();
        return newButterfly;
      },
  }
};
