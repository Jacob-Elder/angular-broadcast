(function() {
  angular.module('SearchBroadcastApp')
  .component('post', {
    templateUrl: 'app/pages/post/post.html',
    controller: PostCtrl,
    controllerAs: 'post'
  })
  .component('postEdit', {
    templateUrl: 'app/pages/post/post-edit.html',
    controller: PostCtrl,
    controllerAs: 'post'
  });

  function PostCtrl($stateParams, $state, PostService) {
    var post = this;
    post.post = {};

    var id = $stateParams.id;
    PostService.getPost(id, function(res) {
      post.post = res.data;
    });

    post.updatePost = function() {
      PostService.updatePost(post.post, function(res) {
        $state.go('post', {id: post.post._id});
      });
    }
  }

  PostCtrl.$inject = ['$stateParams', '$state', 'PostService'];
})();
