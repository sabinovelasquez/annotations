export default ngModule => {
  require('./annotations.scss');
  ngModule.directive('annotations', function annotations(fbAPIService, calAPIService) {
    return {
      template: require('./annotations.jade'),
      scope: {},
      controllerAs: 'ann',
      controller: function annotationsCtrl() {
        fbAPIService.getClass('1A').$loaded().then( (data) => {
          this.students = data;
        });
        this.month = calAPIService.currentMonth;
      },
    };
  });
};
