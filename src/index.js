import './style.css';

async function getWeather() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=c6f720738d4ba0af3722fd5e0551d616&units=metric');
    const wData = await response.json();
    console.log(wData);
    console.log(wData.name);
    console.log(wData.main.temp);

    const myCity = document.getElementById('myCity');
    myCity.innerHTML = wData.name;
    const w = document.getElementById('w');
    w.innerHTML = `${wData.main.temp} °C`;
}

getWeather();