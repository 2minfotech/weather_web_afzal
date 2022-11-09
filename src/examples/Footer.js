import moment from "moment";
import React from "react";
import { Images } from "../component/img/Images";
import { DaysWeather } from "./DaysWeather";
export function Footer({ data }) {
  return (
    <div>
      <DaysWeather day={moment().add(2, 'days').format('dddd')}
        degree={data.daily.temperature_2m_max[2]}
        image={<Images data={data} date={moment().add(2, 'days').format('YYYY-MM-DD')} />}
      />
      <DaysWeather day={moment().add(3, 'days').format('dddd')}
        degree={data.daily.temperature_2m_max[3]}

        image={<Images data={data} date={moment().add(3, 'days').format('YYYY-MM-DD')} />}
      />
      <DaysWeather day={moment().add(4, 'days').format('dddd')}
        degree={data.daily.temperature_2m_max[4]}
        image={<Images data={data} date={moment().add(4, 'days').format('YYYY-MM-DD')} />}
      />
      <DaysWeather day={moment().add(5, 'days').format('dddd')}
        degree={data.daily.temperature_2m_max[5]}
        image={<Images data={data} date={moment().add(5, 'days').format('YYYY-MM-DD')} />}
      />
      <DaysWeather day={moment().add(6, 'days').format('dddd')}
        degree={data.daily.temperature_2m_max[6]}
        image={<Images data={data} date={moment().add(6, 'days').format('YYYY-MM-DD')} />}
      />
      <DaysWeather day={moment().add(7, 'days').format('dddd')}
        degree={data.daily.temperature_2m_max[7]}
        image={<Images data={data} date={moment().add(0, 'days').format('YYYY-MM-DD')} />}
      />
    </div>
  );
}