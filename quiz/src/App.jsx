import Game from "./Component/Game";
import { useEffect, useState } from "react";
import Result from "./Component/Result";
import { questions } from "./data";
import Registr from "./Component/Registr";
import Cert from "./Component/Cert";

function App() {
  const [sectionStep, setSectionStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [name, setName] = useState("");
  const [res, setRes] = useState(false);
  const [step, setStep] = useState(0);
  const [getCert, setGetSert] = useState(false);

  useEffect(() => {
    console.log(sectionStep);
  }, [sectionStep]);

  function nextStep(el, index) {
    setStep(step + 1);
    if (index == questions[step].correct) {
      setCorrect(correct + 1);
    }
    if (questions.length === step + 1) {
      setSectionStep((prev) => prev + 1);
    }
  }
  return (
    <div className="wrapper">
      {sectionStep == 0 && (
        <Registr
          name={name}
          setName={setName}
          setSectionStep={setSectionStep}
        />
      )}

      {sectionStep == 1 && (
        <div className="App">
          <Game correct={correct} step={step} nextStep={nextStep} />{" "}
        </div>
      )}

      {sectionStep == 2 && (
        <div className="App">
          <Result
            correct={correct}
            questions={questions}
            setSectionStep={setSectionStep}
            setCorrect={setCorrect}
            setStep={setStep}
          />
        </div>
      )}

      {sectionStep == 3 && <Cert correct={correct} name={name} />}
    </div>
  );
}

export default App;
