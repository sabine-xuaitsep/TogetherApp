const activityResolver = {
  Query: {
    activities(parent, args, { models }) {
      return models.Activity.findAll();
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
};
 
module.exports = activityResolver;