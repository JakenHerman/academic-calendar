var rep;


$.ajax({
     url:"http://events.shsu.edu/api/2/events",
     dataType: 'jsonp',
     success:function(json){
        
         $(".academic-calendar-json").append("  <tr><td class='top'>Date</td><td class='top'>Day</td>" +
                                             "<td class='top'>Event</td></tr>");
         
         for(var i=0; i < json.events.length; i++) {
           $("event-div").append("" + json.events[i].event.title);          
           console.log(json.events[i].event.title);
           $(".academic-calendar-json").append("<tr><td>"+json.events[i].event.first_date + 
                                                "</td><td>"+json.events[i].event.first_date +
                                                "</td><td>"+json.events[i].event.title + "</td></tr>");

         }
      
     },
     error:function(){
         alert("Error");
     }      
});


$(".submit").click(function () {
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
