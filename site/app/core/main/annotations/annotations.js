export default ngModule => {
  require('./annotations.scss');
  ngModule.directive('annotations', function annotations(fbAPIService, calAPIService, currentService, newObsModal) {
    return {
      template: require('./annotations.jade'),
      scope: {},
      controllerAs: 'ann',
      controller: function annotationsCtrl() {
        const __ = require('underscore');
        this.positives = [
          'CD',
          'R',
          'CV',
        ];
        this.negatives = [
          'FR',
          'FH',
          'AF',
          'AV',
          'O',
          'D',
        ];
        this.students = {};
        this.currentService = currentService;
        fbAPIService.getClasses().on('value', (data) => {
          this.classes = data.val();
        });
        fbAPIService.getClass(currentService.classId).on('value', (data) => {
          const arr = [];
          data.forEach( (child) => {
            arr.push({key: child.key, name: child.val().name, lastname: child.val().lastname, num: child.val().number, course: child.val().course});
          });
          this.students.data = arr;
          this.isLoading = false;
        });
        this.changeClass = (classId) => {
          this.currentService.classId = classId;
        };
        this.hasAnn = (arr, type, week) => {
          const res = __.where(arr, {when: week.toString(), type: type});
          const build = {};
          let html = type;
          if ( res.length > 0 ) {
            html = `${type} <span>${res.length}</span>`;
          }
          build.html = html;
          build.num = res.length;
          return build;
        };
        this.updateVals = () => {
          angular.forEach(this.students, (val, num) => {
            const total = __.groupBy(val.annotations, 'type');
            this.students[num].totals = total;
          });
        };
        this.weeks = calAPIService.getWeekArray();
        this.actualWeek = calAPIService.actualWeek;
        this.changeWeeks = (action) => {
          this.weeks = calAPIService.getWeekArray(action);
          this.callServer(this.tableState);
        };
      },
    };
  });
};
