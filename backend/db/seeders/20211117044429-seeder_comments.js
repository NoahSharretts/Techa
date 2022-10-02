'use strict';
const faker = require('faker');

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const comments = [];

for(let i = 0; i <= 200; i++) {
  let newComment = {
      userId: getRandomNum(1, 10),
      postId: getRandomNum(1, 50),
      body: faker.lorem.sentence(),
      createdAt: new Date(),
      updatedAt: new Date()
  }
  comments.push(newComment)
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Comments', comments, [
   ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Comments',
      null,
      {
        truncate: true, cascade: true, restartIdentity: true
      }
    );
  }
};
