import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { gql } from 'graphql-tag';
import { placeholderTypeDefs } from './modules/placeholder-service/schema';
import { placeholderResolvers } from './modules/placeholder-service/resolvers';

/**
 * Base GraphQL schema with root types
 */
const baseTypeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

/**
 * Base resolvers
 */
const baseResolvers = {
  Query: {
    _empty: () => 'This is a placeholder query',
  },
  Mutation: {
    _empty: () => 'This is a placeholder mutation',
  },
};

/**
 * Create executable GraphQL schema from all modules
 */
const schema = makeExecutableSchema({
  typeDefs: [baseTypeDefs, placeholderTypeDefs],
  resolvers: [baseResolvers, placeholderResolvers],
});

/**
 * Initialize and start Apollo Server
 */
async function startServer() {
  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at: ${url}`);
  console.log(`📊 GraphQL Playground available at: ${url}`);
}

// Start the server
startServer().catch((error) => {
  console.error('Error starting server:', error);
  process.exit(1);
});
