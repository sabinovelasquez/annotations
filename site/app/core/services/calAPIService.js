export default ngModule => {
  ngModule.service('calAPIService', function calAPIService() {
    const moment = require('moment');
    this.yearWeeks = moment().isoWeeksInYear();
    this.currentWeekNum = moment().isoWeek();
    this.actualWeek = moment().isoWeek(this.currentWeekNum).startOf('week').weekday(1).format('MMM DD YYYY');

    this.getWeekArray = (action) => {
      const arr = [];
      if (!action) {
        this.currentWeekNum -= 1;
      }else {
        this.currentWeekNum += 1;
      }
      for (let id = 0; id < 4; id++) {
        arr.push(moment().weekday(1).isoWeek(this.currentWeekNum + id).format('MMM DD YYYY'));
      }
      return arr;
    };
    // .format('MMMM DD')
  });
};
