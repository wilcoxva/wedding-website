import photo from './photo.jpg';
import map from './map.png';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  const calculateTimeLeft = () => {

    const difference = +new Date(`05/07/2022`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
    
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  return (
    <div className="App">
      <header>
        <div className="nav">  
        </div>  
      </header>
      <body>
        <div className="container">
          <img src={photo} className="photo" alt="Virginia and Patrick" />
          <div className="inner-container">
            <h1>Save the Date</h1>
            <h2>May 7, 2022</h2>
            <h3>Nag's Head, North Carolina</h3>
            <h2>365 days away...</h2>
            <img src={map} alt="map" className="map"/>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
