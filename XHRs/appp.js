const req = new XMLHttpRequest();

req.onload = function () {
    console.log("Loaded successfully");
    const data = JSON.parse(this.responseText);
    console.log(data);
}

req.onerror = function () {
    console.log("Error");
    console.log(this);
}

req.open("GET", "http://swapi.dev/api/people/1");
req.send();