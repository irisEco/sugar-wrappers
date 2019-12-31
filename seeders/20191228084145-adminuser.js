'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
    let now = new Date()
    let r = await queryInterface.bulkInsert(
      "roles",
      [
        {
          name: "管理员",
          title: "S级管理员角色",
          description: "管理员萌萌哒",
          ctime: "2019-12-28",
          orders: "1",
          createdAt: now,
          updatedAt: now
        }
      ],
      {}
    ).then((roles) => {
                        console.log(roles);
                         queryInterface.bulkInsert("AdminPermission", {
                          pid: "2",
                          name: "后台权限",
                          type: "后台",
                          permissionValue: "3",
                          url: "",
                          icon: "",
                          status: "normal",
                          ctime: "2019-12-28",
                          orders: "4",
                          roleId: roles[0][0].id,
                          createdAt: now,
                          updatedAt: now
                        });
                      });

    // const roles = await queryInterface.sequelize.query(
    //   `SELECT id from AdminRoles;`
    // );
    console.log(r);
    // await queryInterface.bulkInsert("AdminPermission", {
    //   pid: "2",
    //   name: "后台权限",
    //   type: "后台",
    //   permissionValue: "3",
    //   url: "",
    //   icon: "",
    //   status: "normal",
    //   ctime: "2019-12-28",
    //   orders: "4",
    //   roleId: roles[0][0].id,
    //   createdAt: now,
    //   updatedAt: now
    // });

  //  await queryInterface.bulkInsert("AdminUser", {
  //    username: "陈饼饼",
  //    password: "123456",
  //    salt: "1123456",
  //    realName: "陈饼",
  //    avatar: "",
  //    phone: "12345678900",
  //    email: "549104586@qq.com",
  //    sex: "男",
  //    locked: "false",
  //    ctime: "2019-12-28",
  //    roleId: roles[0][0].id,
  //    createdAt: now,
  //    updatedAt: now
  //  });
    
     return;
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete("users", null, {});
    // await queryInterface.bulkDelete("AdminPermission", null, {});
    await queryInterface.bulkDelete("roles", null, {});
    return;
  }
};
