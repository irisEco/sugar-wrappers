'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define(
    "permission",
    {
      pid: DataTypes.STRING,
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      permissionValue: DataTypes.STRING,
      url: DataTypes.STRING,
      icon: DataTypes.STRING,
      status: DataTypes.STRING,
      ctime: DataTypes.STRING,
      orders: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Permission.associate = function(models) {
    // associations can be defined here
    console.log(models)
    Permission.belongsToMany(models.role, {
      through: "role_permission",
      foreignKey:"permission_id"
    });
  };
  return Permission;
};