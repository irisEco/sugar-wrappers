// 测试 model 查询等

const model = require("../model/index");
console.log("init sequelize...");

var Pet = model.seq.define(
  "pets1",
  {
    id: {
      type: model.Sequelize.STRING(50),
      primaryKey: true
    },
    name: model.Sequelize.STRING(100),
    gender: model.Sequelize.BOOLEAN,
    birth: model.Sequelize.STRING(10),
    createdAt: model.Sequelize.BIGINT,
    updatedAt: model.Sequelize.BIGINT,
    version: model.Sequelize.BIGINT
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

async function DbCreate() {
  console.log("brfore");
  console.log("1");
  await Pet.sync();
  console.log("2");
  console.log("after");
}

DbCreate();



module.exports = Pet;





var now = Date.now();

Plan.create({
  id: now,
  title: "test1",
  type: "1",
  start: "2007-07-07",
  end: "2007-07-07",
  startDate: "2007-07-07",
  startTime: "2007-07-07",
  endDate: "2007-07-07",
  endTime: "2007-07-07",
  remindDate: "2007-07-07",
  remindTime: "2007-07-07",
  checkedAllDay: "false",
  checkedRemind: "true",
  checkedNumber: "true",
  num: "2",
  detailedAddress: "测试",
  introduction: "测试1",
  region: "上海,上海市,嘉定",
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
  var dog = await Plan.create({
    id: now,
    title: "test2",
    type: "2",
    start: "2008-07-07",
    end: "2008-07-07",
    startDate: "2008-07-07",
    startTime: "2008-07-07",
    endDate: "2008-07-07",
    endTime: "2008-07-07",
    remindDate: "2008-07-07",
    remindTime: "2008-07-07",
    checkedAllDay: "false",
    checkedRemind: "true",
    checkedNumber: "true",
    num: "5",
    detailedAddress: "测试",
    introduction: "测试1",
    region: "上海,上海市,徐汇",
    createdAt: now,
    updatedAt: now,
    version: 0
  });
  console.log("created: " + JSON.stringify(dog));
})();

(async () => {
  var pets = await Plan.findAll({
    where: {
      title: "test1"
    }
  });
  console.log(`find ${pets.length} pets:`);
  for (let p of pets) {
    console.log(JSON.stringify(p));
    console.log("update pet...");
    p.checkedNumber = "true";
    p.updatedAt = Date.now();
    p.version++;
    await p.save();
    if (p.version === 3) {
      await p.destroy();
      console.log(`${p.title} was destroyed.`);
    }
  }
})();
