import axios from "axios"
import { useState } from "react"


const CurrentWeather = () => {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState()


    const handleCity = (e) => {
    setCity(e.target.value)

}

const fetchWeather = async () => {
    try{
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q={city}&appid={"4d9308862722c612e4d63fe108ad10ae"}&units=metric')
        setWeather(response)
    }
    catch(error){
        console.log(error);
        
    }
}
const handleClick = () => {
    fetchWeather();
}
  return (
    <div>
        <input type="text" placeholder='Enter city name' value={city} onChange={handleCity} />
        <button onClick={handleClick}>Get Weather</button>
        {weather && <>
        <div>
            <h3>{weather.data.name}</h3>
            <p>Temperature is: {weather.data.main.temp}</p>
            <p>{weather.data.weather[0].description}</p>
        </div>
        </>
        }
    </div>
  )
}

export default CurrentWeather;