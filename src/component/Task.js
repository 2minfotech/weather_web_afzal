import moment from "moment";
import React from "react";
import { Images } from "./img/Images";

export function Task(props) {
  return (
    props.time.map((submit, ind) =>
      <div className="temprature" key={ind}>
        <p className="temprature-p">{moment(submit).format('HH:mm')}</p>
        <Images data={props} />
        <p className="degre">{props.hourly.temperature_2m[ind]}</p>

      </div>
    )
  )
}