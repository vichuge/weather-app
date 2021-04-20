import _ from 'lodash';

function component() {
    const p = document.getElementById('p');
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    p.appendChild(element);
}

component();