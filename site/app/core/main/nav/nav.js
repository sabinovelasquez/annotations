export default ngModule => {
  require('./nav.scss');

  ngModule.directive('navBar', function navBar(newUserModal, newClassModal, currentService, fbAPIService) {
    return {
      template: require('./nav.jade'),
      scope: {},
      controllerAs: 'nav',
      controller: function annotationsCtrl() {
        this.openUserModal = newUserModal.open;
        this.openClassModal = newClassModal.open;
        this.currentService = currentService;
        fbAPIService.getClasses().$loaded().then( (data) => {
          this.classes = data;
        });
      },
    };
  });
};
