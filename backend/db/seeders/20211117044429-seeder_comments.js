'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Comments', [
    {
      userId: 1,
      body: "sick post!",
      storyId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      body: "nice build!!",
      storyId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      body: "POGGERS!!!",
      storyId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
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
