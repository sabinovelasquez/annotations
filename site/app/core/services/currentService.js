export default ngModule => {
  ngModule.service('currentService', function currentService() {
    this.classId = '1A';
    this.edit = true;
    this.weekNum = 4;
  });
};
