const userResolver = {
  Query: {
    users(parent, args, { models }) {
      return models.User.findAll();
    },
    user(parent, { id }, { models }) {
      return models.User.findByPk(id);
    },
  },
  User: {
    activities(parent) {
      return parent.getActivities();
    },
    categories(parent) {
      return parent.getCategories();
    },
    participations(parent) {
      return parent.getParticipations();
    },
    subscriptions(parent) {
      return parent.getSubscriptions();
    },
    followers(parent) {
      return parent.getFollowers();
    },
  },
};
 
module.exports = userResolver;