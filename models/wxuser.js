'use strict';
module.exports = (sequelize, DataTypes) => {
  const WxUser = sequelize.define(
    "WxUser",
    {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      version: DataTypes.STRING,
      openid: DataTypes.STRING,
      nickname: DataTypes.STRING,
      avatarurl: DataTypes.STRING,
      country: DataTypes.STRING,
      language: DataTypes.STRING,
      ctime: DataTypes.DATE,
      mobile: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  WxUser.associate = function(models) {
    // associations can be defined here
    WxUser.belongsToMany(models.Plan, {
      through: "WxUserPlans"
    });
  };
  return WxUser;
};