function init() {
    var startOfDay = 8;
    var endOfDay = 17;
    var day = moment().format('YYYY-MM-DD');
    var slots = $("#time-slots");
    $("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

    var hours = []
    for (var i=startOfDay ; i < endOfDay ; i++) {
        if (i < 13) {
            if (i == 12) {
                hours.push("12:00 PM")
            } else {
                hours.push(i+":00 AM");
            }
        } else {
            hours.push(i-12+":00 PM");
        }
    }

    for (var i=0 ; i<hours.length ; i++) {
        var html = "<div class='row'><div class='hour col-sm-1'><div class='time-block col-sm-1'>";
        html += hours[i];
        html += "</div></div><textarea class='future description'></textarea><div class='saveBtn col-sm-1'>✔</div></div>";
        slots.append(html);
    }

    
}

