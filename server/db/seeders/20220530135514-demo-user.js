'use strict';

const { faker } = require('@faker-js/faker/locale/fr_BE');
const { Category, User  } = require('./../models');

const demoUsers = [...Array(20)].map((user) => (
  {
    pseudo: faker.name.findName(),
    email: faker.unique(faker.internet.email),
    password: faker.internet.password(),
    birthDate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.image.avatar(),
    intro: faker.lorem.sentence(),
    description: faker.lorem.paragraphs(),
    phone: faker.phone.phoneNumber('+32 4## ######'),
    zip: faker.random.numeric(4, { allowLeadingZeros: false }),
    city: faker.address.city(),
    country: "Belgique",
    emailVerified: false,
    createdAt: faker.date.past(7),
    updatedAt: new Date(),
  }
));

module.exports = {
  async up (queryInterface, Sequelize) {
    const allCategories = await Category.findAll();
    for await (const user of demoUsers) {
      // create User
      const newUser = await User.create(user);
      // shuffle allCategories array
      allCategories.reverse().forEach((category, i) => {
        const j = Math.floor(Math.random() * (i + 1));
        [allCategories[i], allCategories[j]] = [allCategories[j], allCategories[i]];
      });
      // select randomly 0 to 5 categories from allCategories
      const number = Math.floor(Math.random() * 6);
      const categories = allCategories.filter((user, i) => i < number);
      // add categories to user
      await newUser.setCategories(categories);
    }
    
    const allUsers = await User.findAll();
    for await (const user of allUsers) {
      // shuffle allUsers array
      allUsers.reverse().forEach((user, i) => {
        const j = Math.floor(Math.random() * (i + 1));
        [allUsers[i], allUsers[j]] = [allUsers[j], allUsers[i]];
      });
      // select randomly 0 to 3 followers from allUsers
      const number = Math.floor(Math.random() * 4);
      const followers = allUsers.filter((user, i) => i < number);
      // add followers to user
      await user.setFollowers(followers);
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
