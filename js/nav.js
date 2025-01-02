// 返回顶部显示网页阅读进度
window.onscroll = percent;

// 页面百分比计算
function percent() {
  // 计算页面滚动百分比
  let a = document.documentElement.scrollTop || window.pageYOffset,
  b = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  ) - document.documentElement.clientHeight,
  result = Math.round((a / b) * 100);
  
  // 更新显示
  let btn = document.querySelector("#percent");
  result <= 99 || (result = 99);
  btn.innerHTML = result;
}
