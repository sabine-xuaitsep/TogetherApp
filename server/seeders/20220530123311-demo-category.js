'use strict';

const { faker } = require('@faker-js/faker/locale/fr_BE');

const categoryNames = [
  "Randonnée",
  "Vélo",
  "Moto",
  "Pêche",
  "Kayak",
  "Escalade",
  "Resto",
  "Bar",
  "Rencontre",
  "Autre"
];
const demoCategories = categoryNames.map((category, i) => (
  {
    name: categoryNames[i],
    created_at: faker.date.recent(90),
    updated_at: new Date(),
  }
));

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', demoCategories, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
