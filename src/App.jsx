import React from "react";
import "./App.css";

const PERSON = {
  MAN: "MAN",
  WOMAN: "WOMAN",
  YOUNG_MAN: "YOUNG_MAN",
  YOUNG_WOMEN: "YOUNG_WOMEN",
};

const getBreathe = ({ age, height, person }) => {
  switch (person) {
    case PERSON.MAN:
      return 5.2 * height - 0.029 * age - 3.2;
    case PERSON.WOMAN:
      return 4.9 * height - 0.019 * age - 3.76;
    case PERSON.YOUNG_WOMEN:
      return 3.75 * height;
    case PERSON.YOUNG_MAN:
      if (height < 165) {
        return 4.53 * height - 3.9;
      } else {
        return 10 * height - 12.85;
      }
    default:
      return "Что-то пошло не так";
  }
};

function App() {
  const [inputState, setInputState] = React.useState({
    age: '',
    height: '',
    person: PERSON.MAN,
  });
  const [calculated, setCalculated] = React.useState();
  const onChange = (e) => {
    setInputState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  React.useEffect(() => {
    setCalculated(getBreathe(inputState).toFixed(2));
  }, [inputState, inputState.height, inputState.age]);
  return (
    <div className="App">
      <form>
        <div className="number_inputs">
          <label>
            Возраст
            <input
              name="age"
              type="number"
              value={inputState.age}
              onChange={onChange}
            />
          </label>
          <label>
            Рост (м)
            <input
              name="height"
              type="number"
              value={inputState.height}
              onChange={onChange}
            />
          </label>
        </div>

        <div className="radio_inputs">
          <label>
            Мужчина
            <input
              type="radio"
              name="person"
              onChange={onChange}
              checked={inputState.person === PERSON.MAN}
              value={PERSON.MAN}
            />
          </label>
          <label>
            Женщина
            <input
              type="radio"
              name="person"
              onChange={onChange}
              checked={inputState.person === PERSON.WOMAN}
              value={PERSON.WOMAN}
            />
          </label>
          <label>
            Мальчик
            <input
              type="radio"
              name="person"
              onChange={onChange}
              checked={inputState.person === PERSON.YOUNG_MAN}
              value={PERSON.YOUNG_MAN}
            />
          </label>
          <label>
            Девочка
            <input
              type="radio"
              name="person"
              onChange={onChange}
              checked={inputState.person === PERSON.YOUNG_WOMEN}
              value={PERSON.YOUNG_WOMEN}
            />
          </label>
        </div>
      </form>
      <div className="result">Результат {calculated > 0 && calculated}</div>
    </div>
  );
}

export default App;
