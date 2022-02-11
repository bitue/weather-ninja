


const api="5W92XYxu5KrtxKPiKlA3vbHc6hmG6HCm";

//get current location data 
async function getCurrentLocation (id) {
    const req = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${api}`
    const response = await fetch(req);
    const data = await response.json();
    
    console.log(data)
    return data
}
//get city data
async function getData (city) {
    const req = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${api}&q=${city}`;

    const response = await fetch(req);
    const data =await response.json();
    console.log(data)
    return data[0]

}

// getData('dhaka')
// .then(data =>{
//     return getCurrentLocation(data[0].Key)
// }).then(data => console.log(data))
// .catch(err => console.log(err))
