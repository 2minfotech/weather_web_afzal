import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './Header.css';
import { Section } from "./Section";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import moment from "moment";

export function Header() {
    const [data, setData] = useState({});
    const [todayWeather, setTodayWeather] = useState([]);
    const [colour, setcolour] = useState({ backgroundColor: '#FBB47F' });
    function getData() {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=26.89&longitude=75.74&hourly=temperature_2m,rain,showers,windspeed_180m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,precipitation_hours,windspeed_10m_max&current_weather=true&timezone=Asia%2FKolkata&past_days=1")
            .then(res => res.json())
            .then(res => {
                setData(res);
            })
    }
    React.useEffect(() => {
        setTimeout(() => {
            getData();
        },);
    }, []);
    function setsunset() {
        const today = moment();
        const sunset = data.daily.sunset.filter((item) => {
            return (today.format("L") == moment(item).format('L'))
        })
        //console.log(sunset)
        const dates = moment(sunset[0]).format('HH:mm')
        //console.log(dates)

        const time = moment().format('HH:mm')
        // console.log(time)

        if (dates < time) {
            setcolour({
                backgroundImage: `url(${"./assects/images/night.png"})`,
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat',

            })
        }
    }

    React.useEffect(() => {
        if (Object.keys(data).length > 0) {
            const today = moment();
            const number = data.hourly.time.filter((item) => {
                return (today.format("L") == moment(item).format('L') && today.format("HH:mm") < moment(item).format('HH:mm'))

            })

            setTodayWeather(number);
            setsunset();
        }


    }, [data]);



    if (Object.keys(data).length <= 0) {
        return null;
    }

    return (
        <>
            <div id="wrapper" style={colour}>
                <div className="sss">
                    <div className="arrow">
                        <Link to="/">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                    </div>
                    <div className="Reminder"><h3>Next 7 days</h3></div>
                </div>
                <Section data={data} />
                <Footer data={data} time={todayWeather} />

            </div>


        </>
    )
}