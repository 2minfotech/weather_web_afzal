import React from "react";
import { Card } from "react-bootstrap";
import './List.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function List({ data }) {
    return (
        <div>
            <Card>
                <Card.Body className="cards" >
                    <div className="disp">
                        <div className="umbres">
                            <div className="s">
                                <img src='./assects/images/Umbrella.png' />
                            </div>
                        </div>
                        <div className="rain"> <p>Rainfall</p></div>
                        <div className="centimeter">
                            <p>{data.daily.rain_sum[0]+data.daily_units.precipitation_sum }</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body className="cards" >
                    <div className="disp">
                        <div className="umbres">
                            <div className="s">
                                <img className="wind" src='./assects/images/Rectangle 14.png' />
                            </div>
                        </div>
                        <div className="rain"> <p>Wind</p></div>
                        <div className="centimeter">
                            <p>{data.current_weather.windspeed+data.hourly_units.windspeed_180m}</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body className="cards" >
                    <div className="disp">
                        <div className="umbres">
                            <div className="s">
                                <img className="water" src='./assects/images/Vector.png' />
                            </div>
                        </div>
                        <div className="rain"> <p>Humidity</p></div>
                        <div className="centimeter">
                            <p>{data.current_weather.winddirection+data.hourly_units.temperature_180m}</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <div className="days">
                <div className="badge" ><h5>Today</h5></div>
                <p className="badge-p">Tomorrow</p>

                <div className="alert"><Link to='weather-next-7-days'>Next 7 days</Link></div>
                <FontAwesomeIcon className="icons" icon={faGreaterThan} />
            </div>

        </div>
    );
}