 function alertName() {
  alert("Lindsey");

  var firstName = prompt("What\'s your first name?");
  var lastName = prompt("What\'s your last name?");
  window.alert("Hi " + firstName + ' ' + lastName + " you are a beautiful unicorn!");
  var favoriteAnimal = prompt("What\'s your favorite animal?");
  window.alert("I would like to own a " + favoriteAnimal + " because they are awesome!");
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