export default ngModule => {
  require('./sidebar.scss');

  ngModule.directive('sidebar', function sidebar(fbAPIService) {
    return {
      template: require('./sidebar.jade'),
      scope: {},
      controllerAs: 'sidebar',
      controller: function sidebarCtrl() {
        this.students = fbAPIService.getClass('1A');
        this.search = this.students;
      },
    };
  });
};
