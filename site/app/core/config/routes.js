export default ngModule => {
  ngModule.config(
    ($stateProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('login', {
        url: '/login',
        template: require('../main/login/login.jade'),
        controller: 'LoginCtrl',
        controllerAs: 'login',
      })
      .state('main', {
        url: '/',
        template: require('../main/main.jade'),
        controller: 'MainCtrl',
        controllerAs: 'main',
      });
    }
  );
};
