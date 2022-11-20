
const weatherApi ={
    key: "0e239b2215a1cfde6be7b3feb5d8d4a1",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}
const searchInputBox= document.getElementById("input-box");
searchInputBox.addEventListener('keypress', function(eventtass) {
    if(eventtass.keyCode == 13){
    console.log(searchInputBox.value);
    getweatherReport(searchInputBox.value);
    document.querySelector('.weather-body').style.display = "block";
}
});

function getweatherReport(city){
fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
.then(weather =>{
    return weather.json()
}).then(showWeatheReport);
}

function showWeatheReport(weather){
console.log(weather);
let city = document.getElementById("city");
city.innerText=`${weather.name},${weather.sys.country}`;
let temperature = document.getElementById("temp");
temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

let minMaxTemp = document.getElementById("min-max");

minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}°C(main) / ${Math.ceil(weather.main.temp_max)}°C(max)`;

let weatherType = document.getElementById("weather");
weatherType.innerText = `${weather.weather[0].main}`;

let dateS = document.getElementById("date");
let todayDate = new Date();
dateS.innerText = dateManage(todayDate)

if(weatherType.textContent == 'Haze'){
document.body.style.backgroundImage = "url('images/haze.jpg')"
}
else if(weatherType.textContent == 'Clear'){
document.body.style.backgroundImage = "url('images/clear.jpg')"
}
else if(weatherType.textContent == 'Rain'){
document.body.style.backgroundImage = "url('images/Rain.jpg')"
}
else if(weatherType.textContent == 'Thunderstrom'){
document.body.style.backgroundImage = "url('images/Thunderstrom.jpg')"
}
else if(weatherType.textContent == 'Clouds'){
document.body.style.backgroundImage = "url('images/Clouds.jpg')"
}
else if(weatherType.textContent == 'Snow'){
document.body.style.backgroundImage = "url('images/Snow.jpg')"
}
else if(weatherType.textContent == 'Drizzle'){
document.body.style.backgroundImage = "url('images/Drizzle.jpg')"
}
else if(weatherType.textContent == 'Mist'){
document.body.style.backgroundImage = "url('images/Mist.jpg')"
}
else if(weatherType.textContent == 'Smoke'){
    document.body.style.backgroundImage = "url('images/smoke2.jpg')"
}
}

function dateManage(dateArg){
let days = ["Sunday","Monday", "Tuesday", "Wednesday","Thrusday","Friday","Saturday"];

let months = ["January","February","March","April","May","June", "July","August","September","October","November","December"];

let year = dateArg.getFullYear();
let month = months[dateArg.getMonth()];
let date = dateArg.getDate();
let day = days[dateArg.getDay()];
return `${date} ${month} (${day}),${year}`;
}







