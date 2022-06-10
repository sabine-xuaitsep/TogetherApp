const userResolver = {
  Query: {
    users(parent, args, { models: { User } }) {
      return User.findAll();
    },
    user(parent, { id }, { models: { User } }) {
      return User.findByPk(id);
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
    async createUser(parent, data, { models: { User } }) {
      const checkUser = await User.findOne({
        where: { email: data.email }
      });
      return checkUser === null
        ? User.create(data)
        : new Error("email already registered");
    },
    async updateUser(parent, data, { models: { User } }) {
      const ID = data.id;
      delete data.id;
      const response = await User.update(data, {
        where: { id: ID },
      }); 
      return Number(response);
    },
    deleteUser(parent, { id }, { models: { User } }) {
      return User.destroy({
        where: { id: id }
      });
    }
  }
};
 
module.exports = userResolver;