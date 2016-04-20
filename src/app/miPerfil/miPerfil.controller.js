(function() {
  'use strict';

  angular
    .module('todo')
    .controller('MiPerfilController', MiPerfilController);

  /** @ngInject */
  function MiPerfilController(TodoService,$rootScope) {
    var vm = this;

    function init(){
      getTodos();
      vm.nombreCompleto = 'Paula Segura Araya'
      vm.img = 'app/img/paula.jpg'
    }
    init();

    function getTodos(){
      vm.todos = TodoService.getTodos();
    }

  }
})();
