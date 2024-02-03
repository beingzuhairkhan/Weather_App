import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){

    let [city , setCity] = useState("");
    let [error , setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "3b748ca7a1715182f5a47362426ebc79";

    let getWeatherInfo = async () =>{
        try{
            let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse =  await response.json();
         
            let result = {
              city:city,
              temp:jsonResponse.main.temp,
              tempmin:jsonResponse.main.temp_min,
              tempmax:jsonResponse.main.temp_max,
              humidity:jsonResponse.main.humidity,
              feelsLike:jsonResponse.main.feels_like,
              weather:jsonResponse.weather[0].description,
            };
            console.log(result);
            return result ;

        }catch(err){
           throw error ;
        }
     
    }
  
    let handle = (event) =>{
     setCity(event.target.value)
    }
    let handleSubmit = async (event) =>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
         let info =  await  getWeatherInfo();
         updateInfo(info);
        }catch(err){
            setError(true);
        }
        
    }
    return(
       <div className='SearchBox'>
      
        <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handle} />
        <br></br><br></br><br></br>
        <Button variant="contained" type='submit' >Search
      </Button>
      {error && <p style={{color:"red"}}>No such Place exits !</p>}
      </form>

       </div>
    )
    
}