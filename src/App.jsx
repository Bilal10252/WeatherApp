import { useState } from 'react';
import './App.css'
import Search from './Components/Search/Search'
import WeatherDetail from './Components/WeatherDetails/WeatherDetail';
import { weatherApiKey , weatherUrl} from './api';
import Forcast from './Components/Forcast/Forcast';
function App() {


  let [weatherData, setWeatherData] = useState(null);
  let [weatherForcast, setWeatherForcast] = useState(null);

  let handleSearchTerm = (search) => {
    let [latitude, longitude]= search.value.split(" ");
    

    let weatherDataFetch=  fetch(`${weatherUrl}weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=metric`);
    let weatherForcastFetch=  fetch(`${weatherUrl}forecast?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=metric`);
  

    Promise.all([weatherDataFetch, weatherForcastFetch]).then(async (response) => {

      let weatherDataResponse = await response[0].json();
      let weatherForcastResponse = await response[1].json();
      setWeatherData({city: search.label, ...weatherDataResponse});
      setWeatherForcast({city: search.label, ...weatherForcastResponse});
      

    }).catch((error) => {
      console.log(error)
    });

    
    
  }
  console.log(weatherData);
  console.log(weatherForcast);
  


  return (

    <div className='container'>
      <Search name={"Bilal"} handleSearch={handleSearchTerm}></Search>
      {weatherData && <WeatherDetail data={weatherData}></WeatherDetail>}
      {weatherForcast && <Forcast data={weatherForcast}></Forcast>}
    </div>
    
  )
}

export default App
