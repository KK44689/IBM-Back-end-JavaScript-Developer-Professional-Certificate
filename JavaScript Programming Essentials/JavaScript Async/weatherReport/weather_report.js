function showWeatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById("city").value;
    const apiKey = "2242fb410e615ebae8f137f7181a4434";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
}

document.getElementById("weatherForm").addEventListener('submit', showWeatherDetails);