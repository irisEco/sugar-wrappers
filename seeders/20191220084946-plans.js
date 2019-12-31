"use strict";
const rdArr = require("../tool/rd")
module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    let now = new Date();
    let type = ["饭局", "书会", "马拉松", "打卡自习局", "双人电影局"];
    let title = ["饭局", "书会", "马拉松", "打卡自习局", "双人电影局"];
    let prole = ["管理员", "普通用户"];
    return queryInterface.bulkInsert(
      "Plans",
      [
        {
          openid: "wefeawefergrt-wrfe",
          prole: rdArr.rdArr(prole),
          type: rdArr.rdArr(type),
          title: rdArr.rdArr(title),
          startDate: "2019-12-31 12:00:00",
          endDate: "2020-12-31 12:00:00",
          remindDate: "2020-12-31 12:00:00",
          checkedAllDay: "true",
          checkedNumber: "true",
          checkedRemind: "true",
          num: "10",
          detailedAddress: "湖南省 长沙市 芙蓉区",
          introduction: "湘潭大学兴湘学院2013届同学小聚",
          region: "中国"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    let now = new Date();
    return queryInterface.bulkDelete(
      "Plans",
      [
        {
          openid: "wefeawefergrt-wrfe",
          prole: "普通用户",
          type: "举办人",
          title: "饭局",
          startDate: "2019-12-31 12:00:00",
          endDate: "2020-12-31 12:00:00",
          remindDate: "2020-12-31 12:00:00",
          checkedAllDay: "true",
          checkedNumber: "true",
          checkedRemind: "true",
          num: "10",
          detailedAddress: "湖南省 长沙市 芙蓉区",
          introduction: "湘潭大学兴湘学院2013届同学小聚",
          region: "中国"
        }
      ],
      {}
    );
  }
};


