export default ngModule => {
  ngModule.service('fbAPIService', ($firebaseArray, $firebaseObject, $window) => {
    const Firebase = require('firebase');
    const service = {
      getClass: (classId) => {
        const firebaseClient = new Firebase(`https://annotations-7379e.firebaseio.com/students`);
        const classData = $firebaseArray(firebaseClient.orderByChild('course').equalTo(`${classId}`));
        return classData;
      },
      getClasses: () => {
        const firebaseClient = new Firebase(`https://annotations-7379e.firebaseio.com/classes`);
        const classesData = $firebaseArray(firebaseClient);
        return classesData;
      },
      newStudent: (student) => {
        const ref = new Firebase(`https://annotations-7379e.firebaseio.com/students`);
        ref.push(student, (resp) => {
          if ( resp ) {
            $window.alert(resp.code);
          }
        });
      },
      newClass: (classId) => {
        const ref = new Firebase(`https://annotations-7379e.firebaseio.com/classes`);
        ref.push(classId, (resp) => {
          if ( resp ) {
            $window.alert(resp.code);
          }
        });
      },
      addAnn: (key, ann) => {
        const ref = new Firebase(`https://annotations-7379e.firebaseio.com/students/${key}/annotations`);
        ref.push(ann, (resp) => {
          if ( resp ) {
            $window.alert(resp.code);
          }
        });
      },
    };
    return service;
  });
};
