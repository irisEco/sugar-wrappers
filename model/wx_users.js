const Sequelize = require("sequelize");
const user = {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  gender: Sequelize.BOOLEAN,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
  version: Sequelize.BIGINT,
  openid: Sequelize.STRING(28),
  nickname: Sequelize.CHAR(100),
  avatarurl: Sequelize.STRING(100),
  gender: Sequelize.CHAR(2),
  country: Sequelize.CHAR(50),
  language: Sequelize.CHAR(18),
  ctime: Sequelize.DATE,
  mobile: Sequelize.CHAR(18)
};

module.exports = function(seq) {
  return seq.define("wx_users", user, {
    timestamps: false
  });
};
