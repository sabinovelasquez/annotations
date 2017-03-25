export default ngModule => {
  require('./annotations.scss');
  ngModule.directive('annotations', function annotations(fbAPIService, calAPIService, currentService) {
    return {
      template: require('./annotations.jade'),
      scope: {},
      controllerAs: 'ann',
      controller: function annotationsCtrl() {
        this.callServer = () => {
          console.log('called');
          this.isLoading = true;
          fbAPIService.getClass(currentService.classId).$loaded().then( (data) => {
            this.students = data;
            this.isLoading = false;
          });
        };
        this.getters = {
          sortbyNumber: () => {
            // __.sortBy(this.students, 'number');
          },
          sortbyName: (row) => {
            return this.students[row.id].name;
          },
          sortbyLastname: (row) => {
            return this.students[row.id].lastname;
          },
        };
        this.weeks = [calAPIService.firstWeek, calAPIService.secondWeek, calAPIService.thirdWeek, calAPIService.forthWeek];
      },
    };
  });
};
