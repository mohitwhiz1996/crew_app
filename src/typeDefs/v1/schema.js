import { gql } from 'apollo-server-express';

const typeDefs = gql`
   type Query {
    dbStatus: String
  }
`;

export default typeDefs;
