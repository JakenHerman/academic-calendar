var a = $(".lwn0").text();
var header = $(".semester-header").text();
var rep;

$( ".submit" ).click(function() {
    if($("#Semester").find(":selected").text() === "Fall" && $("#Year").find(":selected").text() === "2015"){
        rep = "Fall 2015 Semester";
        $(".semester-header").html(rep);
    }
   
    else if($("#Semester").find(":selected").text() === "Fall" && $("#Year").find(":selected").text() === "2016"){
        rep = "Fall 2016 Semester";
        $(".semester-header").html(rep);
    }
    
    else if($("#Semester").find(":selected").text() === "Fall" && $("#Year").find(":selected").text() === "2017"){
        rep = "Fall 2017 Semester";
        $(".semester-header").html(rep);
    }

    else if($("#Semester").find(":selected").text() === "Spring" && $("#Year").find(":selected").text() === "2015"){
        rep = "Spring 2015 Semester";
        $(".semester-header").html(rep);
    }
    
    else if($("#Semester").find(":selected").text() === "Spring" && $("#Year").find(":selected").text() === "2016"){
        rep = "Spring 2016 Semester";
        $(".semester-header").html(rep);
    }    
    
    else if($("#Semester").find(":selected").text() === "Spring" && $("#Year").find(":selected").text() === "2017"){
        rep = "Spring 2017 Semester";
        $(".semester-header").html(rep);
    }    
    
    else if($("#Semester").find(":selected").text() === "Summer"&& $("#Year").find(":selected").text() === "2015"){
        rep = "Summer 2015 Semester";
        $(".semester-header").html(rep);
    }
    
    else if($("#Semester").find(":selected").text() === "Summer"&& $("#Year").find(":selected").text() === "2016"){
        rep = "Summer 2016 Semester";
        $(".semester-header").html(rep);
    }    
   
    else if($("#Semester").find(":selected").text() === "Summer"&& $("#Year").find(":selected").text() === "2017"){
        rep = "Summer 2017 Semester";
        $(".semester-header").html(rep);
    }    
});



$(".lwn0").css({
    "float":"left"   
});

var json = $.getJSON("https://events.shsu.edu/api/2/events");

if(json.event.first_date === "2015-06-02"){
      $(".json-obj-fd").html(rep);
}

