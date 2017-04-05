export default ngModule => {
  ngModule.controller('LoginCtrl', function LoginCtrl(loginService) {
    // this.login = '../core/img/header.jpg';
    loginService.login();
  });
};
