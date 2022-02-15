// grab the input field

const cityName = document.getElementById('city');     
const btn =document.getElementById('btn');
const template =document.getElementById('template');
const temp = document.getElementById('temp');
const forecast = new Forecast()


const updateUI =(data) => {
    console.log(data,';;;;;;;;;;;;;;;;;;;;;')
    const cityDetails = data.cityDetails ;
    const weather = data.currentWeather ;
  
    console.log(cityDetails,'city details');
    console.log(weather, 'weather')
    template.innerHTML =`
        <h1 class="text-2xl  ">City Name: ${cityDetails.EnglishName} </h1>
        <h1 class="text-2xl "> Temperature :${weather[0].Temperature.Metric.Value} ${weather[0].Temperature.Metric.Unit}</h1>
        <p class="">${weather[0].WeatherText} </p>
    
    
    `

    if(temp.classList.contains('hidden')) {
        temp.classList.remove('hidden')
    }



}



btn.addEventListener('click', ()=> {
    console.log(cityName.value);
    const city = cityName.value;
    console.log(city)
    localStorage.setItem('city', city)

    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))


})

if(localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .then(err => console.log(err))
}