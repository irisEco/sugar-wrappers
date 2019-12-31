'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("logs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      discription: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      startTime: {
        type: Sequelize.DATE
      },
      spendTime: {
        type: Sequelize.DATE
      },
      basePath: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      method: {
        type: Sequelize.STRING
      },
      params: {
        type: Sequelize.STRING
      },
      userAgent: {
        type: Sequelize.STRING
      },
      ip: {
        type: Sequelize.STRING
      },
      result: {
        type: Sequelize.STRING
      },
      permissions: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('logs');
  }
};