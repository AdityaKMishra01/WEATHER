const search = document.querySelector("input");
const searchBtn = document.querySelector(".search-city button");
const citys = document.querySelector(".text-dark h4");
const temperature = document.querySelector(".text-dark .my-3");
const feelsLike = document.querySelector(".text-dark .mb-2 strong");
const condition = document.querySelector(".text-dark h5");
const container = document.querySelector(".container");


const weatherApi = async () => {
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${search.value}&format=json&u=f`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ed2e825bc2msh35e4f09b2aa961ep1f0eb1jsn0b18be8675de',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

  const response = await fetch(url, options);
  console.log(response);
  const data = await response.json();
  console.log(data);
  //Displaying search city
  let city = data.location.city;
  let country = data.location.country; 
  citys.innerHTML = `${city},${country}`;
  //Displaying Temprature 
  let temp = data.current_observation.condition.temperature;
  temperature.innerHTML = `${temp}°F`;
  feelsLike.innerHTML = `Feels Like: ${temp}°F`;
  condition.innerHTML = data.current_observation.condition.text;

  //Background image
  if(temp >= 70){
    container.style.backgroundImage = "url('summer1.avif')";
    
  }
  else if(temp <= 30){
    container.style.backgroundImage = "url('winter.webp')";
    citys.style.color = 'white';
    temperature.style.color = 'white';
    condition.style.color = 'white';
    feelsLike.style.color = 'white';
  }
}
searchBtn.addEventListener("click", () => {
  weatherApi();
});