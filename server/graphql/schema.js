const { gql } = require('apollo-server');
const { readdirSync, readFileSync } = require('fs');
const dirname = __dirname + '/schema/';
const schemaFiles = readdirSync(dirname);

let schema = "";
schemaFiles.forEach(file => {
  schema += schema.concat('\n', readFileSync(dirname + file).toString());
});

const typeDefs = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  ${schema}
`;

module.exports = typeDefs;