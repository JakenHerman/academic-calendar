var paramString;
var rep; // This variable is used for replacing the caption to show correct semester title.
var weekdayMonth;
var currentYear;
var currentMonth;
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
var lowCaseSemester; //change selected semester to lower case.
var selectedYear; //check which year is selected by the user
var URLParams = {Sem: selectedSemester, Year: selectedYear};
var date;
var dateRange; //date range used for api calling
var weekday = new Array(7);
var defaultAutoSelectMonth;
var defaultAutoSelectYear;
var yearInt;
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

$(document).ready(function() {

  currentYear = (new Date).getFullYear();
  currentMonth = (new Date).getMonth();

  if ( (currentMonth == 0 ) || (currentMonth == 1) || (currentMonth == 9) || (currentMonth == 10) || (currentMonth == 11) ){
    defaultAutoSelectMonth = "Spring";
    $("#Semester").html("<option value='Fall'>Fall</option> "
                        + "<option value='Spring' selected>Spring</option> "
                        + "<option value='Summer'>Summer</option>");
  }

  else if ( (currentMonth == 2 ) || (currentMonth == 3) || (currentMonth == 4) || (currentMonth == 5)){
    defaultAutoSelectMonth = "Summer";
    $("#Semester").html("<option value='Fall'>Fall</option> "
                        + "<option value='Spring'>Spring</option> "
                        + "<option value='Summer' selected>Summer</option>");
  }

  else if ( (currentMonth == 6) || (currentMonth == 7) || (currentMonth == 8) ){
    defaultAutoSelectMonth = "Fall";
    $("#Semester").html("<option value='Fall' selected>Fall</option> "
                        + "<option value='Spring'>Spring</option> "
                        + "<option value='Summer'>Summer</option>");
  }

  function YearPlusOne(){
    $("#Year").html("<option value=" + (currentYear - 3).toString() + ">" + (currentYear - 3).toString() + "</option>"
                    + "<option value=" + (currentYear - 2).toString() + ">" + (currentYear - 2).toString() + "</option>"
                    + "<option value=" + (currentYear - 1).toString() + ">" + (currentYear - 1).toString() + "</option>"
                    + "<option value=" + (currentYear).toString() + ">" + (currentYear).toString() + "</option>"
                    + "<option value=" + (currentYear + 1).toString() + " selected >" + (currentYear + 1).toString() + "</option>"
                    + "<option value=" + (currentYear + 2).toString() + ">" + (currentYear + 2).toString() + "</option>"
                    + "<option value=" + (currentYear + 3).toString() + ">" + (currentYear + 3).toString() + "</option>");
  }

  function Year(){
    $("#Year").html("<option value=" + (currentYear - 3).toString() + ">" + (currentYear - 3).toString() + "</option>"
                    + "<option value=" + (currentYear - 2).toString() + ">" + (currentYear - 2).toString() + "</option>"
                    + "<option value=" + (currentYear - 1).toString() + ">" + (currentYear - 1).toString() + "</option>"
                    + "<option value=" + (currentYear).toString() + "selected >" + (currentYear).toString() + "</option>"
                    + "<option value=" + (currentYear + 1).toString() + ">" + (currentYear + 1).toString() + "</option>"
                    + "<option value=" + (currentYear + 2).toString() + ">" + (currentYear + 2).toString() + "</option>"
                    + "<option value=" + (currentYear + 3).toString() + ">" + (currentYear + 3).toString() + "</option>");
  }

  if (defaultAutoSelectMonth == "Spring"){
     if ((currentMonth == 0) || (currentMonth == 1)){
         YearPlusOne();
     }
     else {
          Year();
     }
  }
  else {
    Year();
  }

  selectedYear = $("#Year").find(":selected").text();
  selectedSemester = $("#Semester").find(":selected").text();

  $.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results == null){
         return null;
      }
      else{
         return results[1] || 0;
      }
  }

  var semParam = $.urlParam('Sem');
  var yearParam = $.urlParam('Year');

  if (semParam == "Spring" || semParam == "Fall" || semParam == "Summer"){
    $("#Semester").val(semParam);
    selectedSemester = semParam;
  }
  var linkSemester = selectedSemester;

  if ( !isNaN(yearParam) && yearParam ) {
  $("#Year").val(yearParam);
    selectedYear = yearParam;
  }

  if ((yearParam > (currentYear + 3)) || (yearParam < (currentYear - 3))){
    if (defaultAutoSelectMonth == "Spring"){
      yearParam = currentYear + 1;
      selectedYear = currentYear + 1;
      YearPlusOne();
    }
    else {
      semParam = selectedSemester;
      yearParam = currentYear;
      selectedYear = currentYear;
      Year();
    }
  }

  eventID = []; //clear the array. If array does not get cleared, if you click away from a semester, then click back - no events will appear.

    yearInt = parseInt(selectedYear);
    lowCaseSemester = selectedSemester.toLowerCase();

    //Old Semesters Redirect
    if (yearInt < 2016) {
      $(location).attr('href', 'http://www.shsu.edu/~reg_www/academic_calendar/index.php?semester=' + lowCaseSemester + '&year=' + yearParam + '&Submit=View+Calendar');
    }
    else {
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
    }

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

            checkEventIDArray();

        },
        error: function() {
            alert("Error");
        }
    });
}

function checkEventIDArray() {
  if (eventID.length == 0) {

    if (selectedSemester == "spring" || selectedSemester == "fall"){
      $('.academic-calendar-json').html("<h3>There are no events for " +
      selectedSemester.charAt(0).toUpperCase() + selectedSemester.slice(1) + " "
       + selectedYear + " at this time. Please check back at a later date.</h3>");
   }

   else {
     $('.academic-calendar-json').html("<h3>There are no events for Summer " + selectedYear +
     " at this time. Please check back at a later date. </h3>");
     $('.academic-calendar-json-two').html('');
     $('.body-text').html('');
   }

  }
}

  $("#cal-print").attr("href", "http://www.shsu.edu/dept/registrar/calendars/academic-calendar-print.html?Sem=" + linkSemester + "&Year=" + selectedYear);
});
