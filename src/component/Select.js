import React from "react";
import { Cities } from "../Uitility/Cities";

export function Select(){
 return(
  Cities.map((item,index) => {
            return   <option key={index} value={index}>{item.name}</option>
           })  
 )       
}