export default ngModule => {
  require('./main/nav/nav')(ngModule);
  require('./main/sidebar/sidebar')(ngModule);
  require('./main/annotations/annotations')(ngModule);
  require('./main/footer/footer')(ngModule);
};
