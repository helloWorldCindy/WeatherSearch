import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Input } from 'antd';
import CustomizeTextField from './CustomizeTextField'

const InputForm = (props) => {
  const styles = {
    mainStyle: {
      marginTop: '5%',
      display: 'flex',
      flexDirection: 'column'
    },
    titleStyle: {
      fontSize: 60,
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold'
    },
    inputStyle: {
      display: 'flex',
      justifyContent: 'center'
    },
    buttonStyle: {
      marginTop: "4%",
      height: 50
    }
  }

  const [values, setValues] = React.useState({
    city: "",
    country: "",
  })

  const [errorTextForCity, setsCityTexts] = React.useState("")

  const handleTextChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
    if (values.city !== "") setsCityTexts("")
  }

  const handleButtonClick = () => {
    if (!values.city) {
      setsCityTexts("City is required")
    }
    else{
      props.onSearch(values.city)
    }
  }

  const handleEnterPress = event => {
    if(event.key === 'Enter') {
      handleButtonClick()
    }
  }
  
  return (
    <div style={styles.mainStyle}>
        <p style={styles.titleStyle}> Weather Search</p>
        <div style={styles.inputStyle}>
          <CustomizeTextField
            error={!!errorTextForCity}
            id="city"
            label="Enter city here"
            style={{margin: 10}}
            onKeyDown={handleEnterPress}
            helperText={errorTextForCity}
            onChange={handleTextChange('city')}
          />
          <Button style={styles.buttonStyle} variant="contained" color="primary" onClick={handleButtonClick}>Search</Button>
        </div>
    </div>
  )
}

export default InputForm
