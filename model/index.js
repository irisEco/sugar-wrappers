const Sequelize = require("sequelize");
const config = require("../conifg/db");
const _ = require("lodash");
const fs = require("fs");
const path = require("path");

////    db测试  ////////////////////////////////////////////////////////////////////

console.log("init sequelize...");
console.log("database: ", config.database);
console.log("username: ", config.username);
console.log("password: ", config.password);
console.log("host:", config.host);

config.logger = process.env.NODE_ENV == "production" || false;

var seq = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

var db = {};

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf(".") !== 0 && file !== "index.js";
  })
  .forEach(file => {
    var model = seq.import(path.join(__dirname, file));
    db[_.upperFirst(model.name)] = model;
  });

db.seq = seq;

module.exports = db;
