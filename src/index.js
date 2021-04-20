import './style.css';
import _ from 'lodash';

function component() {
    const p = document.getElementById('p');
    p.innerHTML = 'hello there';
    getWeather();
}

async function getWeather() {
    // c6f720738d4ba0af3722fd5e0551d616
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=c6f720738d4ba0af3722fd5e0551d616', { mode: 'cors' });
    const wData = await response.json();
    console.log(wData);
}

component();