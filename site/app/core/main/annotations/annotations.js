export default ngModule => {
  require('./annotations.scss');
  ngModule.directive('annotations', function annotations(fbAPIService, calAPIService, currentService) {
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
        this.currentService = currentService;
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
        this.callServer = (tableState) => {
          this.isLoading = true;
          fbAPIService.getClass(currentService.classId).$loaded().then( (data) => {
            this.students = __.sortBy(data, tableState.sort.predicate);
            if ( tableState.sort.reverse ) {
              this.students.reverse();
            }
            if ( tableState.search.predicateObject ) {
              this.students = __.where(this.students, tableState.search.predicateObject);
            }
            this.isLoading = false;
            this.updateVals();
          });
        };
        this.sendAnn = (key, type, week) => {
          const annotation = {};
          annotation.when = week.toString();
          annotation.type = type;
          if ( this.currentService.edit ) {
            fbAPIService.addAnn(key, annotation);
          }else {
            const arrToFind = __.filter(this.students, {$id: key});
            const keyToDel = __.findKey(arrToFind[0].annotations, {when: annotation.when, type: annotation.type});
            fbAPIService.delAnn(key, keyToDel);
          }
          this.updateVals();
        };
        this.sendWarning = (week) => {
          console.log(week);
        };
        this.weeks = [calAPIService.firstWeek, calAPIService.secondWeek, calAPIService.thirdWeek, calAPIService.forthWeek];
      },
    };
  });
};
