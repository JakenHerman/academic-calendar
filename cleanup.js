var a = $(".lwn0").text();

var rep = a.replace(a, a.split(' - ')[0]);
    $(".lwn0").text(rep);

if (a.substring(0, 3) == "Aug") {
    var replaced = $(".lwn0").html().replace('Aug', 'August');
    $(".lwn0").html(replaced);
}

else if (a.substring(0, 3) == "Sep") {
    var replaced = $(".lwn0").html().replace('Sep', 'September');
    $(".lwn0").html(replaced);
}

else if (a.substring(0, 3) == "Oct") {
    var replaced = $(".lwn0").html().replace('Oct', 'October');
    $(".lwn0").html(replaced);
}

else if (a.substring(0, 3) == "Nov") {
    var replaced = $(".lwn0").html().replace('Nov', 'November');
    $(".lwn0").html(replaced);
}

else if (a.substring(0, 3) == "Dec") {
    var replaced = $(".lwn0").html().replace('Dec', 'December');
    $(".lwn0").html(replaced);
}

else if (a.substring(0, 3) == "Jan") {
    var replaced = $(".lwn0").html().replace('Jan', 'January');
    $(".lwn0").html(replaced);
}

else if (a.substring(0, 3) == "Feb") {
    var replaced = $(".lwn0").html().replace('Feb', 'February');
    $(".lwn0").html(replaced);
}

else if (a.substring(0, 3) == "Mar") {
    var replaced = $(".lwn0").html().replace('Mar', 'March');
    $(".lwn0").html(replaced);
}

else if (a.substring(0, 3) == "Apr") {
    var replaced = $(".lwn0").html().replace('Apr', 'April');
    $(".lwn0").html(replaced);
}

//
//Dont need to do anything for May. YAY.
//

else if (a.substring(0, 3) == "Jun") {
    var replaced = $(".lwn0").html().replace('Jun', 'June');
    $(".lwn0").html(replaced);
}

else if (a.substring(0, 3) == "Jul") {
    var replaced = $(".lwn0").html().replace('Jul', 'July');
    $(".lwn0").html(replaced);
}
