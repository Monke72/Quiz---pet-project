import { useState } from "react";
import { questions } from "../data";

function Game({ step, nextStep }) {
  const procent = ((step / questions.length) * 100).toFixed();
  return (
    <>
      <div className="progress">
        <div style={{ width: `${procent}%` }} className="progress__inner"></div>
      </div>
      <h1>{questions[step].title}</h1>
      {
        <>
          <ul>
            {questions[step].variants.map((el, index) => (
              <li onClick={(e) => nextStep(e, index)} key={index}>
                {el}
              </li>
            ))}
          </ul>
        </>
      }
    </>
  );
}

export default Game;
