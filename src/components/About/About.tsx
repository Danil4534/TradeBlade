import React from "react";
import "./about.style.scss";
function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutLeftSide">
          <h1>O Компании</h1>
          <p>
            Мы опытная команда, для которой трейдинг – профессия. TradeBlade
            является авторизованным официальным брокером биржи Binance.
            <br />
            <br />
            Он представляет пользователям множество преимуществ, таких как более
            високая скорость синхронизации API и возможность создать учетную
            запись Binance через платформу TradeBlade всего в 1 клик.
          </p>
        </div>
        <div className="aboutRightSide">
          <form className="aboutRightSideForm">
            <h1>Попробуйте сейчас и получите 5 дней бесплатного пользования</h1>

            <div className="sendEmailForm">
              <div className="sendEmailInput">
                <input type="email" placeholder="ВАШ E-MAIL" />
                <button className="sendEmailBtn">Попробовать</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default About;
