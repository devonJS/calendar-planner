# Calendar Planner

### To Start

At root directory (in command line):

npm install

node server

In Browser: Navigate to localhost:5000


### Database Access
Website: www.mlab.com

Username: devonjstest

Password: testing333

Database: ds011902/revolttest

**To Add More Data:**
Click on the events collection and then navigate and click on the "add document" button.  Data accepts JSON format. 

Current limitations:
- Granularity down to 30 minute time increments

Refactor: 
- Realized a little late that I can refactor some methods from n^3 to n^2 by making separate objects with every time covered instead of an array called "listTime" for every "event"