// 随机函数
// 随机抽取数组里面的某个元素返回
let rdArr = arr => {
  if (!arr.length) return "暂无";

  let num = parseInt(Math.random() * arr.length);

  if (!arr[num]) return "暂无";

  return arr[num];
};

module.exports = {
  rdArr: rdArr
};