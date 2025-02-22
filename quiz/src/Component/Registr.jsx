import React, { useEffect, useState } from "react";

function Registr({ name, setName, setSectionStep }) {
  const [nameError, setNameError] = useState("");
  const [nameDirty, setNameDirty] = useState("");
  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");
  const [ageDirty, setAgeDirty] = useState(false);

  const [formReady, setFormReady] = useState(false);

  function nameHandler(e) {
    setName(e.target.value);
  }

  const blurHndler = (e) => {
    switch (e.target.name) {
      case "window__age":
        setAgeDirty(true);
        break;
      case "window__name":
        setNameDirty(true);
        break;
    }
  };
  function ageHandler(e) {
    setAge(e.target.value);
    if (e.target.value > 99 || e.target.value < 0) {
      setAgeError("Введите корректный возраст от 1 до 99 лет");
    } else {
      setAgeError("");
    }
  }
  function nameHandler(e) {
    setName(e.target.value);
    const regex = /^[A-Za-zА-Яа-я0-9\_]+$/;

    if (!e.target.value.length) {
      setNameError("");
    } else if (e.target.value.length < 3 || e.target.value.length > 11) {
      setNameError("Введите ник от 3 до 11 символов");
    } else if (!regex.test(e.target.value)) {
      setNameError(
        "Ник может состоять только из букв , цифр и нижнего подчеркивания!"
      );
    } else {
      setNameError("");
    }
  }
  useEffect(() => {
    console.log(name.length !== 0, age.length !== 0, !nameError, !ageError);
    if (name.length !== 0 && age.length !== 0 && !nameError && !ageError) {
      setFormReady(true);
    } else {
      setFormReady(false);
    }
  }, [name, age]);

  return (
    <div className="window">
      <h3 className="window__title">
        Добро пожаловать на тест по знаниям{" "}
        <span style={{ color: "#6a5be2" }}>React</span>
      </h3>
      <form action="w" id="reg__form">
        <label htmlFor="">
          <p className="label">
            <label htmlFor="window__name">Введите ник</label>
            {nameDirty && nameError && <span>{nameError}</span>}
            <input
              type="text"
              value={name}
              onBlur={(e) => blurHndler(e)}
              onChange={(e) => nameHandler(e)}
              name="window__name"
              id="window__name"
              maxLength={9}
              minLength={3}
              required
            />
          </p>
          <p className="label">
            <label htmlFor="window__age">Введите Возраст</label>
            {ageDirty && ageError && <span>{ageError}</span>}
            <input
              value={age}
              onBlur={(e) => blurHndler(e)}
              onChange={ageHandler}
              type="number"
              name="window__age"
              id="window__age"
              required
            />
          </p>
        </label>
        <button
          className="window__reg-btn"
          disabled={!formReady}
          type="submit"
          onClick={() => setSectionStep((prev) => prev + 1)}
        >
          Начать тест
        </button>
      </form>
    </div>
  );
}

export default Registr;
