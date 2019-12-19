const nunjucks = require("nunjucks");
const path = require("path")

function createEnv(path, opts) {
  var autoescape = opts.autoescape === undefined ? true : opts.autoescape,
    noCache = opts.noCache || false,
    watch = opts.watch || false,
    throwOnUndefined = opts.throwOnUndefined || false,
    env = new nunjucks.Environment(
      new nunjucks.FileSystemLoader(path || "view", {
        noCache: noCache,
        watch: watch
      }),
      {
        autoescape: autoescape,
        throwOnUndefined: throwOnUndefined
      }
    );
  if (opts.filters) {
    for (var f in opts.filters) {
      env.addFilter(f, opts.filters[f]);
    }
  }
  return env;
}

function templating(path, opts) {
  // 创建Nunjucks的env对象:
  var env = createEnv(path, opts);
  return async (ctx, next) => {
    // 给ctx绑定render函数:
    ctx.render = function(view, model) {
      // 把render后的内容赋值给response.body:
      ctx.response.body = env.render(
        view,
        Object.assign({}, ctx.state || {}, model || {})
      );
      // 设置Content-Type:
      ctx.response.type = "text/html";
    };
    // 继续处理请求:
    await next();
  };
}



var env = createEnv("view", {
  watch: true,
  filters: {
    hex: function(n) {
      return "0x" + n.toString(16);
    }
  }
});

var s = env.render("welcome.html", {
  name: "<Nunjucks>",
  fruits: ["Apple", "Pear", "Banana"],
  count: 12000
});




module.exports = templating;
