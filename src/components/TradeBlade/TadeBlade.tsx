import "./tradeBlade.style.scss";
import userStore from "../../store/useStore";
function TradeBlade() {
  const { trades } = userStore();
  return (
    <>
      <div className="tradeBladeContainer">
        <h1>tradeblade это</h1>
        <div className="tradeBladeContent">
          {trades.map((item, index: number) => (
            <div key={index} className="tradeCard">
              <img src={item.icon} alt="" />
              <div className="tradeCardText">
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TradeBlade;
