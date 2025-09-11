import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({ info }) {
const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    
const HOT_URL="https://media.istockphoto.com/id/491701259/photo/blue-sky-with-sun.jpg?s=2048x2048&w=is&k=20&c=QzHOHq2uPaPeleoIbhQGf-B9pcTUN1o0MzFFQaXiVWY=";
const COLD_URL="https://images.unsplash.com/photo-1524175869111-19b0893d20b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const RAIN_URL="https://media.istockphoto.com/id/1476189983/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=2048x2048&w=is&k=20&c=VDCO8zfnJ9i5PdP5QRK35y2_Bu7xcUHHFFbL9GHqpco="
    return (
        <div className="infoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL: info.temp > 15 ? HOT_URL : COLD_URL}
                        title="Weather Background"
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{
                                info.humidity > 80 ? <ThunderstormIcon/>: info.temp > 15 ? <WbSunnyIcon/>: <AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Temperature Min: {info.tempMin}&deg;C</p>
                            <p>Temperature Max: {info.tempMax}&deg;C</p>
                            <p>Pressure: {info.pressure} hPa</p>
                            <p>
                                The weather can be described as <i><b>{info.weather}</b></i> and feels like {info.feelsLike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
