import React from "react";
import './Footer.css';
import { Task } from "./Task";

export function Footer(props) {
 
   return (
      <div className="weather">
         <Task {...props} />
         
      </div>
   )
}