(function(module) {
  var repos = {};

  repos.all = [];

  // DONE: Refactor this ajax method into a get method to the proxy
  //  'end point' provided by server.js.
  repos.requestRepos = function(callback) {
    $.get('/github/users/perezje43/repos' + '?per_page=15' + '&sort=updated').done(function(data) {
      repos.all = data;
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);