import { useEffect, useState } from "react";
import reactImage from "../reactImage.webp";

function Cert({ correct, name }) {
  console.log(correct);

  const [rated, setRated] = useState("");
  const [ratedText, setRatedText] = useState("");

  useEffect(() => {
    if (correct > 7) {
      setRated("5");
      setRatedText(
        "поздравляю с успешным прохождением теста по React! Ты продемонстрировал отличные навыки и терпение, что позволило тебе достичь этой цели.Продолжай развиваться и достигай новых вершин в мире разработки!"
      );
    } else if (correct >= 5) {
      setRated("4");
      setRatedText(
        "поздравляю с прохождением теста по реакт! Ты проделал отличную работу, и это только начало твоего пути к успеху. Память о своих достижениях поможет тебе расти и развиваться. Продолжай двигаться вперед и достигай новых высот!"
      );
    } else if (correct < 5) {
      setRated("3");
      setRatedText(
        "поздравляю с прохождением теста! Хотя оценка не была такой, как ожидалось, это не конец пути. Используй этот опыт для роста и улучшения. Не сдавайся, ведь впереди еще много возможностей для успеха!"
      );
    }
  }, [correct]);

  return (
    <div className="cert__section">
      <h3 className="window__title">
        Поздравляем с прохождением теста по
        <span style={{ color: "#6a5be2" }}> React</span>
      </h3>
      <span className="cert__rated">{rated}</span>
      <p className="cert__info">
        <span style={{ fontWeight: "600" }}>{name}</span> - {ratedText}
      </p>
    </div>
  );
}

export default Cert;
