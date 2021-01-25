function init(s, e) {
    // set slots to the jQuery object so I don't need to keep calling it
    var slots = $("#time-slots");
    // places the current day in the currentDay <p>
    $("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

    // create an array of hours from start of the day to the end of the day
    var hours = [];
    for (var i=s ; i < e ; i++) {
        hours.push(i);
    }

    // clear old time slots
    slots.empty();

    // load new slots
    for (var i=0 ; i<hours.length ; i++) {
        if (hours[i]<13) {
            if (hours[i] == 12) {
                var time = hours[i]+":00pm";
            } else {
                var time = hours[i]+":00am";
            }
        } else {
            var time = hours[i]-12+":00pm";
        }

        // get tasks from localStorage and write them in the slot
        var tasks = getTasks("task"+hours[i]);
        var html = "<div class='row'><div class='hour'><div value='"+hours[i]+" class='time-block col-sm-1'>";
        html += time;
        html += "</div></div><textarea id='task"+hours[i]+"' class='";
        
        // color code by time
        var timeCompare = moment(hours[i], 'h').fromNow();
        if (timeCompare.includes("ago")) {
            if (timeCompare.includes("minutes")) {
                html += "present";    
            } else {
                html += "past";
            }
        } else if (timeCompare.includes("minutes")) {
            html += "present";    
        } else {
            html += "future";
        }
        html += " description'>";
        html += tasks;
        html += "</textarea><div value='"+hours[i]+"' class='saveBtn'>💾</div></div>";
        slots.append(html);

        // reset listeners because the saveBtns were emptied
        $(".saveBtn").on("click", function (e) {
            var value = e.target.getAttribute("value");
            var taskNum = "task" + value;
            var taskList = document.getElementById(taskNum).value;
            localStorage.setItem(taskNum, taskList);
        });

        
    }
    
}

// returns the tasks in localStorage or initializes to ""
function getTasks(id) {
    var tasks = localStorage.getItem(id);
    if (tasks === null) { return ""; } else { return tasks; }
}

// returns the first hour of the day or initializes to 8am
function getStartOfDay() {
    var t = localStorage.getItem("startOfDay");
    if (t == null) { 
        localStorage.setItem("startOfDay", 8);
        return 8; 
    } else { 
        return t; 
    }
}

// returns the last hour of the day or initializes to 5pm
function getEndOfDay() {
    var t = localStorage.getItem("endOfDay");
    if (t == null) { 
        localStorage.setItem("endOfDay", 17);
        return 17; 
    } else { 
        return t; 
    }
}
