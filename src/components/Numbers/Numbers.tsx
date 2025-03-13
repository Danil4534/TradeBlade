import "./numbers.style.scss";

function Numbers() {
  const data = [
    { title: "Торговой прибыли", number: "2756%" },
    { title: "фьючерсных и спотовых сделок", number: 67 },
    { title: "прибыль подписчиков", number: 375000 },
  ];

  return (
    <>
      <div className="numberContainer">
        <div className="numberTitle">
          <h1>Цифры</h1>
          <p>Cентябрь 2022</p>
        </div>
        <div className="numberContent">
          {data.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.number}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Numbers;
