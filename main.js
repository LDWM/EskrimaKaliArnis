$(document).ready(function(){
    $('#emblem').fadeIn('slow');


var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting ='Good evening';
} else if (hourNow > 12) {
    greeting = 'Good afternoon' 
} else if (hourNow > 0) {
    greeting = 'Good morning'
} else {
    greeting = 'Welcome';
};

var el = document.getElementById('new');
el.innerHTML = '<h2>' + greeting + '</h2>';
document.getElementById('new').getAttribute('class');
});
