// 6b12ec16ef7bb1cbae51fd73ee4d5326

const param = {
  "url": "https://api.openweathermap.org/data/2.5/",
  "appid" : "6b12ec16ef7bb1cbae51fd73ee4d5326"
}
// fetch('https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=6b12ec16ef7bb1cbae51fd73ee4d5326')

let errorText = document.querySelector('.error');
let weather = document.querySelector('.weather');

function getWaether() {
  let inputCity = document.querySelector('.inputCity').value
  fetch (`${param.url}weather?q=${inputCity}&appid=${param.appid}`)
  .then(response => {
    if (response.status === 404) {
      errorText.style.display = "block";
      weather.style.display = "none";
    } else {
      errorText.style.display = "none"
      return response.json();
    }
  }) .then (showWaether);
}

function showWaether(data){
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273) + "&#8451" ;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  
    if (data.weather[0].main == "Clear") {
            weatherIcon.className = "fa-solid fa-sun";
          } else if (data.weather[0].main == "Rain") {
            weatherIcon.className = "fa-solid fa-cloud-rain";
          } else if (data.weather[0].main == "Mist") {
            weatherIcon.className = "fa-solid fa-cloud-mist";
          } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.className = "fa-solid fa-cloud-drizzle";
          }
  };
  
  // document.querySelector('.inputCity').onchange = () => {
  //   weather.style.display = 'block';
  //   getWaether();
  // }

  document.querySelector('.inputCity').addEventListener("change" , () =>{
    weather.style.display = 'block';
    getWaether();
  });

