app.directive('playerInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'playerInfo.html' 
  }; 
});	