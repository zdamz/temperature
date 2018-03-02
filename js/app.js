// affichage de la date du jour
moment.locale("fr");
$("#jour").text(moment().format('LL'));
// initialisation jquery
$(document).ready(function(){
  $("#Valider").click(function(){

    // récupération d la ville entrée
    var city = $("#ville").val();
    console.log(city);
    if (city != '') {
      $.ajax({
        // récupération de l'api openweather  en appelant ajax via jquery
        url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=823a83cf247cdd9ade146e1512a88d70",
        type: "GET",
        dataType: "jsonp",
        // dans le cas de succès de la récupération; affichage des données météo correspondantes
        success: function(data) {
          $("#temp").html( parseInt(data.main.temp) + "°");
          $("#reste").html("temp.max:"+ data.main.temp_max+"°"+ "<br/> temp.min:"+ data.main.temp_min+"°"+"<br/> Pression:" + data.main.pressure+"hPa" + "<br/> Vitesse vent: " + data.wind.speed + "km/h" + "<br/> Humidité: "+ data.main.humidity +"%");
          $("#mapid").html("<iframe height='450' width='100%' frameborder='0' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBSFz0My4qAmKZTgMGd5hYGy8egXCuT8xI&q="+ city +"&zoom=12&maptype=satellite'></iframe>");// console.log(data)
          $("#latLong").html("latittude:" + data.coord.lat + " longitude:" + data.coord.lon);
        }
      })
    } else {
      $("#erreur").html('Vous devez entrer un nom de ville');
    }
  });
});
