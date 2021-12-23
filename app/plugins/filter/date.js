import moment from 'moment';
function jsDateDiff(publishTime) {
  publishTime = parseInt(publishTime);
  var d_minutes, d_hours, d_days;
  var timeNow = parseInt(new Date().getTime());

  let currentYear = new Date().getFullYear();
  var d;
  d = timeNow - publishTime;
  d_days = parseInt(d / 86400);
  d_hours = parseInt(d / 3600);
  d_minutes = parseInt(d / 60);
  if (d_days > 0 && d_days < 4) {
    return d_days + '天前';
  } else if (d_days <= 0 && d_hours > 0) {
    return d_hours + '小时前';
  } else if (d_hours <= 0 && d_minutes > 0) {
    return d_minutes + '分钟前';
  } else {
    var s = new Date(publishTime);
    // s.getFullYear()+"年";

    if (currentYear === s.getFullYear()) {
      return `${s.getMonth() + 1}月${s.getDate()}日`; //  + '月' + s.getDate() + '日';
    }
    //console.log(s, publishTime);
    return `${s.getFullYear()}年${s.getMonth() + 1}月${s.getDate()}日`; //  + '月' + s.getDate() + '日';
  }
}
export const displayTime = (time) => {
  // console.log(time);
  return jsDateDiff(time);
  //return moment(time, 'x').format('YYYY-MM-DD hh:mm:ss');
};
