(function() {
    "use strict";
    angular.module("calendarPlannerApp").filter("timeFormat", [function(){
        return function(input) {
            if(input.toLowerCase().search("30pm") > -1) {
                var index = input.toLowerCase().search("30pm");
                return input.slice(0, index + 2);
            }
            
            else if(input.toLowerCase().search("30am") > -1) {
                var index = input.toLowerCase().search("30am");
                return input.slice(0, index + 2);
            }
            else return input;
        };
    }]);
})();