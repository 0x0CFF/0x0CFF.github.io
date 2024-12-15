function difference(startDate, nowDate) {
  const startDateUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const nowDateUTC = Date.UTC(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());
  day = 1000*60*60*24;
  return(nowDateUTC - startDateUTC)/day
}

// 获取起始日期
let startDate = new Date(document.getElementById("startDate").getAttribute("startDate"));
// console.log(startDate);
// 获取当前日期
let nowDate = new Date();
// console.log(nowDate);

let dValue = difference(startDate,nowDate);
// console.log(dValue)

// 填写进 HTML
document.getElementById ("dValue").innerHTML = dValue;
