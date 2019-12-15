const model = require("./index");

var WxUser = model.seq.define(
  "wx_user",
  {
    id: {
      type: model.Sequelize.STRING(50),
      primaryKey: true
    },
    name: model.Sequelize.STRING(100),
    gender: model.Sequelize.BOOLEAN,
    createdAt: model.Sequelize.BIGINT,
    updatedAt: model.Sequelize.BIGINT,
    version: model.Sequelize.BIGINT,
    openid: model.Sequelize.STRING(28),
    nickname: model.Sequelize.CHAR(100),
    avatarurl: model.Sequelize.STRING(100),
    gender: model.Sequelize.CHAR(2),
    country: model.Sequelize.CHAR(50),
    language: model.Sequelize.CHAR(18),
    ctime: model.Sequelize.DATE,
    mobile: model.Sequelize.CHAR(18)
  },
  {
    timestamps: false
  }
  // { define: { freezeTableName: true } }
);

module.exports = WxUser;



