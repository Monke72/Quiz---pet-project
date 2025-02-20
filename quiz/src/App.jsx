import Game from "./Component/Game";
import { useState } from "react";
import Result from "./Component/Result";
import { questions } from "./data";
import Registr from "./Component/Registr";
// import Result from "./Component/Result";
console.log(questions);

function App() {
  const [correct, setCurrect] = useState(0);
  const [res, setRes] = useState(false);
  const [step, setStep] = useState(0);

  function nextStep(el, index) {
    setStep(step + 1);
    if (index == questions[step].correct) {
      setCurrect(correct + 1);
    }
    if (questions.length === step + 1) {
      setRes(true);
    }
  }
  return (
    <div className="wrapper">
      <Registr />

      {/* <div className="App">
        {res ? (
          <Result correct={correct} questions={questions} />
        ) : (
          <Game correct={correct} step={step} nextStep={nextStep} />
        )}
      </div> */}
    </div>
  );
}

export default App;
