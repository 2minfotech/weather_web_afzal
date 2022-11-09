import React from "react";
import { useParams } from 'react-router-dom';
export const Details = () => {
    const query = useParams();
   // console.log(query.time);
    return (
        <p>This is details page for time =  {query.time}</p>
    )
}