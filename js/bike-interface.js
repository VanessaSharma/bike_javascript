var bike = require('./../js/bike.js').bikeModule;

$(document).ready(function(){
  var newbike = new Bike();

$("form").submit(function(event) {
  event.preventDefault();
  var title = $('#title').val();
  var description = $('#description').val();
  var image = $('#image').val();
  var lastSeen = $('#lastSeen').val();
  var model = $('#model').val();
}



  newBike.getBike(title, description, image, lastSeen, model);
