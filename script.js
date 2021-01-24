function init() {
    var startOfDay = 8;
    var endOfDay = 17;
    var day = moment().format('YYYY-MM-DD');
    var slots = $("#time-slots");
    $("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

    var hours = [];
    for (var i=startOfDay ; i < endOfDay ; i++) {
        hours.push(i);
    }


    for (var i=0 ; i<hours.length ; i++) {
        if (hours[i]<13) {
            if (hours[i] == 12) {
                var time = hours[i]+":00 PM";
            } else {
                var time = hours[i]+":00 AM";
            }
        } else {
            var time = hours[i]-12+":00 PM";
        }
        var html = "<div class='row'><div class='hour col-sm-1'><div class='time-block col-sm-1'>";
        html += time;
        html += "</div></div><textarea id='task"+hours[i]+"' class='future description'></textarea><div value='"+hours[i]+"' class='saveBtn col-sm-1'>✔</div></div>";
        slots.append(html);
    }
    
    $(".saveBtn").on("click", function (e) {
         var value = e.target.getAttribute("value");
         var taskNum = "task" + value;
         var taskList = document.getElementById(taskNum).value;
         taskList = taskList.replace(/\n\r?/g, '<br />');
         localStorage.setItem(taskNum, taskList);
    });
}

