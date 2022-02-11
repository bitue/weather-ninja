// grab the input field

const cityName = document.getElementById('city');     
const btn =document.getElementById('btn');
const template =document.getElementById('template');
const temp = document.getElementById('temp')


const updateUI =(data) => {

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



async function updataCity (city) {
    //get city key
    const cityDetails = await getData(city);

    //get the current weather key
    const currentWeather = await getCurrentLocation(cityDetails.Key);

    return {
        cityDetails , currentWeather
    }
}
btn.addEventListener('click', ()=> {
    console.log(cityName.value);
    const city = cityName.value;
    localStorage.setItem('city', city)

    updataCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))


})

if(localStorage.getItem('city')) {
    updataCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .then(err => console.log(err))
}