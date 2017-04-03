export default ngModule => {
  ngModule.factory('newObsModal', ($uibModal, fbAPIService, currentService) => {
    require('../main/modals/modalStyle.scss');
    const open = () => {
      $uibModal.open({
        animation: true,
        template: require('../main/modals/newObsModal.jade'),
        size: 'md',
        controllerAs: 'modalObs',
        controller: function newObsModalCtrl($uibModalInstance) {
          const __ = require('underscore');
          this.currentService = currentService;
          this.getObs = () => {
            fbAPIService.getObs(this.currentService.obs.obsKey).$loaded().then( (data) => {
              this.observations = __.where(data, {type: 'OBS', when: this.currentService.obs.obsWeek});
            });
          };
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
          this.delObs = (obs) => {
            fbAPIService.delAnn(this.currentService.obs.obsKey, obs.$id);
            this.getObs();
          };
          this.getObs();
        },
      });
    };
    const service = {
      open: open,
    };
    return service;
  });
};
