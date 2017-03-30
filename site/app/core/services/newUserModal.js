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
          this.course = {};
          fbAPIService.getClasses().$loaded().then( (data) => {
            this.classes = data;
            this.course = data[0];
          });
          this.newStudent = () => {
            this.student.course = this.course.id;
            fbAPIService.newStudent(this.student);
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
