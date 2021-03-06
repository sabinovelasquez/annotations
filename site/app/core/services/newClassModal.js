export default ngModule => {
  ngModule.factory('newClassModal', ($uibModal, fbAPIService) => {
    const open = () => {
      $uibModal.open({
        animation: true,
        template: require('../main/modals/newClassModal.jade'),
        size: 'sm',
        controllerAs: 'modalClass',
        controller: function newClassModalCtrl($uibModalInstance) {
          this.close = () => $uibModalInstance.dismiss();
          this.newClass = (string) => {
            fbAPIService.newClass({id: string.toUpperCase()});
            this.close();
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
