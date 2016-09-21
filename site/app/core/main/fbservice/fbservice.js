export default ngModule => {
  ngModule.service('fbAPIService', ($firebaseArray, $firebaseObject) => {
    const Firebase = require('firebase');
    const service = {
      getClass: (classId) => {
        const firebaseClient = new Firebase(`https://annotations-7379e.firebaseio.com/${classId}`);
        const classData = $firebaseObject(firebaseClient);
        return classData;
      },
      putBook: (test) => {
        const ref = new Firebase(`https://annotations-7379e.firebaseio.com/test/${test}`);
        ref.set({'test': 'test'});
      },
    };
    return service;
  });
};
