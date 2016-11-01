(function() {
  angular.module('SearchBroadcastApp')
  .component('searchResults', {
    templateUrl: 'app/components/search-results.html',
    controller: ResultsCtrl,
    controllerAs: 'results'
  });

  function ResultsCtrl($scope, $timeout) {
    var results = this;
    results.results = [];
    results.loading = false;

    $scope.$on("search", function(event, params) {
      results.loading = true;
      $timeout(function() {
        console.log("done.")
        results.results = params.q.split(" ");
        results.loading = false;
      }, 1000);
    });
  }

  ResultsCtrl.$inject = ['$scope', '$timeout'];
})();
