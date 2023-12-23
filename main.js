$(document).ready(() => {
    $('#emblem').fadeIn({easing: "linear"}, 2000);
    $('#warriorslogo').fadeIn(2000);
    //$('#FMAHeading').show("slide", {distance: 500}, 1750);
    //$('#EKAHeading').show("slide", {direction: "right", distance: 500}, 2000);
    $('#FMAHeading').show("drop", {direction: "up", distance: 500}, 1750);
    $('#EKAHeading').show("drop", {direction: "up", distance: 500}, 2000);
});

$('#warriorslogo').click(function() {
    $('#warriorslogo').fadeOut(1000);
    $('#warriorslogo').fadeIn(1000);
})

var today = new Date();
var hourNow = today.getHours();
var greeting = '';

if (hourNow > 18) {
    greeting ='Good evening';
} else if (hourNow > 12) {
    greeting = 'Good afternoon' 
} else if (hourNow > 0) {
    greeting = 'Good morning'
} else {
    greeting = 'Welcome';
}
    
document.getElementById("new").innerHTML = greeting;


