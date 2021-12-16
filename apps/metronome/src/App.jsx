import React from "react";
import Metronome from '@kevinorriss/react-metronome';
import { matchTriggerQueries } from "@felvin-search/core";


// Your UI logic goes here.
// `data` prop is exactly what is returned by queryToData.
function Component() {return (<Metronome />);}


const queryToData = matchTriggerQueries([
  "metronome",
  "Metronome",
  "bpm",
  "merge pdf files", 
  "combine pdfs into single pdf"
]);


export { queryToData, Component };
