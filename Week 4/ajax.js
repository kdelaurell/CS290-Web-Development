
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
  document.getElementById('weathersubmit').addEventListener('click', function(event)
    {
      var req = new XMLHttpRequest();
      if(document.getElementById('zipcode').value != ''){
        var weatherloc = document.getElementById('zipcode').value;
        var weatherload = 'http://api.openweathermap.org/data/2.5/weather?zip=' + weatherloc + ',us&api=' + APIkey;
      }
      else{
        var weatherloc = document.getElementById('city').value;
        var weatherload = 'http://api.openweathermap.org/data/2.5/weather?q=' + weatherloc + ',us&api=' + APIkey;
      }
      req.open("POST", weatherload, true);
      req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
          var response = JSON.parse(req.responseText);
          console.log(response)
        } else {
          console.log("Error in network request: " + request.statusText);
      }});
      req.send(null);
      event.preventDefault();
    })
  }
