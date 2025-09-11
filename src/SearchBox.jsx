import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let URL_API = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "9427416c54a3c35dfd3eee7097693d6b";

    let getweatherInfo = async () => {
        try {
            let response = await fetch(`${URL_API}?q=${city} &appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result
        } catch (err) {
            throw err
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getweatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }

    }
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                 
                /><br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{ color: "red" }}>No Such Place exist!</p>}
            </form>
        </div>
    )

}