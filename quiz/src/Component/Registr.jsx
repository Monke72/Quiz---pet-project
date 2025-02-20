import React, { useState } from "react";

function Registr() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  function nameHandler(e) {
    setName(e.target.value);
  }
  function surnameHandler(e) {
    setSurname(e.target.value);
  }
  function ageHandler(e) {
    setAge(e.target.value);
    if (age.length > 1) {
      setAge("0");
    }
  }
  return (
    <div className="window">
      <h3 className="window__title">
        Добро пожаловать на тест по знаниям Меня
      </h3>
      <form action="">
        <label htmlFor="">
          <p className="label">
            <label htmlFor="window__name">Введите имя</label>
            <input
              type="text"
              value={name}
              onChange={nameHandler}
              name="window__name"
              id="window__name"
              maxLength={9}
              minLength={3}
            />
          </p>
          <p className="label">
            <label htmlFor="window__surname">Введите Фамилию</label>
            <input
              type="text"
              value={surname}
              onChange={surnameHandler}
              maxLength={11}
              minLength={3}
              name="window__surname"
              id="window__surname"
            />
          </p>
          <p className="label">
            <label htmlFor="window__age">Введите Возраст</label>
            <input
              value={age}
              onChange={ageHandler}
              type="number"
              name="window__age"
              id="window__age"
            />
          </p>
        </label>
      </form>
    </div>
  );
}

export default Registr;
