const db = require("../models/index");
const time = require("../tool/time");

var api_index = async (ctx, next) => {
  await ctx.render("base.html", {
    title: "Sign In",
    name: "Mr "
  });
};

var api_plans = async (ctx, next) => {
  console.log(ctx.params);
  // -------------测试----------------------------
  var plans = await db.Plan.findAll().then(res => {
    return res.map(row => {
      return row.dataValues;
    });
  });

  //-------------------------------------------
  // console.log('plans:   ')
  // console.log(plans)
  // 将时间戳格式化
  let list = plans.map(p => {
    p.createdAt = time.timeFormat(p.createdAt);
    p.updatedAt = time.timeFormat(p.updatedAt);
    return p;
  });
  console.log("list: ");
  await ctx.render("plans.html", {
    plans: list
  });
};


module.exports = {
  "GET /api": api_index,
  "GET /api/groups": api_plans
};
