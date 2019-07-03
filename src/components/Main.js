import React, {useState} from 'react';
import InputForm from './InputForm'
import WeatherDisplay from './WeatherDisplay'
import moment from 'moment'
import Error from './Error'
import {openMapWeatherKey , apixuKey} from '../api_key'

const Main = (props) => {

  const [data, setData] = useState([]);

  const [error, setError] = useState(false);

  const style = {
      mainStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }
  }

  const handleSearch = (city, country) => {
    fetchAllWeather(city, country)
  }

  const computTime = () => {
    let today = new Date()
    let date = moment().add(today.getDay(), 'days').calendar()
    return date
  }
  const parseOpenMapWeather = (json, apiName) => {
    return {
      tempC: json.main.temp,
      tempF: celsiusToFahrenheit(json.main.temp),
      description: json.weather[0].description,
      iconCode: json.weather[0].id.toString(),
      iconUrl: null,
      city: json.name,
      time: computTime(),
      apiName: apiName
    }
  }

  const parseApixu = (json, apiName) => {
    return {
      tempC: json.current.temp_c,
      tempF: json.current.temp_f,
      description: json.current.condition.text,
      iconCode: json.current.condition.code.toString(),
      iconUrl: "https:" + json.current.condition.icon,
      city: json.location.name,
      time: computTime(),
      apiName: apiName
    }
  }

  const celsiusToFahrenheit = (temp) => {
    let num = (temp*1.8)+32
    return num.toFixed(2)
  }

  const fetchAllWeather = async (city, country) => {
    const api_call_arr = [
      {
        name: "OpenMapWeather",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openMapWeatherKey}&units=metric`,
        parseFunc: parseOpenMapWeather
      },
      {
        name: "Apixu",
        url: `https://api.apixu.com/v1/current.json?key=${apixuKey}&q=${city}`,
        parseFunc: parseApixu
      }
    ]

    const promises = api_call_arr.map(async (item) => {
      const result = await fetch(item.url)
      if (!result.ok) {
        setError(true)
        
        return null
      }
      const json = await result.json()
      if (item.name === "OpenMapWeather") return parseOpenMapWeather(json, item.name)
      else return parseApixu(json, item.name)
    })

    try {
      setError(false)
      const results = await Promise.all(promises)
      if (!results[0]) setData([])
      else setData(results)
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }

  return (
    <div style={style.mainStyle}>
      <InputForm onSearch={handleSearch}/>
      {error ? <Error /> : ( data.length > 0 && <WeatherDisplay data={data} />)}
    </div>
  )
}

export default Main
