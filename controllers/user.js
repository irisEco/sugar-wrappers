// var now = Date.now();
// // 增
// WxUser.create({
//   id: "g-" + now,
//   name: "Gaffey",
//   gender: "男",
//   nickname: "测试而已",
//   createdAt: now,
//   updatedAt: now,
//   version: 0
// })
//   .then(function(p) {
//     console.log("created." + JSON.stringify(p));
//   })
//   .catch(function(err) {
//     console.log("failed: " + err);
//   });

// (async () => {
//   var dog = await WxUser.create({
//     id: "d-" + now,
//     nickname: "用户头像",
//     openid: "11111111",
//     avatarurl: "",
//     gender: "1",
//     country: "中国",
//     province: "上海",
//     city: "上海",
//     language: "中文",
//     ctime: now,
//     mobile: "18683329018"
//   });
//   console.log("created: " + JSON.stringify(dog));
// })();

// // 查
// (async () => {
//   var WxUsers = await WxUser.findAll({
//     where: {
//       name: "Gaffey"
//     }
//   });
//   console.log(`find ${WxUsers.length}  WxUsers:`);
//   for (let p of WxUsers) {
//     console.log(JSON.stringify(p));
//     console.log("update  WxUser...");
//     // 改
//     p.gender = "女";
//     p.updatedAt = Date.now();
//     p.version++;
//     await p.save();
//     if (p.version === 3) {
//       await p.destroy();
//       console.log(`${p.name} was destroyed.`);
//     }
//   }
// })();
