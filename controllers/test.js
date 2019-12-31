// -------------测试----------------------------
let now = new Date();
console.log(now.toString());

// Create the instances ,一对多测试,创建
// db.user
//   .create({ username: "test" })
//   .then(newUser => {
//     // now you can use newUser acessors to create the login
//     return newUser.createRole({ name: "测试"});
//   })
//   .then(newRole => {
//     // newLogin
//     // console.log(newRole)
//   })
//   .catch(error => {
//     // error
//     // console.log(error);
//   });

/******************/
// Create the instances ,多对多测试,创建
// db.role
//   .create({ name: "user" })
//   .then(newRole => {
//     // now you can use newUser acessors to create the login
//     return newRole.createPermission({ name: "普通用户测试" });
//   })
//   .then(newPermission => {
//     // newLogin
//     // console.log(newPermission);
//   })
//   .catch(error => {
//     // error
//     // console.log(error);
//   });
//-------------------1对多----------------------------------------------
//  db.role
//   .create({ name: "koa" })
//   .then(function(role) {
//     // THIS IS WHERE I WOULD LIKE TO SET THE ASSOCIATION
//     var role = db.user.create({
//       role_id: role.get("id"),
//       username: "chen"
//     });

//     return role;
//   })
//   .then(function(role) {
//     // all creation are complete. do something.
//     console.log(role);
//   });

// 方法三
// let rd = Number(Math.random(10)*10).toString()

// db.role.create(
//   {
//     name: "Chair" + rd,
//     title: "普通用户" + rd,
//     descirption: "普通用户甲" + rd,
//     ctime: now.toString(),
//     orders: rd,
//     users: [
//       {
//         username: "chen1" + rd,
//         password: "chen1" + rd,
//         salt: "ccc" + rd,
//         realName: "李德察",
//         avatar: "sugar",
//         phone: "12345678900",
//         email: "11@chen.com",
//         sex: "女",
//         locked: "false",
//       }
//     ]
//   },
//   {
//     include: [db.user]
//   }
// );

//-------------------------------------------
