const locationText = document.getElementById("city");
const temperatureText = document.getElementById("temperature");
const weatherText = document.getElementById("weather-description");
const goButton = document.querySelector("button");

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
        temperatureText.textContent = data.main.temp + "°";
        weatherText.textContent = data.weather[0].description;
        console.log(data);
    })
    .catch(err => {
        console.log(err, "AHHHHHHHHHHHHHHHH")
        locationText.textContent = "Invalid City Name"
    })
});


//dark mode
let darkModeButton = document.querySelector('.fa-moon');
let lightModeButton = document.querySelector('.fa-sun');

darkModeButton.addEventListener('click', () => {
    document.body.style.backgroundColor = '#121212';
    document.querySelector('h1').style.color = "orange";
    document.querySelector('p').style.color = "black";
    document.querySelectorAll('p')[1].style.color = "black";
    document.querySelector('h3').style.color = "red";
})
lightModeButton.addEventListener('click', ()=>{
    document.body.style.backgroundColor = "#aec5eb";
    document.querySelector('h1').style.color = "#040f0f";
    document.querySelector('p').style.color = "whitesmoke";
    document.querySelectorAll('p')[1].style.color = "whitesmoke";
    document.querySelector('h3').style.color = "whitesmoke";
})