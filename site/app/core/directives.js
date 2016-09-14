export default ngModule => {
  require('./main/sidebar/sidebar')(ngModule);
  require('./main/nav/nav')(ngModule);
  require('./main/footer/footer')(ngModule);
};
