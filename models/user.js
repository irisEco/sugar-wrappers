'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      salt: DataTypes.STRING,
      realName: DataTypes.STRING,
      avatar: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      sex: DataTypes.STRING,
      locked: DataTypes.STRING,
      ctime: DataTypes.DATE
    },
    {
      timestamps: false
    }
  );
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.role,{foreignKey:"role_id"});
  };
  return User;
};