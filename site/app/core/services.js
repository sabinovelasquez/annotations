export default ngModule => {
  require('./services/fbService')(ngModule);
  require('./services/calAPIService')(ngModule);
  require('./services/currentService')(ngModule);
  require('./services/newObsModal')(ngModule);
  require('./services/newUserModal')(ngModule);
  require('./services/newClassModal')(ngModule);
};
