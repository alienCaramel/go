(function() {
  'use strict';
    angular
      .module('todo')
      .directive('todo',todo);
      function todo(){
        function todoDirectiveController(){
          var vm = this;
          vm.todo = vm.bind;

        }
        return{
          restrict: 'E',
            templateUrl: 'app/components/directives/todo/todo.tpl.html',
            scope:{
              bind:'=',
              eliminar:'&',
              completado:'&'
            },
            bindToController:true,
            controllerAs: 'vm',
            controller : todoDirectiveController
        }
      }
})();
