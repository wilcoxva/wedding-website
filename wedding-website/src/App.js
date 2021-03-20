import './App.css';

function App() {
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
