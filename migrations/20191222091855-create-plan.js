'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Plans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // usersId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "WxUsers",
      //     key: "id"
      //   }
      // },
      type: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      start: {
        type: Sequelize.STRING
      },
      end: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.STRING
      },
      startTime: {
        type: Sequelize.STRING
      },
      endDate: {
        type: Sequelize.STRING
      },
      endTime: {
        type: Sequelize.STRING
      },
      remindDate: {
        type: Sequelize.DATE
      },
      remindTime: {
        type: Sequelize.STRING
      },
      checkedAllDay: {
        type: Sequelize.STRING
      },
      num: {
        type: Sequelize.STRING
      },
      detailedAddress: {
        type: Sequelize.STRING
      },
      introduction: {
        type: Sequelize.STRING
      },
      region: {
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
    return queryInterface.dropTable('Plans');
  }
};