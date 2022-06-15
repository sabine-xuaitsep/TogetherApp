const { Op } = require("sequelize");

const activityResolver = {
  Query: {
    activitiesByDate(parent, { latitude, longitude, limit = 100, order = 'ASC' }, { models: { Activity, sequelize } }) {
      return Activity.findAll({
        attributes: {
          include: [
            [ sequelize.fn('ST_Distance_Sphere', sequelize.fn('ST_GeomFromText', `POINT(${longitude} ${latitude})`), sequelize.fn('POINT', sequelize.col('longitude'),sequelize.col('latitude'),)), 'distance' ]
          ]
        },
        where: {
          date: { [Op.gte]: new Date() }
        },
        order: [
          ['date', order],
          ['time', order]
        ],
        limit: limit
      });
    },
    activitiesByDist(parent, { latitude, longitude, distance = 300000, limit = 100, order = 'ASC' }, { models: { Activity, sequelize } }) {
      return Activity.findAll({
        attributes: {
          include: [
            [ sequelize.fn('ST_Distance_Sphere', sequelize.fn('ST_GeomFromText', `POINT(${longitude} ${latitude})`), sequelize.fn('POINT', sequelize.col('longitude'),sequelize.col('latitude'),)), 'distance' ]
          ]
        },
        having: sequelize.where(sequelize.col('distance'), { [Op.lt]: distance }), 
        where: {
          date: { [Op.gte]: new Date() }
        },
        order: [
          [ sequelize.col('distance'), order ]
        ],
        limit: limit
      });
    },
    activity(parent, { id, latitude, longitude }, { models: { Activity, sequelize } }) {
      return Activity.findOne({
        where: { id: id },
        attributes: {
          include: [
            [ sequelize.fn('ST_Distance_Sphere', sequelize.fn('ST_GeomFromText', `POINT(${longitude} ${latitude})`), sequelize.fn('POINT', sequelize.col('longitude'),sequelize.col('latitude'),)), 'distance' ]
          ]
        },
      });
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
    createActivity(parent, data, { models: { Activity } }) {
      return Activity.create(data);
    },
    async updateActivity(parent, data, { models: { Activity } }) {
      const ID = data.id;
      delete data.id;
      const response = await Activity.update(data, {
        where: { id: ID },
      }); 
      return Number(response);
    },
    deleteActivity(parent, { id }, { models: { Activity } }) {
      return Activity.destroy({
        where: { id: id }
      });
    }
  }
};
 
module.exports = activityResolver;