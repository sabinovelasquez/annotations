export default ngModule => {
  ngModule.service('calAPIService', () => {
    const moment = require('moment');
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    this.currentMonth = moment().startOf('month').weekday(1).format('MMMM Do YYYY');
    return {
      currentDate: () => {

      }
    };
  });
};
