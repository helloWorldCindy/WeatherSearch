import React from 'react'
import SingleWeatherDisplay from './SingleWeatherDisplay'
import Switch from '@material-ui/core/Switch';

const WeatherDisplay = ({ data }) => {
  const styles = {
    mainStyle: {
      display: 'flex',
      flexDirection: 'column',
      width: 500,
      color: 'white'
    },
    divStyle: {
      display: 'flex',
      flexDirection: 'row'
    }   
  }
  const [fahrenheit, setTemp] = React.useState(false);
  
  return (
    <div style={styles.mainStyle}>
      <div style={styles.divStyle}>
        <div>°C</div>
        <Switch
          checked={fahrenheit}
          onChange={() => setTemp(!fahrenheit)}
          value="checkedB"
          color="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <div>°F</div>
      </div>
      <div style={styles.divStyle}>
        {
          data.map((item) => {
            return <SingleWeatherDisplay isFah={fahrenheit} key={item.apiName} {...item}/>
          })
        }
      </div>
    </div>
  )
}

export default WeatherDisplay
