const activityResolver = {
  Query: {
    activities(parent, args, { models }) {
      return models.Activity.findAll({ limit: 5 });
    },
    activity(parent, { id }, { models }) {
      return models.Activity.findByPk(id);
    },
  },  
  Activity: {
    category(parent) {
      return parent.getCategory();
    },
    user(parent) {
      return parent.getUser();
    },
    participants(parent) {
      return parent.getParticipants();
    },
  },
  Mutation: {
    createActivity(parent, data, { models }) {
      return models.Activity.create(data);
    },
    async updateActivity(parent, data, { models }) {
      const ID = data.id;
      delete data.id;
      const response = await models.Activity.update(data, {
        where: { id: ID },
      }); 
      return Number(response);
    },
    deleteActivity(parent, { id }, { models }) {
      return models.Activity.destroy({
        where: { id: id }
      });
    }
  }
};
 
module.exports = activityResolver;