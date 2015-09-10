// JScript source code
$(document).ready(function () {
    $(".submit").click();
});


var rep; // This variable is used for replacing the caption to show correct semester title.
var weekdayMonth;
var weekdayDay;
var weekdayYear;
var monthSubstring;
var weekdayPrint;
var secondDate;
var weekdayGetDay;
var secondWeekdayMonth;
var secondWeekdayYear;
var secondWeekdayDay;
var secondWeekdayPrint;
var secondWeekdayGetDay;
var finalWeekday;
var weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';



$(".submit").click(function () {

    //redirect older year selections
    if ($("#Year").find(":selected").text() === "2012") {
        $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/');
    } else if ($("#Year").find(":selected").text() === "2013") {
        $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/');
    } else if ($("#Year").find(":selected").text() === "2014") {
        $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/');
    } else if ($("#Semester").find(":selected").text() === "Fall" && $("#Year")
        .find(":selected").text() === "2015") {
        $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/');
    } else if ($("#Semester").find(":selected").text() === "Spring" && $("#Year").find(":selected").text() === "2015") {
        $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/');
    }

    //-----------------
    //-----------------
    //CURRENT SEMESTERS
    //-----------------
    //-----------------

    //FALL 2016
    if ($("#Semester").find(":selected").text() === "Fall" && $(
        "#Year").find(":selected").text() === "2016") {

        $(".body-text").html("");

        $(".academic-calendar-json").html("<caption class='semester-header'></caption>");
        rep = "Fall 2016 Semester";
        $(".semester-header").html(rep);

        $.ajax({
            url: "http://events.shsu.edu/api/2/events?keyword=Fall2016",
            dataType: 'jsonp',
            success: function (json) {


                $(".academic-calendar-json").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
                    "<td class='top'>Event</td></tr>");

                for (var i = 0; i < json.events.length; i++) {

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();
                        finalWeekday = weekday[weekdayGetDay];
                    } else {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();

                        secondWeekdayYear = json.events[i].event.last_date.substring(0, 4);
                        secondWeekdayMonth = parseInt(json.events[i].event.last_date.substring(5, 7)) - 1;
                        secondWeekdayDay = json.events[i].event.last_date.substring(8, 10);

                        secondWeekdayPrint = new Date(secondWeekdayYear, secondWeekdayMonth, secondWeekdayDay);
                        secondWeekdayGetDay = secondWeekdayPrint.getDay();

                        finalWeekday = weekday[weekdayGetDay] + " - " + weekday[secondWeekdayGetDay];
                    }

                    switch (json.events[i].event.first_date.substring(5, 7)) {
                        case '08':
                            monthSubstring = "August";
                            break;
                        case '09':
                            monthSubstring = "September";
                            break;
                        case '10':
                            monthSubstring = "October";
                            break;
                        case '11':
                            monthSubstring = "November";
                            break;
                        case '12':
                            monthSubstring = "December";
                            break;
                        case '01':
                            monthSubstring = "January";
                            break;
                        case '02':
                            monthSubstring = "February";
                            break;
                        case '03':
                            monthSubstring = "March";
                            break;
                        case '04':
                            monthSubstring = "April";
                            break;
                        case '05':
                            monthSubstring = "May";
                            break;
                        case '06':
                            monthSubstring = "June";
                            break;
                        case '07':
                            monthSubstring = "July";
                            break;

                    }

                    switch (json.events[i].event.last_date.substring(5, 7)) {
                        case '08':
                            secondDate = "August";
                            break;
                        case '09':
                            secondDate = "September";
                            break;
                        case '10':
                            secondDate = "October";
                            break;
                        case '11':
                            secondDate = "November";
                            break;
                        case '12':
                            secondDate = "December";
                            break;
                        case '01':
                            secondDate = "January";
                            break;
                        case '02':
                            secondDate = "February";
                            break;
                        case '03':
                            secondDate = "March";
                            break;
                        case '04':
                            secondDate = "April";
                            break;
                        case '05':
                            secondDate = "May";
                            break;
                        case '06':
                            secondDate = "June";
                            break;
                        case '07':
                            secondDate = "July";
                            break;

                    }

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10);
                    } else {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10) + " - " + secondDate + " " + json.events[i].event.last_date.substring(8, 10);
                    }


                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json").append("<tr><td>" + date +
                        "</td><td>" + finalWeekday +
                        "</td><td>" + json.events[i].event.title + "</td></tr>");

                }

            },
            error: function () {
                alert("Error");
            }
        });

    }


    //FALL 2017
    else if ($("#Semester").find(":selected").text() === "Fall" && $(
        "#Year").find(":selected").text() === "2017") {

        $(".body-text").html("");
        $(".academic-calendar-json").html("<caption class='semester-header'></caption>");
        rep = "Fall 2017 Semester";
        $(".semester-header").html(rep);

        $.ajax({
            url: "http://events.shsu.edu/api/2/events?keyword=Fall2017",
            dataType: 'jsonp',
            success: function (json) {

                $(".academic-calendar-json").append("<tr><td class='top'>Date</td><td class='top'>Day</td>" +
                    "<td class='top'>Event</td></tr>");

                for (var i = 0; i < json.events.length; i++) {

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();
                        finalWeekday = weekday[weekdayGetDay];
                    } else {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();

                        secondWeekdayYear = json.events[i].event.last_date.substring(0, 4);
                        secondWeekdayMonth = parseInt(json.events[i].event.last_date.substring(5, 7)) - 1;
                        secondWeekdayDay = json.events[i].event.last_date.substring(8, 10);

                        secondWeekdayPrint = new Date(secondWeekdayYear, secondWeekdayMonth, secondWeekdayDay);
                        secondWeekdayGetDay = secondWeekdayPrint.getDay();

                        finalWeekday = weekday[weekdayGetDay] + " - " + weekday[secondWeekdayGetDay];
                    }

                    switch (json.events[i].event.first_date.substring(5, 7)) {
                        case '08':
                            monthSubstring = "August";
                            break;
                        case '09':
                            monthSubstring = "September";
                            break;
                        case '10':
                            monthSubstring = "October";
                            break;
                        case '11':
                            monthSubstring = "November";
                            break;
                        case '12':
                            monthSubstring = "December";
                            break;
                        case '01':
                            monthSubstring = "January";
                            break;
                        case '02':
                            monthSubstring = "February";
                            break;
                        case '03':
                            monthSubstring = "March";
                            break;
                        case '04':
                            monthSubstring = "April";
                            break;
                        case '05':
                            monthSubstring = "May";
                            break;
                        case '06':
                            monthSubstring = "June";
                            break;
                        case '07':
                            monthSubstring = "July";
                            break;

                    }

                    switch (json.events[i].event.last_date.substring(5, 7)) {
                        case '08':
                            secondDate = "August";
                            break;
                        case '09':
                            secondDate = "September";
                            break;
                        case '10':
                            secondDate = "October";
                            break;
                        case '11':
                            secondDate = "November";
                            break;
                        case '12':
                            secondDate = "December";
                            break;
                        case '01':
                            secondDate = "January";
                            break;
                        case '02':
                            secondDate = "February";
                            break;
                        case '03':
                            secondDate = "March";
                            break;
                        case '04':
                            secondDate = "April";
                            break;
                        case '05':
                            secondDate = "May";
                            break;
                        case '06':
                            secondDate = "June";
                            break;
                        case '07':
                            secondDate = "July";
                            break;

                    }

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10);
                    } else {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10) + " - " + secondDate + " " + json.events[i].event.last_date.substring(8, 10);
                    }


                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json").append("<tr><td>" + date +
                        "</td><td>" + finalWeekday +
                        "</td><td>" + json.events[i].event.title + "</td></tr>");
                }

            },
            error: function () {
                alert("Error");
            }
        });
    }

    //FALL 2018
    else if ($("#Semester").find(":selected").text() === "Fall" && $(
        "#Year").find(":selected").text() === "2018") {

        $(".body-text").html("");
        $(".academic-calendar-json").html("<caption class='semester-header'></caption>");
        rep = "Fall 2018 Semester";
        $(".semester-header").html(rep);

        $.ajax({
            url: "http://events.shsu.edu/api/2/events?keyword=Fall2018",
            dataType: 'jsonp',
            success: function (json) {

                $(".academic-calendar-json").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
                    "<td class='top'>Event</td></tr>");

                for (var i = 0; i < json.events.length; i++) {

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();
                        finalWeekday = weekday[weekdayGetDay];
                    } else {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();

                        secondWeekdayYear = json.events[i].event.last_date.substring(0, 4);
                        secondWeekdayMonth = parseInt(json.events[i].event.last_date.substring(5, 7)) - 1;
                        secondWeekdayDay = json.events[i].event.last_date.substring(8, 10);

                        secondWeekdayPrint = new Date(secondWeekdayYear, secondWeekdayMonth, secondWeekdayDay);
                        secondWeekdayGetDay = secondWeekdayPrint.getDay();

                        finalWeekday = weekday[weekdayGetDay] + " - " + weekday[secondWeekdayGetDay];
                    }

                    switch (json.events[i].event.first_date.substring(5, 7)) {
                        case '08':
                            monthSubstring = "August";
                            break;
                        case '09':
                            monthSubstring = "September";
                            break;
                        case '10':
                            monthSubstring = "October";
                            break;
                        case '11':
                            monthSubstring = "November";
                            break;
                        case '12':
                            monthSubstring = "December";
                            break;
                        case '01':
                            monthSubstring = "January";
                            break;
                        case '02':
                            monthSubstring = "February";
                            break;
                        case '03':
                            monthSubstring = "March";
                            break;
                        case '04':
                            monthSubstring = "April";
                            break;
                        case '05':
                            monthSubstring = "May";
                            break;
                        case '06':
                            monthSubstring = "June";
                            break;
                        case '07':
                            monthSubstring = "July";
                            break;

                    }

                    switch (json.events[i].event.last_date.substring(5, 7)) {
                        case '08':
                            secondDate = "August";
                            break;
                        case '09':
                            secondDate = "September";
                            break;
                        case '10':
                            secondDate = "October";
                            break;
                        case '11':
                            secondDate = "November";
                            break;
                        case '12':
                            secondDate = "December";
                            break;
                        case '01':
                            secondDate = "January";
                            break;
                        case '02':
                            secondDate = "February";
                            break;
                        case '03':
                            secondDate = "March";
                            break;
                        case '04':
                            secondDate = "April";
                            break;
                        case '05':
                            secondDate = "May";
                            break;
                        case '06':
                            secondDate = "June";
                            break;
                        case '07':
                            secondDate = "July";
                            break;

                    }

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10);
                    } else {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10) + " - " + secondDate + " " + json.events[i].event.last_date.substring(8, 10);
                    }


                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json").append("<tr><td>" + date +
                        "</td><td>" + finalWeekday +
                        "</td><td>" + json.events[i].event.title + "</td></tr>");
                }

            },
            error: function () {
                alert("Error");
            }
        });

    }

    //SPRING 2016
    else if ($("#Semester").find(":selected").text() === "Spring" && $("#Year").find(":selected").text() === "2016") {

        $(".body-text").html("");
        $(".academic-calendar-json").html("<caption class='semester-header'></caption>");
        rep = "Spring 2016 Semester";
        $(".semester-header").html(rep);

        $.ajax({
            url: "http://events.shsu.edu/api/2/events",
            dataType: 'jsonp',
            success: function (json) {

                $(".academic-calendar-json").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
                    "<td class='top'>Event</td></tr>");

                for (var i = 0; i < json.events.length; i++) {



                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();
                        finalWeekday = weekday[weekdayGetDay];
                    } else {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();

                        secondWeekdayYear = json.events[i].event.last_date.substring(0, 4);
                        secondWeekdayMonth = parseInt(json.events[i].event.last_date.substring(5, 7)) - 1;
                        secondWeekdayDay = json.events[i].event.last_date.substring(8, 10);

                        secondWeekdayPrint = new Date(secondWeekdayYear, secondWeekdayMonth, secondWeekdayDay);
                        secondWeekdayGetDay = secondWeekdayPrint.getDay();

                        finalWeekday = weekday[weekdayGetDay] + " - " + weekday[secondWeekdayGetDay];
                    }





                    switch (json.events[i].event.first_date.substring(5, 7)) {
                        case '08':
                            monthSubstring = "August";
                            break;
                        case '09':
                            monthSubstring = "September";
                            break;
                        case '10':
                            monthSubstring = "October";
                            break;
                        case '11':
                            monthSubstring = "November";
                            break;
                        case '12':
                            monthSubstring = "December";
                            break;
                        case '01':
                            monthSubstring = "January";
                            break;
                        case '02':
                            monthSubstring = "February";
                            break;
                        case '03':
                            monthSubstring = "March";
                            break;
                        case '04':
                            monthSubstring = "April";
                            break;
                        case '05':
                            monthSubstring = "May";
                            break;
                        case '06':
                            monthSubstring = "June";
                            break;
                        case '07':
                            monthSubstring = "July";
                            break;

                    }

                    switch (json.events[i].event.last_date.substring(5, 7)) {
                        case '08':
                            secondDate = "August";
                            break;
                        case '09':
                            secondDate = "September";
                            break;
                        case '10':
                            secondDate = "October";
                            break;
                        case '11':
                            secondDate = "November";
                            break;
                        case '12':
                            secondDate = "December";
                            break;
                        case '01':
                            secondDate = "January";
                            break;
                        case '02':
                            secondDate = "February";
                            break;
                        case '03':
                            secondDate = "March";
                            break;
                        case '04':
                            secondDate = "April";
                            break;
                        case '05':
                            secondDate = "May";
                            break;
                        case '06':
                            secondDate = "June";
                            break;
                        case '07':
                            secondDate = "July";
                            break;

                    }

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {

                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10);
                    } else {

                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10) + " - " + secondDate + " " + json.events[i].event.last_date.substring(8, 10);

                    }


                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json").append("<tr><td>" + date +
                        "</td><td>" + finalWeekday +
                        "</td><td>" + json.events[i].event.title + "</td></tr>");
                }

            },
            error: function () {
                alert("Error");
            }
        });


    }



    //SPRING 2017
    else if ($("#Semester").find(":selected").text() === "Spring" && $("#Year").find(":selected").text() === "2017") {
        $(".body-text").html("");
        $(".academic-calendar-json").html("<caption class='semester-header'></caption>");
        rep = "Spring 2017 Semester";
        $(".semester-header").html(rep);

        $.ajax({
            url: "http://events.shsu.edu/api/2/events?keyword=Spring2017",
            dataType: 'jsonp',
            success: function (json) {

                $(".academic-calendar-json").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
                    "<td class='top'>Event</td></tr>");

                for (var i = 0; i < json.events.length; i++) {

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();
                        finalWeekday = weekday[weekdayGetDay];
                    } else {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();

                        secondWeekdayYear = json.events[i].event.last_date.substring(0, 4);
                        secondWeekdayMonth = parseInt(json.events[i].event.last_date.substring(5, 7)) - 1;
                        secondWeekdayDay = json.events[i].event.last_date.substring(8, 10);

                        secondWeekdayPrint = new Date(secondWeekdayYear, secondWeekdayMonth, secondWeekdayDay);
                        secondWeekdayGetDay = secondWeekdayPrint.getDay();

                        finalWeekday = weekday[weekdayGetDay] + " - " + weekday[secondWeekdayGetDay];
                    }

                    switch (json.events[i].event.first_date.substring(5, 7)) {
                        case '08':
                            monthSubstring = "August";
                            break;
                        case '09':
                            monthSubstring = "September";
                            break;
                        case '10':
                            monthSubstring = "October";
                            break;
                        case '11':
                            monthSubstring = "November";
                            break;
                        case '12':
                            monthSubstring = "December";
                            break;
                        case '01':
                            monthSubstring = "January";
                            break;
                        case '02':
                            monthSubstring = "February";
                            break;
                        case '03':
                            monthSubstring = "March";
                            break;
                        case '04':
                            monthSubstring = "April";
                            break;
                        case '05':
                            monthSubstring = "May";
                            break;
                        case '06':
                            monthSubstring = "June";
                            break;
                        case '07':
                            monthSubstring = "July";
                            break;

                    }

                    switch (json.events[i].event.last_date.substring(5, 7)) {
                        case '08':
                            secondDate = "August";
                            break;
                        case '09':
                            secondDate = "September";
                            break;
                        case '10':
                            secondDate = "October";
                            break;
                        case '11':
                            secondDate = "November";
                            break;
                        case '12':
                            secondDate = "December";
                            break;
                        case '01':
                            secondDate = "January";
                            break;
                        case '02':
                            secondDate = "February";
                            break;
                        case '03':
                            secondDate = "March";
                            break;
                        case '04':
                            secondDate = "April";
                            break;
                        case '05':
                            secondDate = "May";
                            break;
                        case '06':
                            secondDate = "June";
                            break;
                        case '07':
                            secondDate = "July";
                            break;

                    }

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10);
                    } else {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10) + " - " + secondDate + " " + json.events[i].event.last_date.substring(8, 10);
                    }


                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json").append("<tr><td>" + date +
                        "</td><td>" + finalWeekday +
                        "</td><td>" + json.events[i].event.title + "</td></tr>");
                }

            },
            error: function () {
                alert("Error");
            }
        });


    }
    //SPRING 2018
    else if ($("#Semester").find(":selected").text() === "Spring" && $("#Year").find(":selected").text() === "2018") {
        $(".body-text").html("");
        $(".academic-calendar-json").html("<caption class='semester-header'></caption>");
        rep = "Spring 2018 Semester";
        $(".semester-header").html(rep);

        $.ajax({
            url: "http://events.shsu.edu/api/2/events?keyword=Spring2018",
            dataType: 'jsonp',
            success: function (json) {

                $(".academic-calendar-json").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
                    "<td class='top'>Event</td></tr>");

                for (var i = 0; i < json.events.length; i++) {

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();
                        finalWeekday = weekday[weekdayGetDay];
                    } else {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();

                        secondWeekdayYear = json.events[i].event.last_date.substring(0, 4);
                        secondWeekdayMonth = parseInt(json.events[i].event.last_date.substring(5, 7)) - 1;
                        secondWeekdayDay = json.events[i].event.last_date.substring(8, 10);

                        secondWeekdayPrint = new Date(secondWeekdayYear, secondWeekdayMonth, secondWeekdayDay);
                        secondWeekdayGetDay = secondWeekdayPrint.getDay();

                        finalWeekday = weekday[weekdayGetDay] + " - " + weekday[secondWeekdayGetDay];
                    }

                    switch (json.events[i].event.first_date.substring(5, 7)) {
                        case '08':
                            monthSubstring = "August";
                            break;
                        case '09':
                            monthSubstring = "September";
                            break;
                        case '10':
                            monthSubstring = "October";
                            break;
                        case '11':
                            monthSubstring = "November";
                            break;
                        case '12':
                            monthSubstring = "December";
                            break;
                        case '01':
                            monthSubstring = "January";
                            break;
                        case '02':
                            monthSubstring = "February";
                            break;
                        case '03':
                            monthSubstring = "March";
                            break;
                        case '04':
                            monthSubstring = "April";
                            break;
                        case '05':
                            monthSubstring = "May";
                            break;
                        case '06':
                            monthSubstring = "June";
                            break;
                        case '07':
                            monthSubstring = "July";
                            break;

                    }

                    switch (json.events[i].event.last_date.substring(5, 7)) {
                        case '08':
                            secondDate = "August";
                            break;
                        case '09':
                            secondDate = "September";
                            break;
                        case '10':
                            secondDate = "October";
                            break;
                        case '11':
                            secondDate = "November";
                            break;
                        case '12':
                            secondDate = "December";
                            break;
                        case '01':
                            secondDate = "January";
                            break;
                        case '02':
                            secondDate = "February";
                            break;
                        case '03':
                            secondDate = "March";
                            break;
                        case '04':
                            secondDate = "April";
                            break;
                        case '05':
                            secondDate = "May";
                            break;
                        case '06':
                            secondDate = "June";
                            break;
                        case '07':
                            secondDate = "July";
                            break;

                    }

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10);
                    } else {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10) + " - " + secondDate + " " + json.events[i].event.last_date.substring(8, 10);
                    }


                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json").append("<tr><td>" + date +
                        "</td><td>" + finalWeekday +
                        "</td><td>" + json.events[i].event.title + "</td></tr>");
                }

            },
            error: function () {
                alert("Error");
            }
        });


    }


    //SUMMER SEMESTERS VVV
    else if ($("#Semester").find(":selected").text() === "Summer" && $("#Year").find(":selected").text() === "2015") {
        $(".body-text").html("");
        $(".academic-calendar-json").html("<caption class='semester-header'></caption>");
        rep = "Summer I 2015 Semester";
        $(".semester-header").html(rep);
        $.ajax({
            url: "http://events.shsu.edu/api/2/events?keyword=SummerI2015",
            dataType: 'jsonp',
            success: function (json) {

                $(".academic-calendar-json").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
                    "<td class='top'>Event</td></tr>");

                for (var i = 0; i < json.events.length; i++) {

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();
                        finalWeekday = weekday[weekdayGetDay];
                    } else {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();

                        secondWeekdayYear = json.events[i].event.last_date.substring(0, 4);
                        secondWeekdayMonth = parseInt(json.events[i].event.last_date.substring(5, 7)) - 1;
                        secondWeekdayDay = json.events[i].event.last_date.substring(8, 10);

                        secondWeekdayPrint = new Date(secondWeekdayYear, secondWeekdayMonth, secondWeekdayDay);
                        secondWeekdayGetDay = secondWeekdayPrint.getDay();

                        finalWeekday = weekday[weekdayGetDay] + " - " + weekday[secondWeekdayGetDay];
                    }

                    switch (json.events[i].event.first_date.substring(5, 7)) {
                        case '08':
                            monthSubstring = "August";
                            break;
                        case '09':
                            monthSubstring = "September";
                            break;
                        case '10':
                            monthSubstring = "October";
                            break;
                        case '11':
                            monthSubstring = "November";
                            break;
                        case '12':
                            monthSubstring = "December";
                            break;
                        case '01':
                            monthSubstring = "January";
                            break;
                        case '02':
                            monthSubstring = "February";
                            break;
                        case '03':
                            monthSubstring = "March";
                            break;
                        case '04':
                            monthSubstring = "April";
                            break;
                        case '05':
                            monthSubstring = "May";
                            break;
                        case '06':
                            monthSubstring = "June";
                            break;
                        case '07':
                            monthSubstring = "July";
                            break;

                    }

                    switch (json.events[i].event.last_date.substring(5, 7)) {
                        case '08':
                            secondDate = "August";
                            break;
                        case '09':
                            secondDate = "September";
                            break;
                        case '10':
                            secondDate = "October";
                            break;
                        case '11':
                            secondDate = "November";
                            break;
                        case '12':
                            secondDate = "December";
                            break;
                        case '01':
                            secondDate = "January";
                            break;
                        case '02':
                            secondDate = "February";
                            break;
                        case '03':
                            secondDate = "March";
                            break;
                        case '04':
                            secondDate = "April";
                            break;
                        case '05':
                            secondDate = "May";
                            break;
                        case '06':
                            secondDate = "June";
                            break;
                        case '07':
                            secondDate = "July";
                            break;

                    }

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10);
                    } else {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10) + " - " + secondDate + " " + json.events[i].event.last_date.substring(8, 10);
                    }


                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json").append("<tr><td>" + date +
                        "</td><td>" + finalWeekday +
                        "</td><td>" + json.events[i].event.title + "</td></tr>");
                }

            },
            error: function () {
                alert("Error");
            }
        });

        $(".body-text").append("<p><strong>RESIGNATION NOTE</strong>:Students may resign with a 'W' grade from the 13th class day until the deadline posted in the academic calendar. However, if a final exam has been given for any course or lab, you will NOT be permitted to resign.</p> <br> <table class='academic-calendar-json-two' border='1' style='width:100%'><caption class='semester-header-two'></caption></table>");

        $.ajax({
            url: "http://events.shsu.edu/api/2/events?keyword=SummerII2015",
            dataType: 'jsonp',
            success: function (json) {

                $(".academic-calendar-json-two").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
                    "<td class='top'>Event</td></tr>");

                $(".semester-header-two").html("Summer II 2015 Semester");

                for (var i = 0; i < json.events.length; i++) {

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();
                        finalWeekday = weekday[weekdayGetDay];
                    } else {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();

                        secondWeekdayYear = json.events[i].event.last_date.substring(0, 4);
                        secondWeekdayMonth = parseInt(json.events[i].event.last_date.substring(5, 7)) - 1;
                        secondWeekdayDay = json.events[i].event.last_date.substring(8, 10);

                        secondWeekdayPrint = new Date(secondWeekdayYear, secondWeekdayMonth, secondWeekdayDay);
                        secondWeekdayGetDay = secondWeekdayPrint.getDay();

                        finalWeekday = weekday[weekdayGetDay] + " - " + weekday[secondWeekdayGetDay];
                    }

                    switch (json.events[i].event.first_date.substring(5, 7)) {
                        case '08':
                            monthSubstring = "August";
                            break;
                        case '09':
                            monthSubstring = "September";
                            break;
                        case '10':
                            monthSubstring = "October";
                            break;
                        case '11':
                            monthSubstring = "November";
                            break;
                        case '12':
                            monthSubstring = "December";
                            break;
                        case '01':
                            monthSubstring = "January";
                            break;
                        case '02':
                            monthSubstring = "February";
                            break;
                        case '03':
                            monthSubstring = "March";
                            break;
                        case '04':
                            monthSubstring = "April";
                            break;
                        case '05':
                            monthSubstring = "May";
                            break;
                        case '06':
                            monthSubstring = "June";
                            break;
                        case '07':
                            monthSubstring = "July";
                            break;

                    }

                    switch (json.events[i].event.last_date.substring(5, 7)) {
                        case '08':
                            secondDate = "August";
                            break;
                        case '09':
                            secondDate = "September";
                            break;
                        case '10':
                            secondDate = "October";
                            break;
                        case '11':
                            secondDate = "November";
                            break;
                        case '12':
                            secondDate = "December";
                            break;
                        case '01':
                            secondDate = "January";
                            break;
                        case '02':
                            secondDate = "February";
                            break;
                        case '03':
                            secondDate = "March";
                            break;
                        case '04':
                            secondDate = "April";
                            break;
                        case '05':
                            secondDate = "May";
                            break;
                        case '06':
                            secondDate = "June";
                            break;
                        case '07':
                            secondDate = "July";
                            break;

                    }

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10);
                    } else {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10) + " - " + secondDate + " " + json.events[i].event.last_date.substring(8, 10);
                    }


                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json-two").append("<tr><td>" + date +
                        "</td><td>" + finalWeekday +
                        "</td><td>" + json.events[i].event.title + "</td></tr>");
                }

            },
            error: function () {
                alert("Error");
            }
        });


    } else if ($("#Semester").find(":selected").text() === "Summer" && $("#Year").find(":selected").text() === "2016") {
        $(".body-text").html("");
        $(".academic-calendar-json").html("<caption class='semester-header'></caption>");
        rep = "Summer I 2016 Semester";
        $(".semester-header").html(rep);
        $.ajax({
            url: "http://events.shsu.edu/api/2/events?keyword=SummerI2016",
            dataType: 'jsonp',
            success: function (json) {

                $(".academic-calendar-json").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
                    "<td class='top'>Event</td></tr>");

                for (var i = 0; i < json.events.length; i++) {

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();
                        finalWeekday = weekday[weekdayGetDay];
                    } else {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();

                        secondWeekdayYear = json.events[i].event.last_date.substring(0, 4);
                        secondWeekdayMonth = parseInt(json.events[i].event.last_date.substring(5, 7)) - 1;
                        secondWeekdayDay = json.events[i].event.last_date.substring(8, 10);

                        secondWeekdayPrint = new Date(secondWeekdayYear, secondWeekdayMonth, secondWeekdayDay);
                        secondWeekdayGetDay = secondWeekdayPrint.getDay();

                        finalWeekday = weekday[weekdayGetDay] + " - " + weekday[secondWeekdayGetDay];
                    }

                    switch (json.events[i].event.first_date.substring(5, 7)) {
                        case '08':
                            monthSubstring = "August";
                            break;
                        case '09':
                            monthSubstring = "September";
                            break;
                        case '10':
                            monthSubstring = "October";
                            break;
                        case '11':
                            monthSubstring = "November";
                            break;
                        case '12':
                            monthSubstring = "December";
                            break;
                        case '01':
                            monthSubstring = "January";
                            break;
                        case '02':
                            monthSubstring = "February";
                            break;
                        case '03':
                            monthSubstring = "March";
                            break;
                        case '04':
                            monthSubstring = "April";
                            break;
                        case '05':
                            monthSubstring = "May";
                            break;
                        case '06':
                            monthSubstring = "June";
                            break;
                        case '07':
                            monthSubstring = "July";
                            break;

                    }

                    switch (json.events[i].event.last_date.substring(5, 7)) {
                        case '08':
                            secondDate = "August";
                            break;
                        case '09':
                            secondDate = "September";
                            break;
                        case '10':
                            secondDate = "October";
                            break;
                        case '11':
                            secondDate = "November";
                            break;
                        case '12':
                            secondDate = "December";
                            break;
                        case '01':
                            secondDate = "January";
                            break;
                        case '02':
                            secondDate = "February";
                            break;
                        case '03':
                            secondDate = "March";
                            break;
                        case '04':
                            secondDate = "April";
                            break;
                        case '05':
                            secondDate = "May";
                            break;
                        case '06':
                            secondDate = "June";
                            break;
                        case '07':
                            secondDate = "July";
                            break;

                    }

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10);
                    } else {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10) + " - " + secondDate + " " + json.events[i].event.last_date.substring(8, 10);
                    }


                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json").append("<tr><td>" + date +
                        "</td><td>" + finalWeekday +
                        "</td><td>" + json.events[i].event.title + "</td></tr>");
                }

            },
            error: function () {
                alert("Error");
            }
        });

        $(".body-text").append("<p><strong>RESIGNATION NOTE</strong>:Students may resign with a 'W' grade from the 13th class day until the deadline posted in the academic calendar. However, if a final exam has been given for any course or lab, you will NOT be permitted to resign.</p> <br> <table class='academic-calendar-json-two' border='1' style='width:100%'><caption class='semester-header-two'></caption></table>");

        $.ajax({
            url: "http://events.shsu.edu/api/2/events?keyword=SummerII2016",
            dataType: 'jsonp',
            success: function (json) {

                $(".academic-calendar-json-two").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
                    "<td class='top'>Event</td></tr>");

                $(".semester-header-two").html("Summer II 2016 Semester");

                for (var i = 0; i < json.events.length; i++) {

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();
                        finalWeekday = weekday[weekdayGetDay];
                    } else {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();

                        secondWeekdayYear = json.events[i].event.last_date.substring(0, 4);
                        secondWeekdayMonth = parseInt(json.events[i].event.last_date.substring(5, 7)) - 1;
                        secondWeekdayDay = json.events[i].event.last_date.substring(8, 10);

                        secondWeekdayPrint = new Date(secondWeekdayYear, secondWeekdayMonth, secondWeekdayDay);
                        secondWeekdayGetDay = secondWeekdayPrint.getDay();

                        finalWeekday = weekday[weekdayGetDay] + " - " + weekday[secondWeekdayGetDay];
                    }

                    switch (json.events[i].event.first_date.substring(5, 7)) {
                        case '08':
                            monthSubstring = "August";
                            break;
                        case '09':
                            monthSubstring = "September";
                            break;
                        case '10':
                            monthSubstring = "October";
                            break;
                        case '11':
                            monthSubstring = "November";
                            break;
                        case '12':
                            monthSubstring = "December";
                            break;
                        case '01':
                            monthSubstring = "January";
                            break;
                        case '02':
                            monthSubstring = "February";
                            break;
                        case '03':
                            monthSubstring = "March";
                            break;
                        case '04':
                            monthSubstring = "April";
                            break;
                        case '05':
                            monthSubstring = "May";
                            break;
                        case '06':
                            monthSubstring = "June";
                            break;
                        case '07':
                            monthSubstring = "July";
                            break;

                    }

                    switch (json.events[i].event.last_date.substring(5, 7)) {
                        case '08':
                            secondDate = "August";
                            break;
                        case '09':
                            secondDate = "September";
                            break;
                        case '10':
                            secondDate = "October";
                            break;
                        case '11':
                            secondDate = "November";
                            break;
                        case '12':
                            secondDate = "December";
                            break;
                        case '01':
                            secondDate = "January";
                            break;
                        case '02':
                            secondDate = "February";
                            break;
                        case '03':
                            secondDate = "March";
                            break;
                        case '04':
                            secondDate = "April";
                            break;
                        case '05':
                            secondDate = "May";
                            break;
                        case '06':
                            secondDate = "June";
                            break;
                        case '07':
                            secondDate = "July";
                            break;

                    }

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10);
                    } else {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10) + " - " + secondDate + " " + json.events[i].event.last_date.substring(8, 10);
                    }


                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json-two").append("<tr><td>" + date +
                        "</td><td>" + finalWeekday +
                        "</td><td>" + json.events[i].event.title + "</td></tr>");
                }

            },
            error: function () {
                alert("Error");
            }
        });

    } else if ($("#Semester").find(":selected").text() === "Summer" && $("#Year").find(":selected").text() === "2017") {
        $(".body-text").html("");
        $(".academic-calendar-json").html("<caption class='semester-header'></caption>");
        rep = "Summer I 2017 Semester";
        $(".semester-header").html(rep);
        $.ajax({
            url: "http://events.shsu.edu/api/2/events?keyword=SummerI2017",
            dataType: 'jsonp',
            success: function (json) {

                $(".academic-calendar-json").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
                    "<td class='top'>Event</td></tr>");

                for (var i = 0; i < json.events.length; i++) {

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();
                        finalWeekday = weekday[weekdayGetDay];
                    } else {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();

                        secondWeekdayYear = json.events[i].event.last_date.substring(0, 4);
                        secondWeekdayMonth = parseInt(json.events[i].event.last_date.substring(5, 7)) - 1;
                        secondWeekdayDay = json.events[i].event.last_date.substring(8, 10);

                        secondWeekdayPrint = new Date(secondWeekdayYear, secondWeekdayMonth, secondWeekdayDay);
                        secondWeekdayGetDay = secondWeekdayPrint.getDay();

                        finalWeekday = weekday[weekdayGetDay] + " - " + weekday[secondWeekdayGetDay];
                    }

                    switch (json.events[i].event.first_date.substring(5, 7)) {
                        case '08':
                            monthSubstring = "August";
                            break;
                        case '09':
                            monthSubstring = "September";
                            break;
                        case '10':
                            monthSubstring = "October";
                            break;
                        case '11':
                            monthSubstring = "November";
                            break;
                        case '12':
                            monthSubstring = "December";
                            break;
                        case '01':
                            monthSubstring = "January";
                            break;
                        case '02':
                            monthSubstring = "February";
                            break;
                        case '03':
                            monthSubstring = "March";
                            break;
                        case '04':
                            monthSubstring = "April";
                            break;
                        case '05':
                            monthSubstring = "May";
                            break;
                        case '06':
                            monthSubstring = "June";
                            break;
                        case '07':
                            monthSubstring = "July";
                            break;

                    }

                    switch (json.events[i].event.last_date.substring(5, 7)) {
                        case '08':
                            secondDate = "August";
                            break;
                        case '09':
                            secondDate = "September";
                            break;
                        case '10':
                            secondDate = "October";
                            break;
                        case '11':
                            secondDate = "November";
                            break;
                        case '12':
                            secondDate = "December";
                            break;
                        case '01':
                            secondDate = "January";
                            break;
                        case '02':
                            secondDate = "February";
                            break;
                        case '03':
                            secondDate = "March";
                            break;
                        case '04':
                            secondDate = "April";
                            break;
                        case '05':
                            secondDate = "May";
                            break;
                        case '06':
                            secondDate = "June";
                            break;
                        case '07':
                            secondDate = "July";
                            break;

                    }

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10);
                    } else {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10) + " - " + secondDate + " " + json.events[i].event.last_date.substring(8, 10);
                    }


                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json").append("<tr><td>" + date +
                        "</td><td>" + finalWeekday +
                        "</td><td>" + json.events[i].event.title + "</td></tr>");
                }

            },
            error: function () {
                alert("Error");
            }
        });

        $(".body-text").append("<p><strong>RESIGNATION NOTE</strong>:Students may resign with a 'W' grade from the 13th class day until the deadline posted in the academic calendar. However, if a final exam has been given for any course or lab, you will NOT be permitted to resign.</p> <br> <table class='academic-calendar-json-two' border='1' style='width:100%'><caption class='semester-header-two'></caption></table>");

        $.ajax({
            url: "http://events.shsu.edu/api/2/events?keyword=SummerII2017",
            dataType: 'jsonp',
            success: function (json) {

                $(".academic-calendar-json-two").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
                    "<td class='top'>Event</td></tr>");

                $(".semester-header-two").html("Summer II 2017 Semester");

                for (var i = 0; i < json.events.length; i++) {

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();
                        finalWeekday = weekday[weekdayGetDay];
                    } else {
                        weekdayYear = json.events[i].event.first_date.substring(0, 4);
                        weekdayMonth = parseInt(json.events[i].event.first_date.substring(5, 7)) - 1;
                        weekdayDay = json.events[i].event.first_date.substring(8, 10);

                        weekdayPrint = new Date(weekdayYear, weekdayMonth, weekdayDay);
                        weekdayGetDay = weekdayPrint.getDay();

                        secondWeekdayYear = json.events[i].event.last_date.substring(0, 4);
                        secondWeekdayMonth = parseInt(json.events[i].event.last_date.substring(5, 7)) - 1;
                        secondWeekdayDay = json.events[i].event.last_date.substring(8, 10);

                        secondWeekdayPrint = new Date(secondWeekdayYear, secondWeekdayMonth, secondWeekdayDay);
                        secondWeekdayGetDay = secondWeekdayPrint.getDay();

                        finalWeekday = weekday[weekdayGetDay] + " - " + weekday[secondWeekdayGetDay];
                    }

                    switch (json.events[i].event.first_date.substring(5, 7)) {
                        case '08':
                            monthSubstring = "August";
                            break;
                        case '09':
                            monthSubstring = "September";
                            break;
                        case '10':
                            monthSubstring = "October";
                            break;
                        case '11':
                            monthSubstring = "November";
                            break;
                        case '12':
                            monthSubstring = "December";
                            break;
                        case '01':
                            monthSubstring = "January";
                            break;
                        case '02':
                            monthSubstring = "February";
                            break;
                        case '03':
                            monthSubstring = "March";
                            break;
                        case '04':
                            monthSubstring = "April";
                            break;
                        case '05':
                            monthSubstring = "May";
                            break;
                        case '06':
                            monthSubstring = "June";
                            break;
                        case '07':
                            monthSubstring = "July";
                            break;

                    }

                    switch (json.events[i].event.last_date.substring(5, 7)) {
                        case '08':
                            secondDate = "August";
                            break;
                        case '09':
                            secondDate = "September";
                            break;
                        case '10':
                            secondDate = "October";
                            break;
                        case '11':
                            secondDate = "November";
                            break;
                        case '12':
                            secondDate = "December";
                            break;
                        case '01':
                            secondDate = "January";
                            break;
                        case '02':
                            secondDate = "February";
                            break;
                        case '03':
                            secondDate = "March";
                            break;
                        case '04':
                            secondDate = "April";
                            break;
                        case '05':
                            secondDate = "May";
                            break;
                        case '06':
                            secondDate = "June";
                            break;
                        case '07':
                            secondDate = "July";
                            break;

                    }

                    if (json.events[i].event.first_date === json.events[i].event.last_date) {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10);
                    } else {
                        date = monthSubstring + " " + json.events[i].event.first_date.substring(8, 10) + " - " + secondDate + " " + json.events[i].event.last_date.substring(8, 10);
                    }


                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json-two").append("<tr><td>" + date +
                        "</td><td>" + finalWeekday +
                        "</td><td>" + json.events[i].event.title + "</td></tr>");
                }

            },
            error: function () {
                alert("Error");
            }
        });


    }
});
