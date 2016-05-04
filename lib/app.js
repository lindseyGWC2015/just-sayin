 function alertName() {

  var firstName = prompt("What\'s your first name?");
  var lastName = prompt("What\'s your last name?");
  window.alert("Hi " + firstName + ' ' + lastName + " you are a beautiful unicorn!");

  $(".alert-name").show();
 }



 function actualGame() {

 }

 function gameComplete() {

  $(".game-intro").hide();
 }

 function mainAlert() {

  $(".main-alert").hide();
 }




 new WOW().init();


 var count = 0

 function mainAlert() {

  var name = $('#name').val();

  alert(name + ", you're a beautiful unicorn!");

  count++;

  $('#countAlert').show();

  $('#countAlert 3number').text(count);

 }
 var name = $('#name').val();

 var count = 0;

 function alertCount() {
  count = count + 1; //if we used 'var count' here it would get reset each time
  alert("Times alerted: " + count);
 }
 alertCount(); //alerts 1
 alertCount(); //alerts 2
 
 
 var animals = ["horse","turtle","giraffe"]; //create an array
var firstAnimal = animals[0]; //get the first item. arrays start counting at 0 
var secondAnimal = animals[1];
var totalAnimals= animals.length; //gets 3
var lastAnimal = animals[animals.length]; //we have to subtract 1 here (since starts from 0)
var randomAnimal = animals[Math.floor(Math.random() * (animals.length-1))]; //gets a random fruit


//-----ask about-----var randomFruit = fruits[Math.floor(Math.random() * (fruits.length-1))]; //gets a random fruit


setTimeout(function(){

	//replace this alert with your code to be done after the timer is up!!!
	alert(“it’s been 5 seconds!”);

},5000); //wait 5000 = 5 seconds, you can change to whatever!
