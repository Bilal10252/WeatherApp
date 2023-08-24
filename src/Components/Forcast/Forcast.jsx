import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import "./Forcast.css";

const Forcast = ({data}) => {

    let daysInAWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let date = new Date();
    let today = date.getDay();
    
    let forcastArrayFirstHalf = daysInAWeek.slice(today, daysInAWeek.length);
    let forcastArray = forcastArrayFirstHalf.concat(daysInAWeek.slice(0,today));



  return (
    <>
    <h3 className='title'>Daily</h3>
        <Accordion allowZeroExpanded>
            {data.list.slice(0,7).map((item,index) => (
                 <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'> 
                                    <img src={`WeatherImages/${item.weather[0].icon}.png`} alt="" className='accordion-weather-icon'/>
                                    <label className='day'>{forcastArray[index]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='min-max'>{Math.round(item.main.temp_min)} °C / {Math.round(item.main.temp_max)} °C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className="grid">
                                <div className="item-details">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>

                                <div className="item-details">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity} %</label>
                                </div>

                                <div className="item-details">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all} %</label>
                                </div>

                                <div className="item-details">
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed} ms</label>
                                </div>

                                <div className="item-details">
                                    <label>Sea level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>

                                <div className="item-details">
                                    <label>Feels Like</label>
                                    <label>{item.main.feels_like} °C</label>
                                </div>

                                

                            </div>
                        </AccordionItemPanel>
                 </AccordionItem> 
))}
              
        </Accordion>    
    </>
  ) 
}

export default Forcast


