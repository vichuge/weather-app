import './style.css';
import _ from 'lodash';

function component() {
    const p = document.getElementById('p');
    p.innerHTML = 'hello there';
    console.log('hihi!');
    // https://rickandmortyapi.com/api/character/22
    getRick();
}

async function getRick() {
    const response = await fetch('https://rickandmortyapi.com/api/character/22', {mode: 'cors'});
    const rickData = await response.json();
    console.log(rickData);
}

component();