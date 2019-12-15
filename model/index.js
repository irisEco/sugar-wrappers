const Sequelize = require("sequelize");
const config = require("../config");
////    db测试  ////////////////////////////////////////////////////////////////////

console.log("init sequelize...");
console.log("database: ", config.database);
console.log("username: ", config.username);
console.log("password: ", config.password);
console.log("host:", config.host);

var seq = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    }
  }
);

module.exports = {
  "seq":seq,
  "Sequelize":Sequelize
};