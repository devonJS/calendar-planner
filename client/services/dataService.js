(function() {
    "use strict";
    
    angular.module("calendarPlannerApp").factory("DataService", ["config", "$http", function(config, $http){
        var service = {};
        var path = config.apiPath + "/events";
        
        return service;
    }]);
})();