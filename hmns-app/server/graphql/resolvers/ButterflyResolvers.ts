import { User } from '../../models/User';

export const userResolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
      return await User.findById(id);
    },
    users: async () => {
        return await User.find();
      }
  },
  Mutation: {
    createUser: async (_: any, { name }: { name: string }) => {
        const user = new User({ name });
        await user.save();
        return user;
      },
  }
};
