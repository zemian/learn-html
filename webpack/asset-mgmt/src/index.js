import './main.css';
import Pic from './pic_trulli.jpg';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = ['Hello', 'webpack'].join(' ');
    element.classList.add('hello');

    const image = new Image();
    image.src = Pic;
    element.appendChild(image);

    return element;
}
document.body.appendChild(component());

