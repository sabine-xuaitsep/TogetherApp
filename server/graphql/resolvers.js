const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jack" }
];

const resolvers = {
  Query: {
    user: (parent, { id }) => users.find(user => user.id == id)
  },
};
 
module.exports = resolvers;