(function() {
  'use strict';

  angular
    .module('todo')
    .config(routerConfig)
    .controller('routeController',routeController);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('home.todo', {
        url: 'todo',
        templateUrl: 'app/todo/todo.html',
        controller: 'TodoController',
        controllerAs: 'vm'
      })
      .state('home.terminados', {
        url: 'todo-terminados',
        templateUrl: 'app/todoTerminados/todoTerminado.html',
        controller: 'TodoTerminadoController',
        controllerAs: 'vm'
      })
      .state('home.miPerfil', {
        url: 'mi-perfil',
        templateUrl: 'app/miPerfil/miPerfil.html',
        controller: 'MiPerfilController',
        controllerAs: 'vm'
      })
      .state('home.categoria', {
        url: 'categoria',
        templateUrl: 'app/categoria/categoria.html',
        controller: 'CategoriaController',
        controllerAs: 'vm'
      });


    $urlRouterProvider.otherwise('/');
  }

  function routeController($state){
    $state.go('home.todo');
  }
})();
