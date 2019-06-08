import React from 'react'

const Error = (props) => {
  const style = {
    margin: 20,
    display: 'flex',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    color: 'white',
    width: 250,
    height: 100
  }

  return (
    <div style={style}>
      <p> City Not Found </p>
    </div>
  )
}

export default Error
