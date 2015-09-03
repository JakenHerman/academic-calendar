var rep; // This variable is used for replacing the caption to show correct semester title.
var ISOdate; // Get timezone corrected date as ISOString
var date; // use as variable for date handling.
var weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

var n; // use this for weekday handling

$.ajax({
    url: "http://events.shsu.edu/api/2/events",
    dataType: 'jsonp',
    success: function (json) {

        $(".academic-calendar-json").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
            "<td class='top'>Event</td></tr>");

        for (var i = 0; i < json.events.length; i++) {
            $("event-div").append("" + json.events[i].event.title);
            console.log(json.events[i].event.title);
            $(".academic-calendar-json").append("<tr><td>" + json.events[i].event.first_date +
                "</td><td>" + json.events[i].event.first_date +
                "</td><td>" + json.events[i].event.title + "</td></tr>");
        ISOdate = new Date(json.events[i].event.first_date).toISOString();
        date = ISOdate.substring(0, 10).toString();
        n = new Date(date);
        alert(n);
        }

    },
    error: function () {
        alert("Error");
    }
});


$(".submit").click(function () {

    //redirect older year selections
    if ($("#Year").find(":selected").text() === "2012") {
        $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/');
    } else if ($("#Year").find(":selected").text() === "2013") {
        $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/');
    } else if ($("#Year").find(":selected").text() === "2014") {
        $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/');
    }

    //-----------------------
    //handle caption updating
    //-----------------------

    if ($("#Semester").find(":selected").text() === "Fall" && $("#Year")
        .find(":selected").text() === "2015") {
        rep = "Fall 2015 Semester";
        $(".semester-header").html(rep);
    } else if ($("#Semester").find(":selected").text() === "Fall" && $(
        "#Year").find(":selected").text() === "2016") {
        rep = "Fall 2016 Semester";
        $(".semester-header").html(rep);
    } else if ($("#Semester").find(":selected").text() === "Fall" && $(
        "#Year").find(":selected").text() === "2017") {
        rep = "Fall 2017 Semester";
        $(".semester-header").html(rep);
    } else if ($("#Semester").find(":selected").text() === "Spring" && $("#Year").find(":selected").text() === "2015") {
        rep = "Spring 2015 Semester";
        $(".semester-header").html(rep);
    } else if ($("#Semester").find(":selected").text() === "Spring" && $("#Year").find(":selected").text() === "2016") {
        rep = "Spring 2016 Semester";
        $(".semester-header").html(rep);
    } else if ($("#Semester").find(":selected").text() === "Spring" && $("#Year").find(":selected").text() === "2017") {
        rep = "Spring 2017 Semester";
        $(".semester-header").html(rep);
    } else if ($("#Semester").find(":selected").text() === "Summer" && $("#Year").find(":selected").text() === "2015") {
        rep = "Summer 2015 Semester";
        $(".semester-header").html(rep);
    } else if ($("#Semester").find(":selected").text() === "Summer" && $("#Year").find(":selected").text() === "2016") {
        rep = "Summer 2016 Semester";
        $(".semester-header").html(rep);
    } else if ($("#Semester").find(":selected").text() === "Summer" && $("#Year").find(":selected").text() === "2017") {
        rep = "Summer 2017 Semester";
        $(".semester-header").html(rep);
    }
});
