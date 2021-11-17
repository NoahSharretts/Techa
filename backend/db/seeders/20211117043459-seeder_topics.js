'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Topics', [
      {
        name: '#cool',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '#pog',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '#linus',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Topics', 
      null, 
      {
        truncate: true, cascade: true, restartIdentity: true 
      }
    );
  }
};
