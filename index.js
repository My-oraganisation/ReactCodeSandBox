import React from "react";
import ReactDOM from "react-dom";
import FC from "./App.jsx";
import { Fnccomp, Clickcounter, Cilckhover } from "./App";
//import Fck,{ Newapp} from "./App";

const rootElement = document.getElementById("root");
//const myelement = document.getElementById("root1");

ReactDOM.render(
  <div>
    <FC />
  < Updatecomp nameProp = "Ravi New comp" />
   < Clickcounter headerProp = "RAvi counter" contentProp = "Content from props..."/>
    <Fnccomp />
    <Clickcounter />
    <Cilckhover />
  </div>,
  //    <Fck />
  //myelement,
  rootElement
);
