'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.createTable("WxUserPlans", {
        WxUserId: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        PlanId: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          default: new Date()
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          default: new Date()
        }
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.dropTable("WxUserPlans");
    
  }
};
