

function getCity(){
let inputParameter = document.getElementById("city-input").value;
console.log(inputParameter);

if(inputParameter==""){
    document.getElementById('alert-message').innerHTML = `Please enter a city!`;
}
else{
    document.getElementById('alert-message').innerHTML = "";
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${inputParameter}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5cccf9cae6msh536c02f833f40dcp11b911jsn08e09ff415a0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        if(response.ok){
            document.getElementById("temp").innerHTML = `<h5>${result.temp} °C</h5>`;
            document.getElementById("current-temp").innerHTML = `${result.temp} °C`;
            document.getElementById("humidity-value").innerHTML = `<h5>${result.humidity} %</h5>`
            document.getElementById("feels-like").innerHTML = `<h5>${result.feels_like} °C</h5>`;
            document.getElementById("cloudy-value").innerHTML = `<h5>${result.cloud_pct} </h5>`;
            document.getElementById("max-temp").innerHTML = `<h5>${result.max_temp} °C</h5>`;
            document.getElementById("min-temp").innerHTML = `<h5>${result.min_temp} °C</h5>`;
            document.getElementById("wind-degree").innerHTML = `<h5>${result.wind_degrees} Deg</h5>`;
            document.getElementById("wind-speed").innerHTML = `<h5>${result.wind_speed}</h5>`;
        } else{
            document.getElementById('alert-message').innerHTML = `Incorrect City Name`;
        }
    }
    catch (error) {
        console.error(error);
    }
}

fetchData();
updateTime();
}
}   


function updateTime(){
    let d  = new Date();

let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
let month = monthNames[d.getMonth()];
let  date =  d.getDate();
let year = d.getFullYear();
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = daysOfWeek[d.getDay()];
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
hours = hours ? hours : 12; 
document.getElementById("today-date").innerHTML = `${date} ${month} ${year}`;
document.getElementById("today-day").innerHTML = `${day} ${hours}:${minutes}  ${ampm}`;
}