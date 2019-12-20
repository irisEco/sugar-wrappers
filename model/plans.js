// todo 实现 组局模型
const Sequelize = require("sequelize");

const plan = {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  type: Sequelize.STRING(10),
  title: Sequelize.STRING(100),
  start: Sequelize.STRING(100),
  end: Sequelize.STRING(100),
  startDate: Sequelize.STRING(28),
  startTime: Sequelize.STRING(100),
  endDate: Sequelize.STRING(100),
  endTime: Sequelize.STRING(100),
  remindDate: Sequelize.STRING(100),
  remindTime: Sequelize.STRING(100),
  checkedAllDay: Sequelize.STRING(10),
  checkedRemind: Sequelize.STRING(10),
  checkedNumber: Sequelize.STRING(10),
  num: Sequelize.STRING(10),
  detailedAddress: Sequelize.STRING(100),
  introduction: Sequelize.STRING(100),
  region: Sequelize.STRING(10),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
};

module.exports = function(seq) {
  return seq.define("plans", plan, {
    timestamps: false
  });
};
