export default ngModule => {
  ngModule.service('loginService', () => {
    const Firebase = require('firebase');
    const service = {
      login: () => {
        const firebaseClient = new Firebase(`https://annotations-7379e.firebaseio.com/`);
        let loginData = null;
        firebaseClient.authWithPassword({
          email: 'xxx',
          password: 'xxx',
        }, (error, authData) => {
          if (!error) {
            loginData = authData;
            console.log(authData);
          } else {
            console.log(error);
          }
          return loginData;
        }, { scope: 'email, profile'});
      },
    };
    return service;
  });
};
