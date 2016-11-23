var APIkey = null;
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
  document.getElementById('weathersubmit').addEventListener('click', function(event)
    {
      var req = new XMLHttpRequest();
      if(document.getElementById('zipcode').value != ''){
        var weatherloc = document.getElementById('zipcode').value;
        var weatherload = 'http://api.openweathermap.org/data/2.5/weather?zip=' + weatherloc + ',us&appid=fa7d80c48643dfadde2cced1b1be6ca1';
      }
      else{
        var weatherloc = document.getElementById('city').value;
        var weatherload = 'http://api.openweathermap.org/data/2.5/weather?q=' + weatherloc + ',us&appid=fa7d80c48643dfadde2cced1b1be6ca1';
      }
      req.open("POST", weatherload, true);
      req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
          var response = JSON.parse(req.responseText);
          document.getElementById('cityinfo').textContent = response.name;
          document.getElementById('pressureinfo').textContent = response.main.pressure;
          document.getElementById('tempinfo').textContent = response.main.temp;
          document.getElementById('humidityinfo').textContent = response.main.humidity;
        } else {
          console.log("Error in network request: " + request.statusText);
      }});
      req.send(null);
      event.preventDefault();
    })
  }
