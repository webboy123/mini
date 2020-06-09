const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
};

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
};

const datedifference = (sDate1, sDate2) => {    //sDate1和sDate2是2006-12-18格式 
  let dateSpan,
      tempDate,
      iDays;
  sDate1 = Date.parse(sDate1);
  sDate2 = Date.parse(sDate2);
  dateSpan = sDate2 - sDate1;
  dateSpan = Math.abs(dateSpan);
  iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
  return iDays
};
function formatDate(date){ //设置时间转换格式

  const y = date.getFullYear();  //获取年
  
      const m = date.getMonth() + 1;  //获取月
  
      m = m < 10 ? '0' + m : m;  //判断月是否大于10
  
      const d = date.getDate();  //获取日
  
      d = d < 10 ? ('0' + d) : d;  //判断日期是否大10
  
      return y + '-' + m + '-' + d;  //返回时间格式
  
}
function getMonths(date1 , date2){
  //用-分成数组
  date1 = date1.split("-");
  date2 = date2.split("-");
  //获取年,月数
  var year1 = parseInt(date1[0]) ,
  month1 = parseInt(date1[1]) ,
  year2 = parseInt(date2[0]) ,
  month2 = parseInt(date2[1]) ,
  //通过年,月差计算月份差
  months = (year2 - year1) * 12 + (month2-month1) + 1;
  return months;
}
module.exports = {
  formatTime,
  datedifference,
}
