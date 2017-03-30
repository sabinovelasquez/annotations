export default ngModule => {
  ngModule.factory('newObsModal', ($uibModal, fbAPIService, currentService) => {
    const open = () => {
      $uibModal.open({
        animation: true,
        template: require('../main/modals/newObsModal.jade'),
        size: 'md',
        controllerAs: 'modalObs',
        controller: function newObsModalCtrl($uibModalInstance) {
          this.currentService = currentService;
          this.student = this.currentService.obs.student;
          this.close = () => $uibModalInstance.dismiss();
          this.newObs = () => {
            const annotation = {};
            annotation.when = this.currentService.obs.obsWeek;
            annotation.type = this.currentService.obs.obsType;
            annotation.text = this.text;
            fbAPIService.addAnn(this.currentService.obs.obsKey, annotation);
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
