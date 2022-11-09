import React, { useState } from "react";
import './Weather.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars, } from '@fortawesome/free-solid-svg-icons'
import moment from "moment";
import { List } from "../List";
import { Footer } from "./Footer";
import { Images } from "./img/Images";
import { Select } from "./Select";
import { Cities } from "../Uitility/Cities";
export function Weather() {
  const [data, setData] = useState({});
  const [todayWeather, setTodayWeather] = useState([]);
  const [colour, setcolour] = useState({backgroundColor:'#FBB47F'});
  const [Country, setCountry] = useState(Cities[1].name)

  function getData(latitude, longitude, Timezone) {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&hourly=temperature_2m,rain,showers,windspeed_180m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,precipitation_hours,windspeed_10m_max&current_weather=true&timezone=" + Timezone + "&past_days=1")
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
  }
  React.useEffect(() => {
    setTimeout(() => {
      getData(Cities[1].latitude, Cities[1].longitude, Cities[1].Timezone)
    },);
  }, []);

  function setsunset() {
    const today = moment();
    const sunset = data.daily.sunset.filter((item) => {
      return (today.format("L") == moment(item).format('L'))
    })
    console.log(sunset)
    const dates = moment(sunset[0]).format('HH:mm')
     console.log(dates)
    const time = moment().format('HH:mm')
     console.log(time)

    if (dates < time) {
      setcolour({
        backgroundImage: `url(${"./assects/images/night.png"})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat'
      })
    }
    else{
     setcolour({backgroundColor: '#FBB47F'})
    }
  }
  function handle(event) {
    const country = event.target.value;
    const city = Cities[country]
    console.log(city, country)
    getData(city.latitude, city.longitude, city.Timezone);
    setCountry(city.name);
  }
  React.useEffect(() => {
    if (Object.keys(data).length > 0) {
      const today = moment();
      const number = data.hourly.time.filter((item) => {
        return (today.format("L") == moment(item).format('L') && today.format("HH:mm") < moment(item).format('HH:mm'))
      })
      // console.log(number)
      setTodayWeather(number);
      setsunset();
    }
  }, [data]);

  console.log(data);
  if (Object.keys(data).length <= 0) {
    return <p>please wait</p>
  }
  return (
    <div id="wrapper" style={colour}>
      <div className="header">
        <FontAwesomeIcon className="bars" icon={faMagnifyingGlass} />
        <select className="form-select" aria-label="Default select example" onChange={handle} >
          <option selected >{Cities[1].name}</option>
          <Select />
        </select >
        <h2>Weather</h2>
        <FontAwesomeIcon className="bars" icon={faBars} />
      </div>
      <div className="section">
        <p className="heading">{Country}</p>
        <p className="Date">{moment().format('ddd,MMM DD')}</p>
        <div className="display">
          <div className="first-image">
            <div className="main-image">
              <Images data={data} />
            </div>
          </div>
          <div className="text">
            <h1 className='degree'>{data.current_weather.temperature + data.hourly_units.temperature_180m}</h1>
            <p className="season">Rainy</p>
          </div>
        </div>
        <List data={data} />
        <Footer {...data} time={todayWeather} />
      </div>
    </div>
  );
}