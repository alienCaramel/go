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
      return todos;
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
