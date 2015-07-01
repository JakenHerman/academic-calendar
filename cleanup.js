var a = $(".lwn0").text();
a = a.split('-')[0];

console.log(a);

if (a.substring(0, 3) == "Jul") {
    var replaced = $(".lwn0").html().replace('Jul', 'July');
    $(".lwn0").html(replaced);
} else if ($("a:contains('Sep')")) {
    var sepReplace = $(".lwn0").html().replace('Sep', 'September');
    $(".lwn0").html(sepReplace);
}
