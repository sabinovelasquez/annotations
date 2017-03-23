export default ngModule => {
  require('./services/fbService')(ngModule);
  require('./services/calAPIService')(ngModule);
  require('./services/newUserModal')(ngModule);
};
