function init() {
    var startOfDay = 8;
    var endOfDay = 17;
    var day = moment().format('YYYY-MM-DD');
    var slots = $("#time-slots");
    
    var hours = []
    for (var i=startOfDay ; i < endOfDay ; i++) {
        hours.push(day+"T"+i+":00");
    }
    console.log(hours);
}

