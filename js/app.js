moment.locale("fr");
$("#jour").text(moment().format('LL'));

$(document).ready(function(){
  $("#Valider").click(function(){


    var city = $("#ville").val();
    console.log(city);
    if (city != '') {
      $.ajax({

        url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=823a83cf247cdd9ade146e1512a88d70",
        type: "GET",
        dataType: "jsonp",
        success: function(data) {
          $("#temp").html( parseInt(data.main.temp) + "°")
          $("#reste").html("temp.max:"+ data.main.temp_max+"°"+ "<br/> temp.min:"+ data.main.temp_min+"°"+"<br/> Pression:" + data.main.pressure+"hPa" + "<br/> Vitesse du vent: " + data.wind.speed + "km/h" + "<br/> Humidité: "+ data.main.humidity +"%")
          $("#mapid").html("<iframe height='450' width='100%' frameborder='0' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBSFz0My4qAmKZTgMGd5hYGy8egXCuT8xI&q="+ city +"&zoom=12&maptype=satellite'></iframe>");// console.log(data)
        }
        // console.log($("#mapid").html("<iframe>width='600' height='450'frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyDSnzCZZF-O3rpnlvJEJeJgsVbph2w8kjQ&q="+ city + "allowfullscreen></iframe>"));

      })

    } else {
      $("#erreur").html('Vous devez entrer un nom de ville');
    }
  });
});
