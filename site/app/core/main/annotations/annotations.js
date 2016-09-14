export default ngModule => {
  require('./annotations.scss');

  ngModule.directive('annotations', function annotations() {
    return {
      template: require('./annotations.jade'),
    };
  });
};
