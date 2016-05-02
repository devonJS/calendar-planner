(function(){
    "use strict";
    var app = angular.module("calendarPlannerApp", [
        "ngRoute",
        "ngSanitize"
    ]);
    
    app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
        $routeProvider 
            .when("/", {
                templateUrl: "views/calendar/calendar.html",
                controller: "CalendarController",
                controllerAs: "calendar"
            })
            .otherwise({
                redirectTo: "/"
            });
            
        $locationProvider.html5Mode(true);
    }]);
})();