export default ngModule => {
  require('./main/fbservice/fbservice')(ngModule);
  require('./main/fbservice/calAPIService')(ngModule);
};
