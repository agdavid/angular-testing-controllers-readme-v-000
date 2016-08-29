function MainController($scope) {
    this.name = 'Steve Jobs';
}

angular
    .module('app')
    .controller('MainController', MainController);