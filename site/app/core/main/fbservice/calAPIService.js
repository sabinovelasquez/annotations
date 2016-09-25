export default ngModule => {
  ngModule.service('calAPIService', function calAPIService() {
    const moment = require('moment');
    this.firstWeek = moment().startOf('month').weekday(1).format('MMMM DD YYYY');
    this.secondWeek = moment(this.firstWeek).add(1, 'week').weekday(1).format('MMMM DD YYYY');
    this.thirdWeek = moment(this.secondWeek).add(1, 'week').weekday(1).format('MMMM DD YYYY');
    this.forthWeek = moment(this.thirdWeek).add(1, 'week').weekday(1).format('MMMM DD YYYY');
    // this.getNumWeeks = (year,month) => {
    //   date = new Date(year,month-1,1);
    //   day = date.getDay();
    //   numDaysInMonth = new Date(year, month, 0).getDate();
    //   return Math.ceil((numDaysInMonth + day) / 7);
    // };
  });
};
