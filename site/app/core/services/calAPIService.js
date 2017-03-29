export default ngModule => {
  ngModule.service('calAPIService', function calAPIService() {
    const moment = require('moment');
    this.startingDate = moment().startOf('month').weekday(1).subtract(1, 'week');
    this.yearWeeks = moment().isoWeeksInYear();
    this.currentWeekNum = moment().isoWeek();
    this.activeWeek = moment().weekday(1).week(this.currentWeekNum);

    console.log(this.currentWeekNum);
    console.log(this.wiy);
    this.getWeekArray = (action, weeks) => {
      const arr = [];
      if ( action === 'add' ) {
        for (let id = 0; id < weeks; id++) {
          arr.push(moment(this.startingDate).add(id, 'week').weekday(1));
        }
      }else {
        for (let id = 0; id < weeks; id++) {
          arr.push(moment(this.startingDate).subtract(id, 'week').weekday(1));
        }
      }
      return arr;
    };
    // .format('MMMM DD')
  });
};
