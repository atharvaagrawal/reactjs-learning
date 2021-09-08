import React from "react";
import ReactDOM from "react-dom";
import my,{favprog,myName,myNames} from './App.js'

ReactDOM.render(
  <>
    <ol>
      <li> Hi! </li>
      <li> {my} </li>
      <li> {favprog} </li>
      <li> {myName()} </li>
      <li> {myNames()} </li>
    </ol>
  </>,
  document.getElementById("root")
);