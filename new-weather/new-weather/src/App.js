import React,{useState} from "react"
import './App.css';


function App() {

  const apiKey = "6b42ac7df85a4e3c6a182a15d6784e03"
  const {weatherData , setWeatherData} = useState([{}])
  const [city, setCity ] = useState("") 

  const getWeather = (event) => {
    if(event.key === "Enter"){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&units=metric&appid=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
          setCity("")
        }
      )
    }
  }

  return (
    <div className="container">
      <input
      className="input"
      placeholder="Enter Cite.."
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
      />


      
    </div>
  );
}

export default App;
