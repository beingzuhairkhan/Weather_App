import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './SearchBox.css'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){

    const img_URL = "https://tse1.mm.bing.net/th?id=OIP.qOHcbTpr_aUNobIQNFDlEQHaE3&pid=Api&P=0&h=180";
    const hot_URL = "https://tse2.mm.bing.net/th?id=OIP.3RmQxrvh5qvll4WzRs2qMAHaFj&pid=Api&P=0&h=180";
    const COLD_URL = "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
    const RAIN_URL = "https://tse4.mm.bing.net/th?id=OIP.nX5pnQxG3pc9ZHizFdW2SgHaEK&pid=Api&P=0&h=180";
    
    return (
        <div className="InfoBox">
           <br></br> <br></br>
            <div className='card-center'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp > 15 ? hot_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="span">
         {info.city}&nbsp;
         {info.humidity>80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <p>Temperature = {info.temp}&deg;C</p>
         <p>humidity = {info.humidity}&deg;C</p>
         <p>Max-Temperature = {info.tempmax}&deg;C</p>
         <p>Min-Temperature = {info.tempmin}&deg;C</p>
         <p>The weather can be describes as<i> {info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>

        </div>
    )
}