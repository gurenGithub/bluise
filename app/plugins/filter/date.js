import moment from 'moment';

export const displayTime = (time) => {
  return moment(time, 'x').format('YYYY-MM-DD hh:mm:ss');
};
