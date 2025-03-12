import { create } from "zustand";

const userStore = create(() => ({
  links: [
    {
      name: "Цифры",
      anchor: "#numbers",
    },
    {
      name: "Сделки онлайн",
      anchor: "numbers",
    },
    {
      name: "о компании",
      anchor: "#about",
    },
    {
      name: "как начать",
      anchor: "#howToUse",
    },
    {
      name: "Taрифы",
      anchor: "numbers",
    },
    {
      name: "Отзывы",
      anchor: "numbers",
    },
    {
      name: "faq",
      anchor: "numbers",
    },
  ],
  reviews: [
    {
      title: "@ArtemGuriev",
      profit: "Общая прибыль 3043.27 USD",
      img: "../src/assets/Artem.svg",
      review:
        "Я запустил спот-бота 5 января. За 25 дней я заработал более 3 тысяч на споте без единого убытка и без страха ликвидации. Большое спасибо TradeBlade за создание такого замечательного бота.",
    },

    {
      title: "@XPonse",
      profit: "Общую прибыль не афиширует",
      img: "../src/assets/XPonse.svg",
      review:
        "Мой капитал 2к. Если я получаю 10 долларов в день, то за месяц я зарабатываю 300 долларов. То есть 15% в месяц, что мне более чем достаточно.",
    },
    {
      title: "@gWagon",
      profit: "Общую прибыль не афиширует",
      img: "../src/assets/gWagon.svg",
      review:
        "Попробовал. Понравилось. Рекомендую ли я? Да. Но адектватно понимаю, что чем больше людей тем может быть меньше прибыли...",
    },
    {
      title: "@sanyaMnS",
      profit: "Общая прибыль 4 405.96 USD",
      img: "../src/assets/@sanyaMnS.svg",
      review:
        "Сначала немного расстроился ибо заработал 4$ с одной крупной сделки. Но зато понял что все равно в плюсе. На следующей сделке все полетело вверх.",
    },
  ],
  trades: [
    {
      icon: "../src/assets/icons/icon1.svg",
      title: "Копи–трейдинг 24/7",
      subTitle:
        "Copy–Trading позволяет следить за сделками команды и получать прибыль 24/7 без каких–либо усилий или проблем для вас",
    },
    {
      icon: "../src/assets/icons/icon2.svg",
      title: "Торговля спотовыми и фьючерсными сделками",
      subTitle:
        "Платформа для копи–трейдинга поддерживает торговлю как спотовыми, так и фьючерсными сделками на Binance.",
    },
    {
      icon: "../src/assets/icons/icon3.svg",
      title: "Высокая прибыль каждий день",
      subTitle:
        "Каждая сделка показывает хорошие результаты на рынках за счет хорошего денежного и риск менеджмента.",
    },
    {
      icon: "../src/assets/icons/icon4.svg",
      title: "Собственный курс по трейдингу",
      subTitle:
        "Мы хотим менять комьюнити, улучшать его. В личном кабинете на сайте вы найдете наш собственный курс по криптовалютам, который поможет увереннее понимать наши сигналы и разрабатывать свои.",
    },
    {
      icon: "../src/assets/icons/icon5.svg",
      title: "Сильное окружение",
      subTitle:
        "Ты попадаешь в сильное крипто окружение, ведь развиваться легче когда нас много. В чате присутствуют люди из нашей команды, которые общаються со всеми, помагают и подсказывают.",
    },
  ],
}));

export default userStore;
