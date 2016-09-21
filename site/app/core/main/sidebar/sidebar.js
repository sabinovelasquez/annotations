export default ngModule => {
  require('./sidebar.scss');

  ngModule.directive('sidebar', function sidebar(fbAPIService) {
    return {
      template: require('./sidebar.jade'),
      scope: {},
      controllerAs: 'sidebar',
      controller: function sidebarCtrl() {
        fbAPIService.getClass('1A').$loaded().then( (data) => {
          this.students = data;
        });
      },
    };
  });
};
