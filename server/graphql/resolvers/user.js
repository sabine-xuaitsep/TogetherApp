const userResolver = {
  Query: {
    async users(root, args, { models }) {
      return models.User.findAll({
        include: [ 
          'activities', 
          'categories', 
          'participations', 
          'subscriptions', 
          'followers' 
        ],
      });
    },
    async user(root, { id }, { models }) {
      return models.User.findOne({
        where: { id: id },
        include: [ 
          'activities', 
          'categories', 
          'participations', 
          'subscriptions', 
          'followers' 
        ],
      });
    },
  },
};
 
module.exports = userResolver;