import { createElement } from "react"
import React from "react"
export const Withoutjsx=()=>{
  return React.createElement("div", {id:"container", className:"divEl"},
    React.createElement("p",null,"Hello Supraja I am a without JSX component") ) 
}