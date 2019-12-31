'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "role",
    {
      name: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      ctime: DataTypes.STRING,
      orders: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Role.associate = function(models) {
    // associations can be defined here
    Role.hasMany(models.user, { foreignKey: "role_id" });
    Role.belongsToMany(models.permission, {
      through: "role_permission",
      foreignKey:"role_id"
    });
  };
  return Role;
};