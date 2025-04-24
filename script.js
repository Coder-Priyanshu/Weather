const apiKey = '756c90af2ecbfb46359aa688faa420cf';
 // Replace with your OpenWeatherMap API key


 function getWeather() {
    const city = document.getElementById('city').value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then(data => {
        const temp = data.main.temp;
        const weather = data.weather[0].description;
        const name = data.name;
  
        document.getElementById('result').innerHTML = `
          <h2>Weather in ${name}</h2>
          <p>🌡️ Temperature: ${temp} °C</p>
          <p>☁️ Condition: ${weather}</p>
        `;
      })
      .catch(error => {
        document.getElementById('result').innerHTML = `<p style="color:red;">${error.message}</p>`;
      });
  }
  