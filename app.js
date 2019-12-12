const Koa = require("koa");
const router = require("koa-router")()
const bodyParser = require("koa-bodyparser")
const controller = require('./controller')
const templating = require("./templating");
let staticFiles = require("./static-files");
const path = require("path");
const app = new Koa();

const isProduction = process.env.NODE_ENV === "production";

// 记录URL以及页面执行时间

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  var start = new Date().getTime(),
    execTime;
  await next();
  execTime = new Date().getTime() - start;
  ctx.response.set("X-Response-Time", `${execTime}ms`);
});

// 处理静态文件
app.use(staticFiles("/static/", __dirname + "/static"));

//挂载post解析,顺序重要,必须在router之前
app.use(bodyParser());

// 负责给ctx加上render()来使用Nunjucks
app.use(
  templating("view", {
    noCache: !isProduction,
    watch: !isProduction
  })
);




//挂载中间件,处理URL路由
app.use(router.routes());
app.use(controller())


app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});



