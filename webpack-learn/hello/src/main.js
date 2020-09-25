function component() {
    const element = document.createElement('div');
    element.innerHTML = foo.greeting();
    return element;
}

document.body.appendChild(component());
