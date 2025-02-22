export const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },

  {
    title: "Чем свойства отличаются от состояний?",
    variants: [
      "Свойства можно изменять, состояния нельзя",
      "Свойства для работы со значениями, состояния для работы с функциями",
      "Состояния можно изменять, свойства нельзя",
    ],
    correct: 2,
  },
  {
    title: "Где правильно передена функция в качестве свойства?",
    variants: [
      "argument=(this.someFunction)",
      "argument={this.someFunction}",
      "argument={this.someFunction {}}",
    ],
    correct: 1,
  },
  {
    title: "Где правильно выведен компонент через рендер?",
    variants: ["<Test />", "</Test>", "<Test >"],
    correct: 0,
  },
  {
    title: "Как обратится к свойству weight?",
    variants: ["{this.weight}", "{this.prop.weight}", "{this.props.weight}"],
    correct: 2,
  },

  {
    title: "Какая компания разработала React JS?",
    variants: ["GitHub", "Facebook", "Google"],
    correct: 1,
  },
];
