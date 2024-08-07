import mongoose from 'mongoose';

const resolvers = {
  Query: {
    dbStatus: () => {
      const state = mongoose.connection.readyState;
      if (state === 1) return 'Connected';
      else if (state === 2) return 'Connecting';
      else return 'Disconnected';
    },
  },
};

export default resolvers;
