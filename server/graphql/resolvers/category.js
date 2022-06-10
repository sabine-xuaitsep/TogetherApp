const categoryResolver = {
  Query: {
    categories(parent, args, { models: { Category } }) {
      return Category.findAll();
    },
    category(parent, { id }, { models: { Category } }) {
      return Category.findByPk(id);
    },
  },
  Category: {
    activities(parent) {
      return parent.getActivities();
    },
    users(parent) {
      return parent.getUsers();
    },
  },
};
 
module.exports = categoryResolver;