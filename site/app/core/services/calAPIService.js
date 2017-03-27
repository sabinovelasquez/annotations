export default ngModule => {
  ngModule.service('calAPIService', function calAPIService() {
    const moment = require('moment');
    this.firstWeek = moment().startOf('month').weekday(1);
    this.secondWeek = moment(this.firstWeek).add(1, 'week').weekday(1);
    this.thirdWeek = moment(this.secondWeek).add(1, 'week').weekday(1);
    this.forthWeek = moment(this.thirdWeek).add(1, 'week').weekday(1);
    // .format('MMMM DD')
  });
};
