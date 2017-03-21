export default ngModule => {
  require('./main/services/fbservice')(ngModule);
  require('./main/services/calAPIService')(ngModule);
};
