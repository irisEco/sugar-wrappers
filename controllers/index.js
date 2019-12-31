const db = require("../models/index");

var fn_index = async (ctx, next) => {

  await ctx.render("sigin_in.html", {
    title: "Sign In",
    name: "Mr "
  });
};

var fn_registered = async (ctx, next) => {
  await ctx.render("sigin_up.html")
}


var fn_signin = async (ctx, next) => {
  var name = ctx.request.body.user || "",
    password = ctx.request.body.password || "";
  // console.log(ctx.params);
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === "koa" && password === "12345") {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    console.log("is ok!");
    // -------------测试----------------------------
    var wx_users = await db.WxUser.findAll({
      where: {
        name: "John Doe"
      }
    }).then(res => {
      return res.map(row => {
        return row.dataValues;
      });
    });

    //-------------------------------------------
    await ctx.render("index.html", {
      title: "Sign In OK",
      name: "Mr Node",
      users: wx_users
    });
  } else {
    // ctx.response.body = `<h1>Login failed!</h1>
    //     <p><a href="/">Try again</a></p>`;
    await ctx.render("404.html", {
      title: "Sign In OK",
      name: "Mr Node"
    });
  }
};

module.exports = {
  "GET /": fn_index,
  "POST /signin": fn_signin,
  "GET /registered": fn_registered
};
