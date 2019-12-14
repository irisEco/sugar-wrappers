const Seq = require("./index");

var WxUser = Seq.define(
  "wx_user",
  {
    id: {
      type: Seq.STRING(50),
      primaryKey: true
    },
    name: Seq.STRING(100),
    gender: Seq.BOOLEAN,
    createdAt: Seq.BIGINT,
    updatedAt: Seq.BIGINT,
    version: Seq.BIGINT,
    openid: Seq.STRING(28),
    nickname: Seq.CHAR(100),
    avatarurl: Seq.STRING(100),
    gender: Seq.CHAR(2),
    country: Seq.CHAR(50),
    language: Seq.CHAR(18),
    ctime: Seq.DATE,
    mobile: Seq.CHAR(18)
  },
  {
    timestamps: false
  }
  // { define: { freezeTableName: true } }
);

module.exports = {
  WxUser
};


