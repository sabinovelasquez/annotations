export default ngModule => {
  ngModule.service('fbAPIService', ($firebaseArray, $firebaseObject) => {
    const Firebase = require('firebase');
    return {
      printIt: () => {
        const firebaseClient = new Firebase('https://annotations-7379e.firebaseio.com/test');
        const booked = $firebaseObject(firebaseClient);
        booked.$loaded().then( (data) => {
          this.data = data;
        });
      },
      putBook: (test) => {
        const ref = new Firebase(`https://annotations-7379e.firebaseio.com/test/${test}`);
        ref.set({'test': 'test'});
      },
    };
  });
};
