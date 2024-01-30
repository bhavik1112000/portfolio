import React from "react";
import "./testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar, Bre } from "swiper/modules";
import testimonial1 from "../assets/img/testimonial1.jpg";
import testimonial2 from "../assets/img/testimonial2.jpg";
import testimonial3 from "../assets/img/testimonial3.jpg";

const Testimonial = () => {
  return (
    <div className="section testimonial">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>

      <div className="testimonial__container main container">
        <div>
          <div className="testimonial__content">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              grabCursor={true}
              pagination={{ clickable: true, el: ".swiperr-custom-pagination" }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              breakpoints={{ 568: { slidesPerView: 2 } }}
            >
              <SwiperSlide>
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src={testimonial1}
                      alt=""
                      className="testimonial__img"
                    />
                    <div>
                      <h3 className="testimonial__name">Sara Smith</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="i uil uil-star testimonial__icon-star"></i>
                    <i className="i uil uil-star testimonial__icon-star"></i>
                    <i className="i uil uil-star testimonial__icon-star"></i>
                    <i className="i uil uil-star testimonial__icon-star"></i>
                    <i className="i uil uil-star testimonial__icon-star"></i>
                  </div>
                </div>
                <p className="testimonial__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  pariatur vitae reiciendis sint velit. Quas esse placeat quis
                  magni officia quibusdam, totam magnam itaque dolores voluptate
                  inventore, molestiae, consectetur modi molestias rerum! Earum,
                  repudiandae?
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src={testimonial2}
                      alt=""
                      className="testimonial__img"
                    />

                    <div>
                      <h3 className="testimonial__name">Matt Willson</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                  </div>
                </div>
                <p className="testimonial__description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Expedita possimus, autem repellat delectus quas excepturi
                  consequuntur ipsum inventore id beatae officia voluptas itaque
                  alias!
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src={testimonial3}
                      alt=""
                      className="testimonial__img"
                    />

                    <div>
                      <h3 className="testimonial__name">Virat Anderson</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                  </div>
                </div>
                <p className="testimonial__description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Expedita possimus, autem repellat delectus quas excepturi
                  consequuntur ipsum inventore id beatae officia voluptas itaque
                  alias!
                </p>
              </SwiperSlide>
            </Swiper>
            <div className="swiperr-custom-pagination" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
