(function(){
    "use strict";
    
    angular.module("calendarPlannerApp").controller("CalendarController", [function(){
        var calendar = this;
        calendar.getClass = function(event) {
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
        }
        calendar.data = [
          {
              slot: "09:00:00",
              display: "9:00AM",
              events: [
                  {
                      title: "Deadmau6",
                      type: "performance",
                      address: "Main Stage",
                      start: true,
                      overlap: 1
                  },{
                      title: "Cold Brew Kids",
                      type: "performance",
                      address: "Not-the-Main Stage",
                      start: true,
                      end: true,
                      overlap: 1
                  }
              ]
          }, {
              slot: "09:30:00",
              display: "9:30AM",
              events: [
                  {
                      title: "Deadmau6",
                      type: "performance",
                      address: "Main Stage",
                      end: true,
                      overlap: 1
                  }
              ]
          }, {
              slot: "10:00:00",
              display: "10:00AM",
              events: [
                  {
                      title: "How To Make Money in EDM",
                      type: "panel",
                      start: true,
                      address: "Convention Center",
                      overlap: 0
                  }
              ]
          }, {
              slot: "10:30:00",
              display: "10:30AM",
              events: [
                  {
                      title: "How To Make Money in EDM",
                      type: "panel",
                      end: true,
                      address: "Convention Center",
                      overlap: 0
                  }
              ]
          }, {
              slot: "11:00:00",
              display: "11:00AM"
          }, {
              slot: "11:30:00",
              display: "11:30AM"
          }, {
              slot: "12:00:00",
              display: "12:00PM"
          }, {
              slot: "12:30:00",
              display: "12:30PM"
          }, {
              slot: "13:00:00",
              display: "1:00PM"
          }, {
              slot: "13:30:00",
              display: "1:30PM"
          }, {
              slot: "14:00:00",
              display: "2:00PM"
          }, {
              slot: "14:30:00",
              display: "2:30PM"
          }, {
              slot: "15:00:00",
              display: "3:00PM"
          }, {
              slot: "15:30:00",
              display: "3:30PM"
          }, {
              slot: "16:00:00",
              display: "4:00PM"
          }, {
              slot: "16:30:00",
              display: "4:30PM"
          }, {
              slot: "17:00:00",
              display: "5:00PM"
          }, {
              slot: "17:30:00",
              display: "5:30PM"
          }, {
              slot: "18:00:00",
              display: "6:00PM"
          }, {
              slot: "18:30:00",
              display: "6:30PM"
          }, {
              slot: "19:00:00",
              display: "7:00PM"
          }, {
              slot: "19:30:00",
              display: "7:30PM"
          }, {
              slot: "20:00:00",
              display: "8:00PM"
          }, {
              slot: "20:30:00",
              display: "8:30PM"
          }, {
              slot: "21:00:00",
              display: "9:00PM"
          }, {
              slot: "21:30:00",
              display: "9:30PM"
          }, {
              slot: "22:00:00",
              display: "10:00PM"
          }
        ];
    }]);
})()