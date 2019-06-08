import React from 'react';
import WeatherIcon from 'react-icons-weather';

const SingleWeatherDisplay = (props) => {
  const styles = {
    mainStyle: {
      margin: 20,
      display: 'flex',
      padding: 20,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      width: '100%',
      height: 250
    },
    apiNameStyle: {
      marginBottom: '10%',
      fontSize: 20,
      fontWeight: 'bold'
    },
    cityStyle: {
      fontSize: 25,
      marginTop: -10,
      marginBottom: 5
    },
    tempIconStyle: {
      display: 'flex',
      marginTop:10,
      marginBottom: 5
    },
    imageIconStyle: {
      width: 48,
      height: 50
    },
    weatherIconStyle: {
      fontSize: 35
    }
  }
  
  return (
    <div style={styles.mainStyle}>
      <div style={styles.apiNameStyle}> {props.apiName} </div>
      <div style={styles.cityStyle}> {props.city} </div>
      <div>{props.time}</div>
      <div> {props.description} </div>
      <div style={styles.tempIconStyle}>
        {props.iconUrl ? 
          <img alt="weather icon" src={props.iconUrl} style={styles.imageIconStyle}/>
            : <WeatherIcon name="owm" iconId={props.iconCode} flip="horizontal" rotate="90" style={styles.weatherIconStyle}/>}
        <div style={{marginLeft: 10, fontSize: 15}}> 
          {props.isFah ? props.tempF + "°F" : props.tempC + "°C"}
        </div>
      </div>
    </div>
  )
}

export default SingleWeatherDisplay
