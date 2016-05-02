(function(){
    "use strict";
    
    angular.module("calendarPlannerApp").controller("CalendarController", ["DataService", function(DataService){
        var calendar = this;
        DataService.getEvents();

        calendar.getClass = function(event) {
            console.log(event);
            if(event.start) {
                if(event.end) return "event-start event-end"
                else return "event-start";
            }
            
            if(event.end) {
                return "event-end";
            }
            
            if(!event.start && !event.end) {
                return "event-during";
            }
        };
        
        calendar.data = DataService.eventData;
        // Example Data, length helps determine how tall the scheduled event should be
        // only need length for the starting time
        //
        // calendar.data = [
        //   {
        //     slot: "09:00:00",
        //     display: "9:00AM",
        //     events: [
        //         {
        //             title: "Deadmau6",
        //             type: "performance",
        //             address: "Main Stage",
        //             start: true,
        //             overlap: 1,
        //             length: 2
        //         }
        //     ]
        //   }, {
        //     slot: "9:30:00",
        //     display: "9:30AM",
        //     events: [
        //       {
        //           title: "Deadmau6",
        //           type: "performance",
        //           address: "Main Stage",
        //           overlap: 1,
        //       },
        //       {
        //           title: "Cold Brew Kids",
        //           type: "performance",
        //           address: "Not-the-Main Stage",
        //           overlap: 1,
        //           length: 2,
        //           start: true
        //       }
        //     ]
        //   }, 
        //     {
        //       slot: "10:00:00",
        //       display: "10:00AM",
        //       events: [
        //         {
        //             title: "Cold Brew Kids",
        //             type: "performance",
        //             address: "Not-the-Main Stage",
        //             overlap: 1,
        //         }
        //       ]
        //     }
        // ]
    }]);
})()