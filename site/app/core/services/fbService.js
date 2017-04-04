export default ngModule => {
  ngModule.service('fbAPIService', ($firebaseArray, $firebaseObject, $window) => {
    const firebase = require('firebase');
    const config = {
      apiKey: 'AIzaSyDQc3kaIXEDjuzJf2KTA_zOTY8gL7mZw88',
      authDomain: 'annotations-7379e.firebaseapp.com',
      databaseURL: 'https://annotations-7379e.firebaseio.com',
      projectId: 'annotations-7379e',
      storageBucket: 'annotations-7379e.appspot.com',
      messagingSenderId: '390559537611',
    };
    firebase.initializeApp(config);
    const service = {
      getClass: (classId) => {
        return firebase.database().ref('students').orderByChild('course').equalTo(`${classId}`);
      },
      getClasses: () => {
        return firebase.database().ref('classes').orderByChild('id');
      },
      getObs: (key) => {
        return firebase.database().ref(`students/${key}/annotations`).orderByChild('id');
      },
      newStudent: (student) => {
        firebase.database().ref('students').push(student, (resp) => {
          if ( resp ) {
            $window.alert(resp.code);
          }
        });
      },
      newClass: (classId) => {
        firebase.database().ref('classes').push(classId, (resp) => {
          if ( resp ) {
            $window.alert(resp.code);
          }
        });
      },
      addAnn: (key, ann) => {
        firebase.database().ref(`students/${key}/annotations`).push(ann, (resp) => {
          if ( resp ) {
            $window.alert(resp.code);
          }
        });
      },
      delAnn: (key, id) => {
        firebase.database().ref(`students/${key}/annotations/${id}`).remove().then((resp) => {
          if ( resp ) {
            $window.alert(resp.code);
          }
        });
      },
    };
    return service;
  });
};
