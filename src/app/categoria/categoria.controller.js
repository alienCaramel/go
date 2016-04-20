(function() {
  angular
    .module('todo')
    .controller('CategoriaController',CategoriaController);

    function CategoriaController(CategoriaService){
      var vm = this;

      function init(){
        vm.categorias = CategoriaService.getCategorias();
      }
      init();

      vm.agregar = function(){
        var categoria = {
          id:null,
          nombre:vm.categoria
        }
        CategoriaService.addCategoria(categoria);
        init();
        swal(
          'Tienes una nueva categoría :D',
          'Categoría agregada!',
          'success'
        )
        vm.categoria = '';
      }

    }
})();
