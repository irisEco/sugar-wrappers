'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("WxUsers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // plansId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: "Plan", // name of Target model
      //     key: "id" // key in Target model that we're referencing
      //   },
      // },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      version: {
        type: Sequelize.STRING
      },
      openid: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      avatarurl: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      ctime: {
        type: Sequelize.DATE
      },
      mobile: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('WxUsers');
  }
};