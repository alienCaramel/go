(function() {
  'use strict';

  angular
    .module('todo')
    .controller('TodoTerminadoController', TodoTerminadoController);

  /** @ngInject */
  function TodoTerminadoController(TodoService,$rootScope) {
    var vm = this;

    function init(){
      vm.todos = TodoService.getTerminados();
    }
    init();

    vm.delete = function(pid){
      TodoService.eliminar(pid);
      init();
    }
  }
})();
