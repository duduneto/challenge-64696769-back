import { GraphQLServer } from 'graphql-yoga';
import path from 'path'
import mongoose from 'mongoose';

const resolvers = require('./resolvers');
// import resolvers from './resolvers';
const connectDB = require('./db-connection');

class Server {

  public graphql: any

  public constructor () {
    this.graphql = new GraphQLServer({
      typeDefs: path.resolve(__dirname, 'schema.graphql'),
      resolvers
    });
    this.connect();
  }

  private connect (): void {
    connectDB()
  }
}
export default new Server().graphql