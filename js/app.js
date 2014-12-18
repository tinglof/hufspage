// app.js

// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('seoulApp', ['ngRoute', 'ngAnimate']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(function($routeProvider) {

    $routeProvider

    	// home page
    	.when('/home', {
    		templateUrl: 'js/views/home.html',
            controller: 'mainController'
    	})

    	// food
    	.when('/food', {
    		templateUrl: 'js/views/food.html',
            controller: 'foodController'
    	})

    	// university
    	.when('/university', {
    		templateUrl: 'js/views/university.html',
            controller: 'universityController'
    	})

        // sightseeing
        .when('/sightseeing', {
            templateUrl: 'js/views/sightseeing.html',
            controller: 'sightseeingController'
        })

        //places
        .when('/districts', {
            templateUrl: 'js/views/places.html',
            controller: 'placesController'
        })

        //Else cases
        .otherwise({redirectTo: '/home'});

});


// CONTROLLERS ============================================
// home page controller
animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';

    function getWeather(){
        console.log("Running func.");
        $.simpleWeather({
            location: 'Seoul',
            woeid: '',
            unit: 'c',
            success: function(weather) {
              console.log("Weather function runs. Sucess");
              html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
              html += '<ul><li>'+weather.city+'</li>';
              html += '<li class="currently">'+weather.currently+'</li>';

              $("#weather").html(html);
            },
            error: function(error) {
              $("#weather").html('<p>'+error+'</p>');
              console.log("Weather function runs. Error.");
            }
        });
    }

    getWeather();

    $scope.leftMenu = [
        { 
            text: 'Seightseeing', 
            color: 'rgba(224, 102, 102, 0.6)', 
            ref: "#sightseeing"
        },
        { 
            text: 'Food',
            color: 'rgba(237, 202, 95, 0.6)',
            ref: "#food"
        },
        {
            text: 'University',
            color: 'rgba(142, 124, 195, 0.6)',
            ref: "#university"
        },
        {
            text: 'Districts',
            color: 'rgba(147, 196, 125, 0.6)',
            ref: "#districts"
        }
    ];

    $scope.hoverItem = function(color){
        $('.page-home').css({
            'background-image' : 'linear-gradient(to bottom right, rgba(0, 47, 75, 0.6), '+ color +' ), url("img/sunset_bw_g.jpg")',
            'opacity'          : '1',
            'WebkitTransition' : 'opacity 2s ease',
            'MozTransition'    : 'opacity 2s ease',
            'MsTransition'     : 'opacity 2s ease',
            'OTransition'      : 'opacity 2s ease',
            'transition'       : 'opacity 2s ease'
        });

    };

    $scope.stopHoverItem = function(){
        $('.page-home').css({
            'background-image' : 'url("img/sunset_bw_g.jpg")',
            'opacity'          : '0.88',
            'WebkitTransition' : 'opacity 2s ease',
            'MozTransition'    : 'opacity 2s ease',
            'MsTransition'     : 'opacity 2s ease',
            'OTransition'      : 'opacity 2s ease',
            'transition'       : 'opacity 2s ease'
        });
    };

});

// page controllers
animateApp.controller('foodController', function($scope) {
    $scope.pageClass = 'page-food';
});

animateApp.controller('placesController', function($scope) {
    $scope.pageClass = 'page-place';
});

animateApp.controller('sightseeingController', function($scope) {
    $scope.pageClass = 'page-sight';
});

animateApp.controller('universityController', function($scope) {
    $scope.pageClass = 'page-university';
});
