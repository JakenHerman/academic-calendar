$(document).ready(function () {
    $(".submit").click();
});


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

    }

    //SPRING 2016
    else if ($("#Semester").find(":selected").text() === "Spring" && $("#Year").find(":selected").text() === "2016") {
        
        $(".body-text").html("");
        $(".academic-calendar-json").html("<caption class='semester-header'></caption>");
        rep = "Spring 2016 Semester";
        $(".semester-header").html(rep);

        $.ajax({
            url: "http://events.shsu.edu/api/2/events?keyword=Spring2016",
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

        $(".body-text").append("<p><strong>RESIGNATION NOTE</strong>:Students may resign with a 'W' grade from the 13th class day until the deadline posted in the academic calendar. However, if a final exam has been given for any course or lab, you will NOT be permitted to resign.</p> <br> <table class='academic-calendar-json-two' border='1' style='width:100%'><caption class='semester-header-two'></caption></table>");

        $.ajax({
            url: "http://events.shsu.edu/api/2/events?keyword=SummerII2015",
            dataType: 'jsonp',
            success: function (json) {

                $(".academic-calendar-json-two").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
                    "<td class='top'>Event</td></tr>");

                $(".semester-header-two").html("Summer II 2015 Semester");

                for (var i = 0; i < json.events.length; i++) {
                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json-two").append("<tr><td>" + json.events[i].event.first_date +
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


    } 
    
    else if ($("#Semester").find(":selected").text() === "Summer" && $("#Year").find(":selected").text() === "2016") {
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
        
        $(".body-text").append("<p><strong>RESIGNATION NOTE</strong>:Students may resign with a 'W' grade from the 13th class day until the deadline posted in the academic calendar. However, if a final exam has been given for any course or lab, you will NOT be permitted to resign.</p> <br> <table class='academic-calendar-json-two' border='1' style='width:100%'><caption class='semester-header-two'></caption></table>");
        
                    $.ajax({
                    url: "http://events.shsu.edu/api/2/events?keyword=SummerII2016",
                    dataType: 'jsonp',
                    success: function (json) {

                $(".academic-calendar-json-two").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
            "<td class='top'>Event</td></tr>");
                        
                        $(".semester-header-two").html("Summer II 2016 Semester");

                for (var i = 0; i < json.events.length; i++) {
                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json-two").append("<tr><td>" + json.events[i].event.first_date +
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
    
    } 
    
    else if ($("#Semester").find(":selected").text() === "Summer" && $("#Year").find(":selected").text() === "2017") {
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
        
        $(".body-text").append("<p><strong>RESIGNATION NOTE</strong>:Students may resign with a 'W' grade from the 13th class day until the deadline posted in the academic calendar. However, if a final exam has been given for any course or lab, you will NOT be permitted to resign.</p> <br> <table class='academic-calendar-json-two' border='1' style='width:100%'><caption class='semester-header-two'></caption></table>");
        
                    $.ajax({
                    url: "http://events.shsu.edu/api/2/events?keyword=SummerII2017",
                    dataType: 'jsonp',
                    success: function (json) {

                $(".academic-calendar-json-two").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
            "<td class='top'>Event</td></tr>");
                        
                        $(".semester-header-two").html("Summer II 2017 Semester");

                for (var i = 0; i < json.events.length; i++) {
                    $("event-div").append("" + json.events[i].event.title);
                    console.log(json.events[i].event.title);
                    $(".academic-calendar-json-two").append("<tr><td>" + json.events[i].event.first_date +
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
        
        
    }
});
