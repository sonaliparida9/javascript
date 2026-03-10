// Build a small weather dashboard that fetches current weather dataform any public weather API(such as OpenWeather)
// You must make the API request asyncronously using fetch with async/await.
// If the API request fails(for example, due to an invalid city name),you must handle the error using try/catch.
// Additionally,create and throw custom errors based on weather conditions.
// for example:
// If the temperature is extremely high or extremely low, throwerroe and handle it properly in your code 


// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`


async function getWeather(city){
   try{
     let apikey = `d515eca08e20ef0a81e54a597da1a8fe`;

   let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)

   if(!raw.ok){
    throw new Error("City not found, try something else")
   }

   let real = await raw.json()
   if(real.main.temp < 0 ){
    console.warn(`Too Cold out there... ${real.main.temp}c`);
   }
   else if(real.main.temp > 40){
    console.log(`Too Hot out there... ${real.main.temp}`);
   }else{
    console.log(real);
   }

   }catch(err){
    console.error(err.message);
   }
}

getWeather("Leh");