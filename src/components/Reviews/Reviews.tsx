import React from "react";

import "./reviews.style.scss";
import userStore from "../../store/useStore";
const Reviews: React.FC = () => {
  const { reviews } = userStore();
  return (
    <>
      <div className="reviewsContainer">
        <h1>отзывы учасников комьюнити</h1>
        <div className="cards">
          {reviews.map((items, index) => (
            <div className="reviewCard" key={index}>
              <img src={items.img} alt="" />
              <div className="reviewUserContent">
                <h3>{items.title}</h3>
                <p className="profit">{items.profit}</p>
                <p>{items.review}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="downloadMore">
          <button>Загрузить больше отзывов</button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
