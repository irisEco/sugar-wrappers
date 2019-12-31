'use strict';
module.exports = (sequelize, DataTypes) => {
  const RolePermission = sequelize.define(
    "role_permission",
    {
      permission_id: DataTypes.INTEGER,
      role_id: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  RolePermission.associate = function(models) {
    // associations can be defined here

  };
  return RolePermission;
};