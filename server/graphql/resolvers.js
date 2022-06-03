const { readdirSync } = require('fs');
const dirname = __dirname + '/resolvers/';
const resolversFiles = readdirSync(dirname);

const resolvers = {
  Query: {},
  Mutation: {},
};

resolversFiles.forEach(file => {
  const path = `./resolvers/${file}`;
  const { Query, Mutation } = require(path);
  Object.assign(resolvers.Query, Query);
  Object.assign(resolvers.Mutation, Mutation);
});

module.exports = resolvers;