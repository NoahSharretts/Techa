'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'some@user.io',
        username: 'Dmo',
        avatar: 'https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        avatar: 'https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser3',
        avatar: 'https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser4',
        avatar: 'https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser5',
        avatar: 'https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },{
        email: faker.internet.email(),
        username: 'FakeUser6',
        avatar: 'https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },{
        email: faker.internet.email(),
        username: 'FakeUser7',
        avatar: 'https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },{
        email: faker.internet.email(),
        username: 'FakeUser8',
        avatar: 'https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },{
        email: faker.internet.email(),
        username: 'FakeUser9',
        avatar: 'https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },{
        email: faker.internet.email(),
        username: 'FakeUser10',
        avatar: 'https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Users', 
      null, 
      {
        truncate: true, cascade: true, restartIdentity: true 
      }
    );
  }
};
