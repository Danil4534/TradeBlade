import React from "react";
import "./howToStart.style.scss";
function HowtoStart() {
  const content = [
    {
      title: "Создайте аккаунт",
      subTitle:
        "Начните бесплатную 3-дневную пробную версию. Кредитная карта не требуется.",
    },
    {
      title: "Подключить обмен API ключами",
      subTitle: "Просто вставьте свои ключи API из личного кабинета.",
    },
    {
      title: "Настройте аккаунт",
      subTitle:
        "Поставьте нужные настройки депозита на каждый сигнал и нажмите сохранить.",
    },
    {
      title: "Ваш копитрейдер запущен",
      subTitle:
        "Просто расслабьтесь и начните получать пассивный доход от криптовалюты с помощью TradeBlade",
    },
  ];

  return (
    <>
      <div className="howToStartContainer">
        <div className="howToStartTitle">
          <h1>Как начать пользоваться сервисом</h1>
        </div>
        <div className="howToStartSteps">
          {content.map((item, index) => (
            <div key={index} className="step">
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>
            </div>
          ))}
        </div>
        <div className="btnTry">
          <button>Попробовать Бесплатно</button>
        </div>
      </div>
    </>
  );
}

export default HowtoStart;
