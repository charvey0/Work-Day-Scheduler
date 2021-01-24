function init(s, e) {
    var slots = $("#time-slots");
    $("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

    var hours = [];
    for (var i=s ; i < e ; i++) {
        hours.push(i);
    }

    slots.empty();
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
        var tasks = getTasks("task"+hours[i]);
        var html = "<div class='row'><div class='hour'><div value='"+hours[i]+" class='time-block col-sm-1'>";
        html += time;
        html += "</div></div><textarea id='task"+hours[i]+"' class='";
        if (time) {
            html += "present";
        } else {
            html += "past";
        }
        html += " description'>";
        html += tasks;
        html += "</textarea><div value='"+hours[i]+"' class='saveBtn'>✔</div></div>";
        slots.append(html);
        var timeCompare = moment(hours[i], 'h').fromNow();
        
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
