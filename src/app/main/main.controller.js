(function() {
  'use strict';

  angular
    .module('todo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    var vm = this;
    $state.transitionTo('home.todo');

  }
})();
