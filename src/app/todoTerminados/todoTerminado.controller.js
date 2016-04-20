(function() {
  'use strict';

  angular
    .module('todo')
    .controller('TodoTerminadoController', TodoTerminadoController);

  /** @ngInject */
  function TodoTerminadoController(TodoService,$rootScope) {
    var vm = this;

    function init(){
      vm.todos = TodoService.getTodos();
    }
    init();

    vm.delete = function(pid){
      TodoService.eliminar(pid);
      init();
    }

    vm.completado = function(pid){
      TodoService.completado(pid);
      init();
    }

    $rootScope.$on('todos', function (event, data) {
      init();
    });
  }

  angular
  .module('todo')
  .controller('modal',modal);
  function modal($modal){
    var vm = this;
    vm.abrir = function(){
        var addModalInstance = $modal.open({
          animation: true,
          templateUrl: '/myModalContent.html',
          controllerAs: 'vm',
          controller: modalController,
          size:'md'
        });
    }
  }

  function modalController ($modalInstance,$state,TodoService, $rootScope){
    var vm = this;
    vm.close = function(){
       $modalInstance.close('closed');
    }
    vm.save = function(){
      var todo = {
        id : null,
        nombre : vm.nombre,
        fecha : moment().format("DD-MM-YYYY"),
        fechaFinal : vm.finalDate,
        categoria : vm.categoria,
        estado : 1
      }
      TodoService.addTodo(todo);
      $modalInstance.close('closed');
      $rootScope.$broadcast('todos', 'todo');
    }
  }
})();
