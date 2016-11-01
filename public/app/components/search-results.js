(function() {
  angular.module('MeanBlogApp')
  .component('searchResults', {
    templateUrl: 'app/components/search-results.html',
    controller: ResultsCtrl,
    controllerAs: 'results'
  });

  function ResultsCtrl($scope) {
    var results = this;
    results.results = [];
    results.loading = true;

    $scope.$on("search", function(event, params) {
      results.results = params.q.split(" ");
      results.loading = false;
    })
  }

  ResultsCtrl.$inject = ['$scope'];
})();
