import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const increaseSize = () => {
    setWidth(width + 2);
    setHeight(height + 2);
  };
  return (
    <div id="main">
      <img src={star}  height={height + 'px'} width={width + 'px'} onClick={increaseSize} />
    </div>
  )
}


export default App;
