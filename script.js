function init(s, e) {
    var slots = $("#time-slots");
    $("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

    var hours = [];
    for (var i=s ; i < e ; i++) {
        hours.push(i);
    }

    slots.empty();
    var currentTime = moment().format('h:mm a');
    for (var i=0 ; i<hours.length ; i++) {
        if (hours[i]<13) {
            if (hours[i] == 12) {
                var time = hours[i]+":00 pm";
            } else {
                var time = hours[i]+":00 am";
            }
        } else {
            var time = hours[i]-12+":00 pm";
        }
        var tasks = getTasks("task"+hours[i]);
        var html = "<div class='row'><div class='hour'><div value='"+hours[i]+" class='time-block col-sm-1'>";
        html += time;
        html += "</div></div><textarea id='task"+hours[i]+"' class='future description'>";
        html += tasks;
        html += "</textarea><div value='"+hours[i]+"' class='saveBtn'>✔</div></div>";
        slots.append(html);
        
        console.log("time: "+time+"   currentTime: "+currentTime);
        console.log(time>currentTime);
    }
    
}



function getTasks(id) {
    var tasks = localStorage.getItem(id);
    if (tasks === null) { return ""; } else { return tasks; }
}
    
function getStartOfDay() {
    var t = localStorage.getItem("startOfDay");
    if (t == null) { return 8; } else { return t; }
}

function getEndOfDay() {
    var t = localStorage.getItem("startOfDay");
    if (t == null) { return 17; } else { return t; }
}
