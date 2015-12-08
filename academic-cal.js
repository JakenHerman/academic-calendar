$(document).ready(function() {
    $(".submit").click();
});

var paramString;
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
var eventID = []; //keep track of what events have already been displayed
var selectedSemester; //check which semester is selected by the user
var selectedYear; //check which year is selected by the user
var URLParams = {Sem: selectedSemester, Year: selectedYear};
var date;
var dateRange; //date range used for api calling
var weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';



$(".submit").click(function() {

    //2012 Semesters
    if ($("#Year").find(":selected").text() === "2012") {
        if ($('#Semester').find(':selected').text() === 'Fall') {
            $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/index.php?semester=fall&year=2012&Submit=View+Calendar');
        } else if ($('#Semester').find(':selected').text() === 'Spring') {
            $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/index.php?semester=spring&year=2012&Submit=View+Calendar');
        } else if ($('#Semester').find(':selected').text() === 'Summer') {
            $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/index.php?semester=summer&year=2012&Submit=View+Calendar');
        }
    }

    //2013 Semesters
    else if ($("#Year").find(":selected").text() === "2013") {
        if ($('#Semester').find(':selected').text() === 'Fall') {
            $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/index.php?semester=fall&year=2013&Submit=View+Calendar');
        } else if ($('#Semester').find(':selected').text() === 'Spring') {
            $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/index.php?semester=spring&year=2013&Submit=View+Calendar');
        } else if ($('#Semester').find(':selected').text() === 'Summer') {
            $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/index.php?semester=summer&year=2013&Submit=View+Calendar');
        }
    }

    //2014 Semesters
    else if ($("#Year").find(":selected").text() === "2014") {
        if ($('#Semester').find(':selected').text() === 'Fall') {
            $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/index.php?semester=fall&year=2014&Submit=View+Calendar');
        } else if ($('#Semester').find(':selected').text() === 'Spring') {
            $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/index.php?semester=spring&year=2014&Submit=View+Calendar');
        } else if ($('#Semester').find(':selected').text() === 'Summer') {
            $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/index.php?semester=summer&year=2014&Submit=View+Calendar');
        }
    }

    //2015 Semesters
    else if ($("#Year").find(":selected").text() === "2015") {
        if ($('#Semester').find(':selected').text() === 'Fall') {
            $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/index.php?semester=fall&year=2015&Submit=View+Calendar');
        } else if ($('#Semester').find(':selected').text() === 'Spring') {
            $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/index.php?semester=spring&year=2015&Submit=View+Calendar');
        } else if ($('#Semester').find(':selected').text() === 'Summer') {
            $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/index.php?semester=summer&year=2015&Submit=View+Calendar');
        }
    }

    eventID = []; //clear the array. If array does not get cleared, if you click away from a semester, then click back - no events will appear.

    selectedYear = $("#Year").find(":selected").text();
    selectedSemester = $("#Semester").find(":selected").text();

    $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
           return null;
        }
        else{
           return results[1] || 0;
        }
    }


    var semParam = $.urlParam('Sem');
    var yearParam = $.urlParam('Year');

    if (semParam != null){
        selectedSemester = semParam;
    }

    if (yearParam != null){
        selectedYear = yearParam;
    }


    $(".body-text").html("");
    $(".academic-calendar-json").html("<caption class='semester-header'></caption>");

    if (selectedSemester === "Summer") {
        rep = selectedSemester + " I " + selectedYear + " Semester";
    } else {
        rep = selectedSemester + " " + selectedYear + " Semester";
    }

    $(".semester-header").html(rep);

    if (selectedSemester === "Fall") {
        dateRange = "&start=" + selectedYear + "-03-01&end=" + (parseInt(selectedYear) + 1) + "-01-31&pp=250";
        apiCall();

    } else if (selectedSemester === "Spring") {

        dateRange = "&start=" + (parseInt(selectedYear) - 1) + "-08-01&end=" + selectedYear + "-07-31&pp=250";
        apiCall();

    } else if (selectedSemester === "Summer") {

        selectedSemester = "summerI"
        dateRange = "&start=" + selectedYear + "-01-01&end=" + selectedYear + "-12-31&pp=250";
        apiCall();

        $(".body-text").append("<br><p><strong>RESIGNATION NOTE</strong>:Students may resign with a 'W' grade from the 13th class day until the deadline posted in the academic calendar. However, if a final exam has been given for any course or lab, you will NOT be permitted to resign.</p> <br> <table class='academic-calendar-json-two' border='1' style='width:100%'><caption class='semester-header-two'></caption></table>");

        selectedSemester = "summerII"
        rep = "Summer II " + selectedYear + " Semester";
        $(".semester-header-two").html(rep);
        dateRange = "&start=" + selectedYear + "-01-01&end=" + selectedYear + "-12-31&pp=250";
        apiCall("-two");

    }

    selectedSemester = selectedSemester.toLowerCase();

    function apiCall(calTableNumber) {

        calTableNumber = typeof calTableNumber !== 'undefined' ? calTableNumber : "";

        $.ajax({
            url: "https://events.shsu.edu/api/2/events/?keyword=" + selectedSemester + selectedYear + dateRange,
            dataType: 'jsonp',
            success: function(json) {
                $(".academic-calendar-json" + calTableNumber).append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
                    "<td class='top'>Event</td></tr>");
                for (var i = 0; i < json.events.length; i++) {
                    if (eventID[json.events[i].event.id] === undefined) {
                        eventID[json.events[i].event.id] = json.events[i].event.title;

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
                            date = monthSubstring + " " + parseInt(json.events[i].event.first_date.substring(8, 10), 10);
                        } else {
                            date = monthSubstring + " " + parseInt(json.events[i].event.first_date.substring(8, 10), 10) + " - " + secondDate + " " + parseInt(json.events[i].event.last_date.substring(8, 10), 10);
                        }


                        $(".academic-calendar-json" + calTableNumber).append("<tr><td>" + date +
                            "</td><td>" + finalWeekday +
                            "</td><td><p id='event-title'><a href='" + json.events[i].event.localist_url + "'>" +
                            json.events[i].event.title + "</a></p><p id='event-description'>" + json.events[i].event.description + "</p></td></tr>");

                    }

                }
            },
            error: function() {
                alert("Error");
            }
        });
    }

});
