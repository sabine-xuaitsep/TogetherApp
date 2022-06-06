'use strict';

const { faker } = require('@faker-js/faker/locale/fr_BE');
const { Activity, Category, User  } = require('./../models');

// coordinates of the "Carré" in Liège
const lat = 50.642027;
const long = 5.569576;
// min & max coordinates values
const maxLat = lat + (10/100); // north
const minLat = lat - (40/100); // south
const maxLong = long + (40/100); // east
const minLong = long - (70/100); // west

const demoActivities = [...Array(100)].map((activity) => (
  {
    title: faker.lorem.sentence(),
    image: faker.image.image(),
    description: faker.lorem.paragraphs(),
    date: faker.date.soon(180),
    time: `${faker.datatype.number({ min: 0, max: 23 })}:${faker.datatype.number({ min: 0, max: 59 })}`,
    duration: `${faker.datatype.number({ min: 0, max: 23 })}:${faker.datatype.number({ min: 0, max: 59 })}`,
    latitude: faker.address.latitude(maxLat, minLat, 6),
    longitude: faker.address.longitude(maxLong, minLong, 6),
    country: "Belgique",
    zip: faker.random.numeric(4, { allowLeadingZeros: false }),
    city: faker.address.city(),
    street: faker.address.street(),
    streetNumber: faker.datatype.number({ min: 1, max: 357 }),
    maxParticipants: faker.datatype.number({ min: 10, max: 99 }),
    registredParticipants: null,
    categoryId: null,
    userId: null,
    createdAt: faker.date.recent(90),
  }
));

module.exports = {
  async up (queryInterface, Sequelize) {
    const allCategories = await Category.findAll();
    const allUsers = await User.findAll();

    for await (const activity of demoActivities) {
      // shuffle allUsers array
      allUsers.reverse().forEach((user, i) => {
        const j = Math.floor(Math.random() * (i + 1));
        [allUsers[i], allUsers[j]] = [allUsers[j], allUsers[i]];
      });
      // select randomly 0 to 10 participants from allUsers
      const number = Math.floor(Math.random() * 11);
      const participants = allUsers.filter((user, i) => i < number);
      // replace some data with async data
      activity.registredParticipants = participants.length,
      activity.categoryId = Math.floor(Math.random() * allCategories.length + 1);
      activity.userId = Math.floor(Math.random() * allUsers.length + 1);
      // create Activity
      const newActivity = await Activity.create(activity);
      // add participants to activity
      await newActivity.setParticipants(participants);
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('activities', null, {});
  }
};
