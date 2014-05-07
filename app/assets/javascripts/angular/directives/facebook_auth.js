nutrisol.directive('facebook', ['$http', function($http) {
  return {
    restrict: 'A',
    scope: true,
    controller: ['$scope', '$attrs', function($scope, $attrs) {
      // Load the SDK Asynchronously
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) return;
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/es_LA/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));

      function login() {
        FB.login(function(response) {
          if (response.authResponse) {
            console.log('FB.login connected');
            $scope.login_status = 'connected';
            fetch();
          } else {
            console.log('FB.login cancelled');
          }
          }, { scope: 'email,read_stream' }
        );
      };

      function fetch() {
        $http.post('/facebook/fetch', $scope.auth
           ).success(function(data) {
            $scope.user = data.user;
          }).error(function(data) {
            console.log('error: '+data);
          });
      }

      $scope.fetch = function() {
        if ($scope.login_status == 'connected') {
          console.log('fetch');
          fetch();
        } else {
          login();
        }
      };

      $scope.logout = function() {
        FB.logout(function(response) {
          console.log('FB.logout success');
        });
      };
    }],

    link: function(scope, element, attrs, controller) {
      // Additional JS functions here
      window.fbAsyncInit = function() {

        FB.init({
          appId      : attrs.facebook, // App ID
          channelUrl : '//localhost:3000/channel.html', // Channel File
          status     : true, // check login status
          cookie     : true, // enable cookies to allow the server to access the session
          xfbml      : true,  // parse XFBML
          version    : 'v2.0'
        });

        // Additional init code here
        FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
            // connected
            scope.auth = response.authResponse;
            scope.fetch();
          } else if (response.status === 'not_authorized') {
            // not_authorized
          } else {
            // not_logged_in
          }
          scope.login_status = response.status;
          scope.$apply();
        });

        FB.Event.subscribe('auth.statusChange', function(response) {
          scope.login_status = response.status;
          if (response.status === 'connected') {
            scope.auth = response.authResponse;
          } else if (response.status === 'not_authorized') {

          } else {
            scope.auth = null;
            scope.user = null;
          }
          scope.$apply();
        });
      }; // end of fbAsyncInit
    }
  }
}]);
