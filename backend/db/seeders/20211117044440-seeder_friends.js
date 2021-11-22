'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Friends', [
      {
        userId: 1,
        followingId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        followingId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        followingId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        followingId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Friends', 
      null, 
      {
        truncate: true, cascade: true, restartIdentity: true 
      }
    );
  }
};
