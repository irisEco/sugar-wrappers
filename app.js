const Koa = require("koa");
const router = require("koa-router")()
const  bodyParser = require("koa-bodyparser")
const app = new Koa();

//挂载post解析,顺序重要,必须在router之前
app.use(bodyParser());
//挂载中间件,路由
app.use(router.routes());


router.get("/", async (ctx, next) => {
  console.log(ctx)
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ~${name}!</h1>`;
});

router.get("/hello/:name", async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});





app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
