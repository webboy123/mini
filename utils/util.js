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

const formatUtcTime = (v) => {
  let date = new Date(v);
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
const timeFn = (d1) => {//di作为一个变量传进来
  //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
  let dateBegin = new Date(formatUtcTime(d1).replace(/-/g, "/"));//将-转化为/，使用new Date
  let dateEnd = new Date();//获取当前时间
  let dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
  let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
  let leave1=dateDiff%(24*3600*1000) //计算天数后剩余的毫秒数
  let hours=Math.floor(leave1/(3600*1000))//计算出小时数
  //计算相差分钟数
  let leave2=leave1%(3600*1000) //计算小时数后剩余的毫秒数
  let minutes=Math.floor(leave2/(60*1000))//计算相差分钟数
  //计算相差秒数
  let leave3=leave2%(60*1000) //计算分钟数后剩余的毫秒数
  let seconds=Math.round(leave3/1000)
  // console.log(" 相差 "+dayDiff+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
  // console.log(dateDiff+"时间差的毫秒数",dayDiff+"计算出相差天数",leave1+"计算天数后剩余的毫秒数"
  // ,hours+"计算出小时数",minutes+"计算相差分钟数",seconds+"计算相差秒数");
  if (dayDiff > 0 && dayDiff < 30) {
    return dayDiff+'天前'
  } else if (dayDiff <= 0) {
    if (hours >= 1) {
      return hours+'小时前'
    } else {
      return minutes+'分钟前'
    }
  } else if (dayDiff >= 30 && dayDiff < 365) {
    return Math.floor(dayDiff/30)+'月前'
  } else {
    return Math.floor(dayDiff/365)+'年前'
  }
}
module.exports = {
  formatTime,
  datedifference,
  timeFn
}
