const activityResolver = {
  Query: {
    async activities(root, args, { models }) {
      return models.Activity.findAll({
        include: [ 
          'category', 
          'user', 
          'participants' 
        ],
      });
    },
    async activity(root, { id }, { models }) {
      return models.Activity.findOne({
        where: { id: id },
        include: [ 
          'category', 
          'user', 
          'participants' 
        ],
      });
    },
  },
};
 
module.exports = activityResolver;