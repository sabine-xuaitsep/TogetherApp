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
  Mutation: {
    async createUser(parent, data, { models }) {
      const checkUser = await models.User.findOne({
        where: { email: data.email }
      });
      return checkUser === null
        ? models.User.create(data)
        : new Error("email already registered");
    },
    async updateUser(parent, data, { models }) {
      const ID = data.id;
      delete data.id;
      const response = await models.User.update(data, {
        where: { id: ID },
      }); 
      return Number(response);
    },
    deleteUser(parent, { id }, { models }) {
      return models.User.destroy({
        where: { id: id }
      });
    }
  }
};
 
module.exports = userResolver;