import React from "react";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import portfolio1 from "../assets/img/portfolio1.jpg";
import portfolio2 from "../assets/img/portfolio2.jpg";
import portfolio3 from "../assets/img/portfolio3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Portfolio = () => {
  return (
    <div className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Work</span>

      <div className="portfolio__container main container">
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="swiper"
          >
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={portfolio1} alt="" className="portfolio__img" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Modern Website</h3>
                  <p className="portfolio__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe at ad officiis veniam, nisi deserunt quos distinctio.
                    Illo, voluptatibus nobis!
                  </p>
                  <div className="portfolio__button">
                    <a href="#" className="button button--flex button--small">
                      Demo
                      <i
                        className="uil uil-arrow-right button__icon"
                        style={{ textAlign: "center" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={portfolio2} alt="" className="portfolio__img" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Brand Design</h3>
                  <p className="portfolio__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe at ad officiis veniam, nisi deserunt quos distinctio.
                    Illo, voluptatibus nobis!
                  </p>

                  <div className=" portfolio__button">
                    <a href="#" className="button button--flex button--small">
                      Demo
                      <i
                        className="uil uil-arrow-right button__icon"
                        style={{ textAlign: "center" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={portfolio3} alt="" className="portfolio__img" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Online store</h3>
                  <p className="portfolio__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe at ad officiis veniam, nisi deserunt quos distinctio.
                    Illo, voluptatibus nobis!
                  </p>
                  <div className=" portfolio__button">
                    <a href="#" className="button button--flex button--small">
                      Demo
                      <i
                        className="uil uil-arrow-right button__icon"
                        style={{ textAlign: "center" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div className="swiper-custom-pagination" /> */}
        </div>
      </div>
      <div className="swiper-custom-pagination" />
    </div>
  );
};

export default Portfolio;
