export default ngModule => {
  require('./annotations.scss');
  ngModule.directive('annotations', function annotations(fbAPIService) {
    return {
      template: require('./annotations.jade'),
      scope: {},
      controllerAs: 'ann',
      controller: function annotationsCtrl() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        this.students = fbAPIService.getClass('1A');
        this.month = moment().startOf('month').weekday(1).format('MMMM Do YYYY');
      },
    };
  });
};
