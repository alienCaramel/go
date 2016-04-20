(function() {
  'use strict';

  angular
    .module('todo')
    .service('CategoriaService', CategoriaService);

  /** @ngInject */
  function CategoriaService() {
    var uid = 1;
    var categorias = [
      {'id':0,'nombre':'Casa'}
    ];

    this.getCategorias = function(){
      return categorias;
    }

    this.addCategoria = function(pcategoria){
      if(categorias.id == null){
         pcategoria.id = uid++;
         categorias.push(pcategoria);
      }
    }
  }
})();
