(function() {
  angular.module('SearchBroadcastApp')
  .component('searchBar', {
    templateUrl: 'app/components/search-bar.html',
    controller: SearchCtrl,
    controllerAs: 'search'
  });

  function SearchCtrl($rootScope) {
    var search = this;
    search.search = function() {
      $rootScope.$broadcast("search", {q: search.query});
    }
  }

  SearchCtrl.$inject = ['$rootScope'];
})();
