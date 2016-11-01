(function() {
  angular.module('MeanBlogApp')
  .component('home', {
    templateUrl: 'app/pages/home/home.html',
    controller: HomeCtrl,
    controllerAs: 'home'
  });

  function HomeCtrl(PostService) {
    var home = this;
    home.posts = [];
    home.newPost = {
      title: '',
      content: ''
    }

    // Load all of the posts when the page first loads.
    getAllPosts();

    home.submitPost = function() {
      PostService.addPost(home.newPost, function(res) {
        PostService.getAllPosts(function(data) {
          home.posts = data.data;
        });
      });
    }

    home.deletePost = function(post) {
      PostService.deletePost(post, function(res) {
        getAllPosts();
      });
    };

    function getAllPosts() {
      PostService.getAllPosts(function success(res) {
        home.posts = res.data;
      }, function error(res) {
        console.log(res);
      });
    }
  }

  HomeCtrl.$inject = ['PostService'];
})();
