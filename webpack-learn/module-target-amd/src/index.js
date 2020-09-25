import Greeter from "./greeter";

function component() {
    let foo = new Greeter('Webpack');

    const element = document.createElement('div');
    element.innerHTML = foo.greeting();
    return element;
}

document.body.appendChild(component());

