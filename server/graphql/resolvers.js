const { readdirSync } = require('fs');
const dirname = __dirname + '/resolvers/';
const resolversFiles = readdirSync(dirname);

const resolvers = {};

resolversFiles.forEach(file => {
  const path = `./resolvers/${file}`;
  const resolver = require(path);
  Object.keys(resolver).forEach(key => {
    !resolvers[key] 
      ? resolvers[key] = resolver[key]
      : Object.assign(resolvers[key], resolver[key]);
  });
});

module.exports = resolvers;