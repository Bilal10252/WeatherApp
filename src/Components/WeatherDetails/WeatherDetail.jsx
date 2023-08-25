import React from 'react'
import "./weatherDetail.css";


const WeatherDetail = ({data}) => {
  return (
    <div className='weatherBox'>
            <div className="top">
                <div className="topLeft">
                <p className="city">
                    {data.city}
                </p>
                <p className="cityWeather">
                    {data.weather[0].description}
                </p>
                </div>

                <div className="topRight">
                    <img src={`WeatherImages/${data.weather[0].icon}.png`} alt="" className='weatherImage'/>
                </div>
                
            </div>

            <div className="bottom">
                <p className='temp'>
                    {Math.round(data.main.temp)}°C
                </p>
                <div className="details">
                    <div className="parameter-row top">
                        <span className="paramter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="paramter-label">Feels Like</span>
                        <span className="paramter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="paramter-label">Wind</span>
                        <span className="paramter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="paramter-label">Humidity</span>
                        <span className="paramter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="paramter-label">Pressure</span>
                        <span className="paramter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default WeatherDetail
// ../../../assets/WeatherImages/${data.weather[0].icon}.png
// src\assets\WeatherImages