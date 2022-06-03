const categoryResolver = {
  Query: {
    async categories(root, args, { models }) {
      return models.Category.findAll({
        include: [ 'activities', 'users' ],
      });
    },
    async category(root, { id }, { models }) {
      return models.Category.findOne({
        where: { id: id },
        include: [ 'activities', 'users' ],
      });
    },
  },
};
 
module.exports = categoryResolver;