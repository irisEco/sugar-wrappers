var fn_welcome = async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>welcome, ${name}!</h1>`;
};

module.exports = {
  "GET /welcome/:name": fn_welcome
};
