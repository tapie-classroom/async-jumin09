const url = "https://api.openweathermap.org/data/2.5/weather?lat=37.5326&lon=126.9906&appid=1678d5fbe5655c5df4baca85f98cc3ed&units=metric&lang=kr";
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let weather = data.weather[0].description;
    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;

    document.getElementById("weather").innerHTML = "날씨: " + weather;
    document.getElementById("temp").innerHTML = "온도: " + temp + "°C";
    document.getElementById("humidity").innerHTML = "습도: " + humidity + "%";
    document.getElementById("wind").innerHTML = "바람: " + wind + " m/s";
  });
