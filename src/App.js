import React from 'react';
import Main from './components/Main'
import BackgroundImage from './Img/background.jpg'
import './App.css'

function App() {
  const style = {
    backgroundImage: 'url(' + BackgroundImage +')',
    width: '100%',
    height: '850px'
  }
  return (
    <div style={style}>
      <Main />
    </div>
  );
}

export default App;
