import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FAQ } from "../../../mocks/constants";
import React from "react";
import "./Help.css"
import { FAQ } from "../../../mocks/constants";
import Componentt from "./Component";

const Help = () => {

  const [data, setData] = useState(FAQ);

  return (
    <div class="accordion flex flex-col items-center mt-9  h-screen">


      
      
      <div class="w-1/2">
        <input type="checkbox" name="panel" id="panel-1" class="hidden"/>
          <label for="panel-1" class="relative block bg-gray-500 text-white p-4 shadow border-b border-grey">{data[0].title}</label>
          <div class="accordion__content overflow-hidden bg-grey-lighter">
            <h2 class="accordion__header pt-4 pl-4">{data[0].title}</h2>
            <p class="accordion__body p-4" id="panel1">{data[0].description}</p>
          </div>
      </div>

      <div class="w-1/2">
        <input type="checkbox" name="panel" id="panel-1" class="hidden"/>
          <label for="panel-1" class="relative block bg-gray-500 text-white p-4 shadow border-b border-grey">{data[0].title}</label>
          <div class="accordion__content overflow-hidden bg-grey-lighter">
            <h2 class="accordion__header pt-4 pl-4">{data[3].title}</h2>
            <p class="accordion__body p-4" id="panel1">{data[3].description}</p>
          </div>
      </div>
     
      <div class="w-1/2">
        <input type="checkbox" name="panel" id="panel-2" class="hidden"/>
          <label for="panel-2" class="relative block bg-gray-500 text-white p-4 shadow border-b border-grey">{data[1].title}</label>
          <div class="accordion__content overflow-hidden bg-grey-lighter">
            <h2 class="accordion__header pt-4 pl-4">{data[1].title}</h2>
            <p class="accordion__body p-4">{data[1].description}</p>
          </div>
      </div>
      
    
      <div class="w-1/2">
        <input type="checkbox" name="panel" id="panel-3" class="hidden"/>
          <label for="panel-3" class="relative block bg-gray-500 text-white p-4 shadow border-b border-grey">{data[2].title}</label>
          <div class="accordion__content overflow-hidden bg-grey-lighter">
            <h2 class="accordion__header pt-4 pl-4">{data[2].title}</h2>
            <p class="accordion__body p-4">{data[2].description}</p>
          </div>
      </div>
    </div>

  )
};

export default Help;