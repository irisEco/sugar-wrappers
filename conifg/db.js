// 使用koa的js
const config = {
  dialect:"mysql",
  database: "sugar",
  username: "chen",
  password: "123456",
  host: '127.0.0.1',
  post: 3306,
  logger: false,
  dialectOptions: {
    "multipleStatements":true
  },
  pool: {
    max: 10,
    min: 0,
    idle:10000
  },
  define: {
    underscored: true,
    freezeTableName: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    timestamps:false,
    
  }

  
}

module.exports = config;