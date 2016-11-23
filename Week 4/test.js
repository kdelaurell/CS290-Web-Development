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
      req.open("POST", weatherload, false);
      req.send(null);
      console.log(JSON.parse(req.responseText));
      event.preventDefault();
    })
  }
