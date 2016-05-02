(function() {
    "use strict";
    
    angular.module("calendarPlannerApp").factory("DataService", ["config", "$http", function(config, $http){
        var service = {};
        var path = config.apiPath;
        var startTime = "07:00:00";
        var endTime = "23:00:00";
        var eventData = []
        
        // Builds schedule skeleton given start and end times
        function createSchedule(start, end) {
            var current = start;
            while(moment(current, "HH:mm:ss").isSameOrBefore(moment(end, "HH:mm:ss"))) {
                eventData.push({
                    slot: current,
                    display: moment(current, "HH:mm:ss").format("h:mmA"),
                    events: []
                });
                var momentDate = moment(current, "HH:mm:ss").add(30, "minutes");
                current = momentDate.format("HH:mm:ss");
            }
        };
        
        // Break out the time ranges into a list of times 
        // startTime: "11:00:00", endTime: "12:00:00" --> ["11:00:00", "11:30:00", "12:00:00"]
        function listTimeSlots(data, cb) {
            for(var i = 0; i < data.length; i++) {
                var currentTime = data[i].startTime;
                data[i].listTime = [];
                while(moment(currentTime, "HH:mm:ss").isSameOrBefore(moment(data[i].endTime, "HH:mm:ss"))) {
                    data[i].listTime.push(currentTime);
                    var momentDate = moment(currentTime, "HH:mm:ss").add(30, "minutes");
                    currentTime = momentDate.format("HH:mm:ss");
                }
            }
            cb(data, createEventData);
        };
        
        // Creates a table of overlapped times and amount for each event, can use max to determine width of column
        function addOverlap(data, cb) {
            for(var i = 0; i < data.length; i++) {
                data[i].overlapTable = {};
                data[i].overlapMax = 0;
                for(var j = 0; j < data.length; j++) {
                    if(i !== j) {
                        var intersectedTimes = _.intersection(data[i].listTime, data[j].listTime)
                        for(var k = 0; k < intersectedTimes.length; k++) {
                            if(!data[i].overlapTable[intersectedTimes[k]]) data[i].overlapTable[intersectedTimes[k]] = 1;
                            else data[i].overlapTable[intersectedTimes[k]]++;
                            
                            if(data[i].overlapTable[intersectedTimes[k]] > data[i].overlapMax) {
                                data[i].overlapMax = data[i].overlapTable[intersectedTimes[k]]; 
                            }
                        }
                    }
                }
            }
            cb(data);
        };
        
        // Needs a little refactor, can probably drop to N^2 if the listTime is broken up out of an array
        function createEventData(data) {
            for(var i = 0; i < data.length; i++) {
                for(var j = 0; j < data[i].listTime.length; j++) {
                    for(var k = 0; k < eventData.length; k++) {
                        if(data[i].listTime[j] === eventData[k].slot) {
                            eventData[k].events.push({
                                title: data[i].title,
                                type: data[i].type,
                                address: data[i].address,
                                start: j === 0 ? true : false,
                                length: j === 0 ? data[i].listTime.length : null, 
                                overlap: data[i].overlapMax
                            })
                        }
                    }
                }
            }
        };
        
        service.getEvents = function() {
            // Initialize schedule
            createSchedule(startTime, endTime);
            return $http.get(path + '/events', {
                cache: true
            }).then(function(results) {
                // Order of methods: listTimeSlots, addOverlap, createEventData
                listTimeSlots(results.data, addOverlap);
            });
        };
        
        service.eventData = eventData;
        return service;
    }]);
})();