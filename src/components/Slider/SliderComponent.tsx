import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import SliderIcon from "../../assets/icons/SliderIcon.svg";
import { Scrollbar } from "swiper/modules";
import "./SliderComponent.style.scss";

type Props = {
  title: string;
  time: string;
  profit: string;
  date: string;
  num: number;
};

function SliderComponent() {
  const Card = (props: Props) => (
    <>
      <div className="slideTitle">
        <h2>{props.title}</h2>
        <p>SPOT · {props.time}</p>
      </div>
      <div className="slideProfit">
        <p>Прибыль</p>
        <p className="slideProfitPercent">{props.profit}</p>
        <div className="slideDate">
          <p className="slideNum">Цель {props.num}</p>
          <p className="slideDate1">{props.date}</p>
        </div>
      </div>
      <img src={SliderIcon} alt="" />
    </>
  );

  return (
    <>
      <div className="SliderContainer">
        <div className="SliderTitle">
          <h1>Прошедшие сделки</h1>
          <p className="SliderTitleStatus">
            <span></span>Онлайн
          </p>
        </div>
        <div className="Slider">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },

              480: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2,
              },

              1350: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide className="slide">
              <Card
                title={"NEAR/USDT"}
                time={"1 мин. назад"}
                profit={"58.6206%"}
                date={"Дата входа 06.10.2022"}
                num={4}
              />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <Card
                title={"BTC/USDT"}
                time={"1 мин. назад"}
                profit={"6.02%"}
                date={"Дата входа 06.10.2022"}
                num={3}
              />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <Card
                title={"ETH/USDT"}
                time={"1 мин. назад"}
                profit={"16.3%"}
                date={"Дата входа 06.10.2022"}
                num={4}
              />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <Card
                title={"NEAR/USDT"}
                time={"1 мин. назад"}
                profit={"58.6206%"}
                date={"Дата входа 06.10.2022"}
                num={4}
              />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <Card
                title={"NEAR/USDT"}
                time={"1 мин. назад"}
                profit={"58.6206%"}
                date={"Дата входа 06.10.2022"}
                num={4}
              />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <Card
                title={"NEAR/USDT"}
                time={"1 мин. назад"}
                profit={"58.6206%"}
                date={"Дата входа 06.10.2022"}
                num={4}
              />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <Card
                title={"NEAR/USDT"}
                time={"1 мин. назад"}
                profit={"58.6206%"}
                date={"Дата входа 06.10.2022"}
                num={4}
              />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <Card
                title={"NEAR/USDT"}
                time={"1 мин. назад"}
                profit={"58.6206%"}
                date={"Дата входа 06.10.2022"}
                num={4}
              />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <Card
                title={"NEAR/USDT"}
                time={"1 мин. назад"}
                profit={"58.6206%"}
                date={"Дата входа 06.10.2022"}
                num={4}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SliderComponent;
