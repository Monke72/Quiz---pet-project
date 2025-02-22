import badIcon from "../icon--bad.png";

function Result({ correct, questions, setSectionStep, setStep, setCorrect }) {
  function reTry() {
    setSectionStep((prev) => prev - 1);
    setStep(0);
    setCorrect(0);
  }
  return (
    <>
      <div className="result">
        {correct >= 5 ? (
          <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        ) : (
          <img src={badIcon} alt="" />
        )}

        <h2>{`Вы ответили правильно на ${correct} из ${questions.length}`}</h2>
        <div className="result__buttons">
          <button
            className="result__get"
            onClick={() => setSectionStep((prev) => prev + 1)}
          >
            Закончить тест
          </button>
          <button onClick={() => reTry()}>Попробовать снова</button>
        </div>
      </div>
    </>
  );
}

export default Result;
