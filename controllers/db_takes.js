//todo 实现自动化生成假数据
 //todo 测试
const Pet = require("../test/test")

 var now = Date.now();

 Pet.create({
   id: "g-" + now,
   name: "Gaffey",
   gender: false,
   birth: "2007-07-07",
   createdAt: now,
   updatedAt: now,
   version: 0
 })
   .then(function(p) {
     console.log("created." + JSON.stringify(p));
   })
   .catch(function(err) {
     console.log("failed: " + err);
   });

 (async () => {
   var dog = await Pet.create({
     id: "d-" + now,
     name: "Odie",
     gender: false,
     birth: "2008-08-08",
     createdAt: now,
     updatedAt: now,
     version: 0
   });
   console.log("created: " + JSON.stringify(dog));
 })();

 (async () => {
   var pets = await Pet.findAll({
     where: {
       name: "Gaffey"
     }
   });
   console.log(`find ${pets.length} pets:`);
   for (let p of pets) {
     console.log(JSON.stringify(p));
     console.log("update pet...");
     p.gender = true;
     p.updatedAt = Date.now();
     p.version++;
     await p.save();
     if (p.version === 3) {
       await p.destroy();
       console.log(`${p.name} was destroyed.`);
     }
   }
 })();

 