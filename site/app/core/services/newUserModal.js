export default ngModule => {
  ngModule.factory('newUserModal', ($uibModal, fbAPIService) => {
    const open = () => {
      $uibModal.open({
        animation: true,
        template: require('../main/modals/newUserModal.jade'),
        size: 'lg',
        controllerAs: 'modal',
        controller: function newUserModalCtrl($uibModalInstance) {
          this.close = () => $uibModalInstance.dismiss();
          this.data = {
            first: 'first node',
            second: 'second node',
          };
          this.newStudent = fbAPIService.newStudent({user: 'sabino', course: '1A', 'data': this.data });
        },
      });
    };
    const service = {
      open: open,
    };
    return service;
  });
};
