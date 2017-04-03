export default ngModule => {
  require('./main/controller')(ngModule);
  require('./main/login/login')(ngModule);
};
