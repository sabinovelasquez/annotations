export default ngModule => {
  ngModule.service('calAPIService', function calAPIService() {
    const moment = require('moment');
    this.currentMonth = moment().startOf('month').weekday(1).format('MMMM DD YYYY');
  });
};
