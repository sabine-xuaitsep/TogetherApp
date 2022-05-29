const { gql } = require('apollo-server');
const { readdirSync, readFileSync } = require('fs');
const dirname = __dirname + '/schema/';
const schemaFiles = readdirSync(dirname);
let schema = '';

schemaFiles.forEach(file => {
  schema += readFileSync(dirname + file).toString() + '\n';
});

const typeDefs = gql`
  ${schema}
  
  type Query {
    user(id: ID!): User!
  }
`;

module.exports = typeDefs;