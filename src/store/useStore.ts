import { create } from "zustand";
import Artem from "../assets/Artem.svg";
import XPonse from "../assets/XPonse.svg";
import gWagon from "../assets/gWagon.svg";
import sanyaMnS from "../assets/@sanyaMnS.svg";
import icon1 from "../assets/icons/icon1.svg";
import icon2 from "../assets/icons/icon2.svg";
import icon3 from "../assets/icons/icon3.svg";
import icon4 from "../assets/icons/icon4.svg";
import icon5 from "../assets/icons/icon5.svg";
interface Link {
  name: string;
  anchor: string;
}

interface Trade {
  icon: string;
  title: string;
  subTitle: string;
}

interface Review {
  title: string;
  profit: string;
  img: string;
  review: string;
}

interface UserStore {
  links: Link[];
  reviews: Review[];
  trades: Trade[];
  activeMenu: boolean;
  setActiveMenu: (activeMenu: boolean) => void;
  setDisActiveMenu: () => void;
}

const useStore = create<UserStore>((set) => ({
  links: [
    { name: "Цифры", anchor: "#numbers" },
    { name: "Сделки онлайн", anchor: "#profit" },
    { name: "О компании", anchor: "#about" },
    { name: "Как начать", anchor: "#howToUse" },
    { name: "Тарифы", anchor: "#numbers" },
    { name: "Отзывы", anchor: "#numbers" },
    { name: "FAQ", anchor: "#numbers" },
  ],
  reviews: [
    {
      title: "@ArtemGuriev",
      profit: "Общая прибыль 3043.27 USD",
      img: Artem,
      review:
        "Я запустил спот-бота 5 января. За 25 дней я заработал более 3 тысяч на споте без единого убытка и без страха ликвидации. Большое спасибо TradeBlade за создание такого замечательного бота.",
    },
    {
      title: "@XPonse",
      profit: "Общую прибыль не афиширует",
      img: XPonse,
      review:
        "Мой капитал 2к. Если я получаю 10 долларов в день, то за месяц я зарабатываю 300 долларов. То есть 15% в месяц, что мне более чем достаточно.",
    },
    {
      title: "@gWagon",
      profit: "Общую прибыль не афиширует",
      img: gWagon,
      review:
        "Попробовал. Понравилось. Рекомендую ли я? Да. Но адекватно понимаю, что чем больше людей, тем может быть меньше прибыли...",
    },
    {
      title: "@sanyaMnS",
      profit: "Общая прибыль 4 405.96 USD",
      img: sanyaMnS,
      review:
        "Сначала немного расстроился, ибо заработал 4$ с одной крупной сделки. Но зато понял, что все равно в плюсе. На следующей сделке все полетело вверх.",
    },
  ],
  trades: [
    {
      icon: icon1,
      title: "Копи–трейдинг 24/7",
      subTitle:
        "Copy–Trading позволяет следить за сделками команды и получать прибыль 24/7 без каких–либо усилий или проблем для вас",
    },
    {
      icon: icon2,
      title: "Торговля спотовыми и фьючерсными сделками",
      subTitle:
        "Платформа для копи–трейдинга поддерживает торговлю как спотовыми, так и фьючерсными сделками на Binance.",
    },
    {
      icon: icon3,
      title: "Высокая прибыль каждый день",
      subTitle:
        "Каждая сделка показывает хорошие результаты на рынках за счет хорошего денежного и риск-менеджмента.",
    },
    {
      icon: icon4,
      title: "Собственный курс по трейдингу",
      subTitle:
        "Мы хотим менять комьюнити, улучшать его. В личном кабинете на сайте вы найдете наш собственный курс по криптовалютам, который поможет увереннее понимать наши сигналы и разрабатывать свои.",
    },
    {
      icon: icon5,
      title: "Сильное окружение",
      subTitle:
        "Ты попадаешь в сильное крипто-окружение, ведь развиваться легче, когда нас много. В чате присутствуют люди из нашей команды, которые общаются со всеми, помогают и подсказывают.",
    },
  ],
  activeMenu: false,
  setActiveMenu: (menu) => set({ activeMenu: menu }),
  setDisActiveMenu: () => set({ activeMenu: false }),
}));

export default useStore;
