var app = angular.module('vote-results', []);

var bg1 = document.getElementById('background-stats-1');
var bg2 = document.getElementById('background-stats-2');

app.controller('statsCtrl', function($scope){
  var animateStats = function(a,b){
    if(a+b>0){
      var percentA = a/(a+b)*100;
      var percentB = 100-percentA;
      bg1.style.width= percentA+"%";
      bg2.style.width = percentB+"%";
    }
  };

  $scope.aPercent = 50;
  $scope.bPercent = 50;

  var updateScores = function(){
    //socket.on('scores', function (json) {
       //data = JSON.parse(json);
       //var a = parseInt(data.a || 0);
       //var b = parseInt(data.b || 0);
       a = 3; b = 5;
       animateStats(a, b);

       $scope.$apply(function() {
         if(a + b > 0){
           $scope.aPercent = a/(a+b) * 100;
           $scope.bPercent = b/(a+b) * 100;
           $scope.total = a + b
         }
      });
    //});
  };

  document.body.style.opacity=1;
  updateScores();
});
