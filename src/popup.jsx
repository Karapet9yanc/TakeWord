import React from "react";
import { render } from "react-dom";
import { allWords } from "./helpers.allWords";
import { getRandomWord } from "./helpers.functions.jsx";

const TakeWord = () => {
  const wordAndTransl = getRandomWord(allWords);
  return (
    <div>
      <h1>{wordAndTransl[0]}</h1>
      <h2>{wordAndTransl[1]}</h2>
    </div>
  );
};

render(<TakeWord />, document.getElementById("react-target"));
