var apiKey = require('./../.env').apiKey;

function Bike() {

}

Bike.prototype.getMap = function() {
  $.get('https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=initMap').then(function(response) {
      displayColor(bike, response.main.color);
      displayModel(bike, response.main.model);
    }).fail(function(error) {
  $('#error').text(error.responseJSON.message);
  });
};

Bike.prototype.getBike = function(make, color) {
    $.get('https://bikeindex.org/api/v2/bikes_search?page=1&per_page=10&colors='+color+'&manufacturer='+make).then(function(response) {
    console.log(response);
    for (var bike of response.bikes) {
      console.log(bike);
      var title = bike.title;
      var thumblink;
      if (bike.thumb === null) {
        thumblink = '<img class="img" src="/img/icon.png" alt="pic of bike" />';
      } else {
        thumblink ='<img class="img" src="'+bike.thumb+'" alt="pic of bike" />';
      }

      $('.showBikes').append('<div class="bike col-sm-4 col-sm-offset-6">' +
      '<h4>'+title+'</h4>'+
      thumblink +
      '</div>');
    }
  }).fail(function(error) {
    $('.bikeObject').text(error);
  });
};



Bike.prototype.getMaps = function(){
  var newScript = document.createElement("script");
  newScript.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap";

  var placeholder = document.getElementById("placeholder");
  document.body.insertBefore(newScript, placeholder);
};



exports.bikeModule = Bike;
