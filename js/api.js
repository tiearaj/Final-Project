$(function (){
$.ajax({
  url: 'http://api.randomuser.me/?results=5',
  dataType: 'json',
  success: function(data){
    listPeople(data.results);
    console.log(data);
  }
});


function listPeople(data) {
  for(var i=0; i<data.length; i++){
    var person= data[i].user;
	var firstName = person.name.first;
	var lastName = person.name.last;
    var email= person.email;
	var number = person.phone;
	var address= person.location;
	var street= '<div class="address">' + address.street + '</br>' + address.city + ' ' + address.state + ',' + address.zip + '</div>';
    //var picture = person.picture.medium;
	var imgList= "";
	

    $('#photographers').append('<li>'+ imgList + '<img src= "' + person.picture.medium + '"></li>');
    $('.description').append('<div class="contact">'+'<h3>' + firstName + ' ' + lastName + '</h3>' + email + '<br>' + number + '</br>' + street + '</div>');

  }
}



});
