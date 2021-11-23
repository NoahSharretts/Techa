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

    // {
    //   userId: 1,
    //   body: "",
    //   postId: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 2,
    //   body: "",
    //   postId: 2,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 3,
    //   body: "",
    //   postId: 3,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 3,
    //   body: "",
    //   postId: 4,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   userId: 3,
    //   body: "",
    //   postId: 5,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },

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
