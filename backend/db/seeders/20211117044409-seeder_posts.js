'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        userId: 1,
        topicId: 1,
        body: "seeder 1",
        photo:"",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        topicId: 2,
        body: "seeder 2",
        photo:"",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        topicId: 2,
        body: "seeder 3",
        photo:"",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Posts', 
      null, 
      {
        truncate: true, cascade: true, restartIdentity: true 
      }
    );
  }
};
