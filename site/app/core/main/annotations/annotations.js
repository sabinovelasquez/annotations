export default ngModule => {
  require('./annotations.scss');
  ngModule.directive('annotations', function annotations(fbAPIService, calAPIService, currentService) {
    return {
      template: require('./annotations.jade'),
      scope: {},
      controllerAs: 'ann',
      controller: function annotationsCtrl() {
        const __ = require('underscore');
        this.callServer = (tableState) => {
          this.isLoading = true;
          fbAPIService.getClass(currentService.classId).$loaded().then( (data) => {
            this.isLoading = false;
            this.students = __.sortBy(data, tableState.sort.predicate);
            if ( tableState.sort.reverse ) {
              this.students.reverse();
            }
            if ( tableState.search.predicateObject ) {
              this.students = __.where(this.students, tableState.search.predicateObject);
            }
            // console.log(this.students);
          });
        };
        this.weeks = [calAPIService.firstWeek, calAPIService.secondWeek, calAPIService.thirdWeek, calAPIService.forthWeek];
      },
    };
  });
};
