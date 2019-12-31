'use strict';
module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define(
    "log",
    {
      discription: DataTypes.STRING,
      username: DataTypes.STRING,
      startTime: DataTypes.DATE,
      spendTime: DataTypes.DATE,
      basePath: DataTypes.STRING,
      url: DataTypes.STRING,
      method: DataTypes.STRING,
      params: DataTypes.STRING,
      userAgent: DataTypes.STRING,
      ip: DataTypes.STRING,
      result: DataTypes.STRING,
      permissions: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Log.associate = function(models) {
    // associations can be defined here
  };
  return Log;
};