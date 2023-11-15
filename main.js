const API_KEY = "8f9306389cee3cfe10f23d76d4d28b64";
const cities = {
    London: {
        lat: "51.507351",
        lon: "-0.127758"
    },
    Eilat: {
        lat: "29.550360",
        lon: "34.952278"
    },
    NY: {
        lat: "40.712776",
        lon: "-74.005974"
    },
    Alaska: {
        lat: "64.200844",
        lon: "-149.493668"
    }
};


const main = document.getElementById("main");


const addCity = (weather) => {
    const div = document.createElement("div");
    div.className = "p-2 border card shadow m-5"
    div.dataset = 'data-aos="flip-up"';
    div.innerHTML = `
        <div class="p-4 d-flex justify-content-between">
            <div>
                <h2>${weather.name}</h2>
                <h6>${weather.weather[0].description}</h6>
            </div>
            <div>
                <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="">
            </div>
        </div>
        <div class="d-flex">
            <div class="p-4">
                <h6>טמפ' נמדדת</h6>
                <h3 dir="ltr">${weather.main.temp}°C</h3h>
            </div>
            <div class="p-4">
                <h6>טמפ' מורגשת</h6>
                <h3 dir="ltr">${weather.main.feels_like}°C</h3h>
            </div>
            <div class="p-4">
                <h6>לחות</h6>
                <h3>${weather.main.humidity}%</h3h>
            </div>
        </div>
    `
    main.append(div);
}


Object.keys(cities).map((city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cities[city].lat}&lon=${cities[city].lon}&units=metric&units=metric&lang=he&appid=${API_KEY}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            addCity(data);
        })
        .catch((err) => console.log(err));


});





