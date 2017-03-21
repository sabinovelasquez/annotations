export default ngModule => {
  require('./services/fbservice')(ngModule);
  require('./services/calAPIService')(ngModule);
};
