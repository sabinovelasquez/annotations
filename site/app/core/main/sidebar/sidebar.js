export default ngModule => {
  require('./sidebar.scss');

  ngModule.directive('sidebar', function sidebar(fbAPIService) {
    return {
      template: require('./sidebar.jade'),
      scope: {},
      controllerAs: 'sidebar',
      controller: function sidebarCtrl() {
        this.status = {
          isopen: false,
        };
        this.course = 'Curso';
        this.changeCourse = (courseId) => {
          this.loader = true;
          this.course = courseId;
          fbAPIService.getClass(courseId).$loaded().then( (data) => {
            this.students = data;
            this.loader = false;
          });
        };
      },
    };
  });
};
