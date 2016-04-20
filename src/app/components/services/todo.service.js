(function() {
  'use strict';

  angular
    .module('todo')
    .service('TodoService', TodoService);

  /** @ngInject */
  function TodoService() {
    var uid = 1;
    var todos = [
      {'id':0,'nombre':'Bailar','fecha':'15-03-2016','fechaFinal':'12-04-2016','categoria':'Entretenimiento','estado':1}
    ];

    this.getTodos = function(){
      var pendientes =  [];
      for(var i = 0 ; i < todos.length; i++){
        if(todos[i].estado == 1){
          var todo = todos[i];
          pendientes.push(todo);
        }
      }
      return pendientes;
    }

    this.addTodo = function(ptodo){
      if(ptodo.id == null){
         ptodo.id = uid++;
         todos.push(ptodo);
      }
    }
    this.eliminar = function(pid){
      for(var i = 0; i < todos.length; i++){
         if (todos[i].id == pid) {
            todos.splice(i, 1);
         }
      }
    }

    this.getTerminados = function(){
      var terminados =  [];
      for(var i = 0 ; i < todos.length; i++){
        if(todos[i].estado == 0){
          var todo = todos[i];
          terminados.push(todo);
        }
      }
      return terminados;
    }

    this.completado = function(pid){
      for(var i = 0; i < todos.length; i++){
         if (todos[i].id == pid) {
             var todo = todos[i];
             todo.estado = 0;
             todos[i] = todo;
         }
      }
    }

  }
})();
