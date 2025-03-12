import USTD from "../../assets/Usdt.svg";
import "./banner.style.scss";
function Banner() {
  return (
    <>
      <div className="bannerContainer">
        <div className="bannerContainer-leftSection">
          <h1>моментально Копируй сделки профи трейдеров</h1>
          <p className="leftSectionTitle">
            Начни копировать сделки с успешной командой профессиональных
            трейдеров в автоматическом режиме.
          </p>
          <form className="sendEmailForm">
            <div className="sendEmailInput">
              <input type="email" placeholder="ВАШ E-MAIL" />
              <button className="sendEmailBtn">Начать</button>
            </div>
            <p className="sendEmailFreeUsing">5 дней бесплатного пользования</p>
          </form>
        </div>
        <div className="bannerContainer-rightSection">
          <img src={USTD} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
