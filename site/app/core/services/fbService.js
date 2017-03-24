export default ngModule => {
  ngModule.service('fbAPIService', ($firebaseArray, $firebaseObject) => {
    const Firebase = require('firebase');
    const service = {
      getClass: (classId) => {
        const firebaseClient = new Firebase(`https://annotations-7379e.firebaseio.com/students`);
        const classData = $firebaseObject(firebaseClient.orderByChild('course').equalTo(`${classId}`));
        return classData;
      },
      getClasses: () => {
        const firebaseClient = new Firebase(`https://annotations-7379e.firebaseio.com/classes`);
        const classesData = $firebaseObject(firebaseClient);
        return classesData;
      },
      newStudent: (student) => {
        const ref = new Firebase(`https://annotations-7379e.firebaseio.com/students`);
        ref.push(student);
      },
      newClass: (classId) => {
        const ref = new Firebase(`https://annotations-7379e.firebaseio.com/classes`);
        ref.push(classId);
      },
    };
    return service;
  });
};
