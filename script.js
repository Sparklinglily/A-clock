
function timeFunct(){

var dateAndTime= new Date();
var hour = dateAndTime.getHours();
var minutes = dateAndTime.getMinutes();
var seconds = dateAndTime.getSeconds();


document.querySelector('.time').innerHTML =    hour + ' : ' + minutes + ' : ' + seconds;


}
 var timer =  setInterval(timeFunct,1000);