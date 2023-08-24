import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import {geoLocationUrl, geoLocationOptions} from "../../api.js"; 
import logo from "../../../public/WeatherImages/02d.png"
import "./Search.css";

const Search = ({handleSearch}) => {
  let [search, setSearch] = useState(null);

  <img src={logo} alt="" />

  let loadOptions = async (inputValue) => {
    try {
      const response = await fetch(`${geoLocationUrl}cities?namePrefix=${inputValue}&minPopulation=${100000}`, geoLocationOptions);
      const {data} = await response.json();


      return (
       
        {
        options: data.map(city => {
          return ({
            
            value:`${city.latitude} ${city.longitude}`,
            label:`${city.name}, ${city.countryCode}`
            
          })
        })
      })

      
    } catch (error) {
      console.error(error);
    }
  }


  let handleChange = (search) => {
    setSearch(search);
    handleSearch(search);
  }
  return <div className='search'>
    <img src={logo} alt="" className='logo'/>
   <AsyncPaginate 
    placeholder="Search for city" 
    debounceTimeout={600} 
    onChange={handleChange} 
    loadOptions={loadOptions}
    value={search}
    className='searchbar'
    
    ></AsyncPaginate>    
  
  </div>
} 

export default Search

