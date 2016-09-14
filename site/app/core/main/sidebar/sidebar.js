export default ngModule => {
  require('./sidebar.scss');

  ngModule.directive('sidebar', function sidebar() {
    return {
      template: require('./sidebar.jade'),
    };
  });
};
