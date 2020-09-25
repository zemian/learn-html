console.log("script loading 2");

fetch("https://api.myjson.com/bins/gwp3s")
    .then(r=>r.json())
    .then(data => console.log("api fetch from script loading 2:", data));
