const { ApolloServer } = require('apollo-server');

const { ApolloServerPluginLandingPageDisabled } = require('apollo-server-core');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');
const { ApolloServerPluginLandingPageProductionDefault } = require('apollo-server-core');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
         
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const models = require('./models');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  plugins: [
    ApolloServerPluginLandingPageLocalDefault()
  ],
  context: { models },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});