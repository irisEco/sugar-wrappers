// 将时间戳格式化为 YYYY-MM-DD-hh-mm-ss
var timeFormat = t => {
  const d = new Date(t);
  const resDate =
    d.getFullYear() +
    "-" +
    parseInt(d.getMonth() + 1) +
    "-" +
    parseInt(d.getDate());
  const resTime =
    parseInt(d.getHours()) +
    ":" +
    parseInt(d.getMinutes()) +
    ":" +
    parseInt(d.getSeconds());

  return resDate + " " + resTime;
};
// 将YYYY-MM-DD-hh-mm-ss为 时间戳
let parserDate = date => {
  var t = Date.parse(date);
  if (!isNaN(t)) {
    return new Date(Date.parse(date.replace(/-/g, "/")));
  }
};


module.exports = {
  timeFormat: timeFormat,
  parserDate: parserDate
};