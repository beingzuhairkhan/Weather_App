import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function Weatherapp(){
    const [weatherinfo , setWeatherinfo] = useState({
       
            city: "Delhi",
            feelsLike:32.15,
            humidity: 22,
            temp: 33.99,
            tempmax: 33.99,
            tempmin: 31.94,
            weather: "smoke",
    
      
    });

    let updateInfo = (result) =>{
      setWeatherinfo(result);
    }
    return (
     <div style={{textAlign:"center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
         <InfoBox info={weatherinfo}/>
     </div>
   
    )
    
}