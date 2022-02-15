class Forecast {
    constructor() {
        this.key = "5W92XYxu5KrtxKPiKlA3vbHc6hmG6HCm";
     
        
    }
    async updateCity(city) {
        //get city key
       const cityDetails = await this.getCityData(city);
       console.log(cityDetails,'................')
       //get the current weather key
       const currentWeather = await this.getLocalData(cityDetails.Key);

       return {
           cityDetails , currentWeather
       }
   }
    async getCityData (city) {
        console.log(city)
        const req = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.key}&q=${city}`;

        const response = await fetch(req);
        const data =await response.json();
        console.log(data)
        return data[0]
    }
    async getLocalData(id) {
        const req = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${this.key}`
        const response = await fetch(req);
        const data = await response.json();
        
        console.log(data)
        return data
    }


}