const categoryResolver = {
  Query: {
    categories(parent, args, { models }) {
      return models.Category.findAll();
    },
    category(parent, { id }, { models }) {
      return models.Category.findByPk(id);
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