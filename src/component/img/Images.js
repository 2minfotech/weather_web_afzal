import React from "react";
import moment from "moment";
export function Images({ data, date }) {
    const temperature = data.daily.time
    const month = moment(date).format('YYYY-MM-DD')
    const temperatures = data.daily.weathercode
    var monthdate = temperature.indexOf(month)
    const weather = temperatures[monthdate]


    return <img src={`./assects/images/${weather}.png`} />
}