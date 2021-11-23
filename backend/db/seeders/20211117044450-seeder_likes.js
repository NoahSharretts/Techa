'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Likes', [
      {
        userId: 2,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        postId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        postId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        postId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        postId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        postId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        postId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        postId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        postId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        postId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        postId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        postId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        postId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        postId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        postId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        postId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        postId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        postId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        postId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        postId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        postId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        postId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        postId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        postId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        postId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        postId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        postId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        postId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        postId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        postId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        postId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Likes', 
      null, 
      {
        truncate: true, cascade: true, restartIdentity: true 
      }
    );
  }
};
