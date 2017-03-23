export default ngModule => {
  ngModule.controller('MainCtrl', function MainCtrl(newUserModal) {
    this.parallaxBg = '../core/img/header.jpg';
    this.openModal = newUserModal.open;
  });
};
