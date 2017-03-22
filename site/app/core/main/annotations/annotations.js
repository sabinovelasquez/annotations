export default ngModule => {
  require('./annotations.scss');
  ngModule.directive('annotations', function annotations(fbAPIService, calAPIService) {
    return {
      template: require('./annotations.jade'),
      scope: {},
      controllerAs: 'ann',
      controller: function annotationsCtrl() {
        fbAPIService.getClass('1A').$loaded().then( (data) => {
          this.students = data;
        });
        this.weeks = [calAPIService.firstWeek, calAPIService.secondWeek, calAPIService.thirdWeek, calAPIService.forthWeek];
        this.predicates = ['firstName', 'lastName', 'birthDate', 'balance', 'email'];
        this.selectedPredicate = this.predicates[0];
        this.rowCollection = [
          {
            firstName: 'Laurent',
            lastName: 'Renard',
            birthDate: new Date('1987-05-21'),
            balance: 102,
            email: 'whatever@gmail.com',
          },
          {
            firstName: 'Blandine',
            lastName: 'Faivre',
            birthDate: new Date('1987-04-25'),
            balance: -2323.22,
            email: 'oufblandou@gmail.com'},
          {
            firstName: 'Francoise',
            lastName: 'Frere',
            birthDate: new Date('1955-08-27'),
            balance: 42343,
            email: 'raymondef@gmail.com',
          },
        ];
      },
    };
  });
};
