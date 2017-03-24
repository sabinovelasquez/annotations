export default ngModule => {
  ngModule.factory('newUserModal', ($uibModal, fbAPIService) => {
    const open = () => {
      $uibModal.open({
        animation: true,
        template: require('../main/modals/newUserModal.jade'),
        size: 'md',
        controllerAs: 'modalUser',
        controller: function newUserModalCtrl($uibModalInstance) {
          this.close = () => $uibModalInstance.dismiss();
          fbAPIService.getClasses().$loaded().then( (data) => {
            this.classes = data;
          });
          this.newStudent = () => {
            fbAPIService.newStudent(this.student);
          };
        },
      });
    };
    const service = {
      open: open,
    };
    return service;
  });
};
