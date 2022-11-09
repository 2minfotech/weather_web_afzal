import React from "react";
import moment from "moment";
import './Section.css';

import { Images } from "../component/img/Images";
export function Section({ data, date }) {

  var today = moment();
  var d0 = today.format('dddd');
  return (

    <div className="set">
      <div className="Remind">

        <div className="Day"><p>Tomorrow</p></div>
        <div className="cloud">
          <p>{data.daily.temperature_2m_max[1]}°</p>
          <div >
            <Images data={data} date={moment().add(1, 'days').format('YYYY-MM-DD')} />
          </div>

        </div>
      </div>
      <div className="imag">
        <div>
          <img className="umbre" src='./assects/images/Umbrella.png' />
          <p className="average">{data.daily.rain_sum[0] + data.daily_units.precipitation_sum}</p>
        </div>
        <div>
          <img className="vect" src='./assects/images/Vector.png' />
          <p className="average">{data.current_weather.windspeed + data.hourly_units.windspeed_180m}</p>
        </div>
        <div>
          <img className="Recta" src='./assects/images/Rectangle 14.png' />
          <p className="average">{data.current_weather.winddirection + data.hourly_units.temperature_180m}</p>
        </div>
      </div>
    </div>


  )
}
