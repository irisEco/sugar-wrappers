'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    start: DataTypes.STRING,
    end: DataTypes.STRING,
    startDate: DataTypes.STRING,
    startTime: DataTypes.STRING,
    endDate: DataTypes.STRING,
    endTime: DataTypes.STRING,
    remindDate: DataTypes.DATE,
    remindTime: DataTypes.STRING,
    checkedAllDay: DataTypes.STRING,
    num: DataTypes.STRING,
    detailedAddress: DataTypes.STRING,
    introduction: DataTypes.STRING,
    region: DataTypes.STRING
  }, {});
  Plan.associate = function(models) {
    // associations can be defined here

    Plan.belongsToMany(models.WxUser, {
      through: "WxUserPlans",
    });
  };
  return Plan;
};