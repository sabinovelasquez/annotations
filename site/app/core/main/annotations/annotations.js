export default ngModule => {
  require('./annotations.scss');

  ngModule.directive('annotations', function annotations(fbAPIService) {
    return {
      template: require('./annotations.jade'),
      scope: {},
      controllerAs: 'ann',
      controller: function annCtrl() {
        fbAPIService.printIt();
      },
    };
  });
};
