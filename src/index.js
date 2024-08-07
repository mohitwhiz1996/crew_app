import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import typeDefs from './typeDefs/v1/schema.js';
import resolvers from './resolvers/testDBResolver.js';

async function startServer() {
  const app = express();

  // Version 1 API
  const serverV1 = new ApolloServer({ typeDefs, resolvers });
  await serverV1.start();
  serverV1.applyMiddleware({ app, path: '/v1/graphql' });

  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen({ port: process.env.PORT }, () => {
    console.log(`Server ready at http://localhost:${process.env.PORT}`);
  });
}

startServer();
