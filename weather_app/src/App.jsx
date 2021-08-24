import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});

  const fetchData = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=e10ac8691aa141f7bdb72321212408&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlaceData(data);
      });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 form">
            <input
              type="text"
              value={place}
              placeholder="Enter City Name"
              onChange={(e) => setPlace(e.target.value)}
            />
            <button className="btn btn-primary" onClick={fetchData}>
              Submit
            </button>
          </div>
          <div className="offset-md-4 col-12 col-md-4 weather">
            <div className="card">
              {placeData.location ? (
                <div>
                  <img src={placeData.current.condition.icon} />
                  <h2>{placeData.location.name}</h2>
                  <h2>{placeData.location.region}</h2>
                  <h2>{placeData.location.country}</h2>
                </div>
              ) : (
                <h2>Place Not Found</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
