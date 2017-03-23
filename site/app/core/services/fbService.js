export default ngModule => {
  ngModule.service('fbAPIService', ($firebaseArray, $firebaseObject) => {
    const Firebase = require('firebase');
    const service = {
      getClass: (classId) => {
        const firebaseClient = new Firebase(`https://annotations-7379e.firebaseio.com/db/students`);
        const classData = $firebaseObject(firebaseClient.orderByChild('course').equalTo(`${classId}`));
        return classData;
      },
      putBook: (test) => {
        const ref = new Firebase(`https://annotations-7379e.firebaseio.com/test/${test}`);
        ref.set({'test': 'test'});
      },
      newStudent: (student) => {
        const ref = new Firebase(`https://annotations-7379e.firebaseio.com/db/students`);
        ref.push(student);
      },
    };
    return service;
  });
};
