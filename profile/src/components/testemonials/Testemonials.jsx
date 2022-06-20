import "./testemonials.scss";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

import image1 from "../../assets/avatar1.jpg";
import image2 from "../../assets/avatar2.jpg";
import image3 from "../../assets/avatar3.jpg";
import image4 from "../../assets/avatar4.jpg";
import StarRating from "../Stars/StarRating";

const Testemonials = () => {
  return (
    <div>
      <section
        className="testemonilas text-center text-capitalize"
        id="testemonilas"
      >
        <h3 className="my-2">review from clients</h3>
        <h2 className="mb-5">testemonials</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="swiperrre">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide className="swiper-slide">
                <div className="swiper-section">
                  <div className="test-img">
                    <img src={image1} alt="" className="test-image" />
                  </div>
                  <h3 className="fw-bold text-center text-capitalize mt-5">
                    moo
                  </h3>
                  <p className="fw-normal p-2 mt-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Beatae voluptatibus quia quidem fugiat odit odio delectus
                    alias pariatur? Tempora pariatur numquam ducimus rem,
                    veritatis ipsam et quisquam provident culpa magni!
                  </p>
                  {/* <StarRating /> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="swiper-section">
                  <div className="test-img">
                    <img src={image2} alt="" className="test-image" />
                  </div>
                  <h3 className="fw-bold text-center text-capitalize mt-5">
                    djfl-sdfs
                  </h3>
                  <p className="fw-normal p-2 mt-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Beatae voluptatibus quia quidem fugiat odit odio delectus
                    alias pariatur? Tempora pariatur numquam ducimus rem,
                    veritatis ipsam et quisquam provident culpa magni!
                  </p>
                  {/* <StarRating /> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="swiper-section">
                  <div className="test-img">
                    <img src={image3} alt="" className="test-image" />
                  </div>
                  <h3 className="fw-bold text-center text-capitalize mt-5">
                    sdf-dfs
                  </h3>
                  <p className="fw-normal p-2 mt-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Beatae voluptatibus quia quidem fugiat odit odio delectus
                    alias pariatur? Tempora pariatur numquam ducimus rem,
                    veritatis ipsam et quisquam provident culpa magni!
                  </p>
                  {/* <StarRating /> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="swiper-section">
                  <div className="test-img">
                    <img src={image4} alt="" className="test-image" />
                  </div>
                  <h3 className="fw-bold text-center text-capitalize mt-5">
                    sf-erw
                  </h3>
                  <p className="fw-normal p-2 mt-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Beatae voluptatibus quia quidem fugiat odit odio delectus
                    alias pariatur? Tempora pariatur numquam ducimus rem,
                    veritatis ipsam et quisquam provident culpa magni!
                  </p>
                  {/* <StarRating /> */}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testemonials;
