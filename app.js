const locationText = document.querySelector(".city-location");
const temperatureText = document.querySelector(".temperature");
const weatherText = document.querySelector(".description");
const goButton = document.querySelector("button");

const maxTemp = document.querySelector('.max-max');
const minTemp = document.querySelector('.min-min');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humid-humid');
const wind = document.querySelector('.wind-wind');

const weatherCard = document.querySelector('.card-content');

let query = document.getElementById("search");

let searchQuery;

const API_KEY = "5657cf485804283fce2c14e41982ab6e";

//get weather

goButton.addEventListener('click', async () => {
    searchQuery = query.value;
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery} &appid=${API_KEY}&units=imperial`)
    .then(response => 
        response.json()
    )
    .then(data =>{
        locationText.textContent = data.name;
        temperatureText.textContent = data.main.temp + "°F";
        feelsLike.textContent = data.main.feels_like + "°F";
        humidity.textContent = data.main.humidity + "%";
        maxTemp.textContent = data.main.temp_max + "°F";
        minTemp.textContent = data.main.temp_min + "°F";
        wind.textContent = data.wind.speed + "mph";

        weatherText.textContent = data.weather[0].description;
        weatherCard.style.display = 'grid';

        console.log(data);
    })
    .catch(err => {
        console.log(err, "AHHHHHHHHHHHHHHHH")
        locationText.textContent = "Invalid City Name"
    })
});

//night mode

const nightButton = document.querySelector('.fa-moon');
const lightButton = document.querySelector('.fa-sun');

nightButton.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('images/henning-witzel-ukvgqriuOgo-unsplash.jpg')";
})


lightButton.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('images/pedro-lastra-Nyvq2juw4_o-unsplash.jpg')";
})

