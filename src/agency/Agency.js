import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import catData from "../assets/DB/catData";
import React, { useEffect, useState } from "react";
import "./Agency.css";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Agency.css";
import AgencyMenu from "./AgencyMenu";

const Agency = () => {
  const path = process.env.PUBLIC_URL;
  const [data, setData] = useState(catData);
  const [isToggle, setIsToggle] = useState(false);
  const [imageOffset, setImageOffset] = useState(0);

  const handleToggle = () => {
    setIsToggle(!isToggle);
    const span = document.querySelector(".mobile-btn span");
    span.classList.toggle("active", !isToggle);
  };

  const handleScroll = () => {
    setImageOffset(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      <header>
        <h1 className="logo">
          <a href="#">
            <img src="./images/mapleimg.png" alt="me" />
          </a>
        </h1>
        <nav>
          <a href="#" className="mobile-btn" onClick={handleToggle}>
            <span>모바일메뉴</span>
          </a>
          <AgencyMenu isVisible={isToggle} />
        </nav>
      </header>

      <section>
        <div className="main">
          <h2>We are Creative Agency</h2>
          <h3>Working with brands all over the world</h3>
        </div>

        <div className="imgbox">
          <img
            src="./images/CartoonMac.png"
            alt="CartoonMac"
            className="cartoon"
            style={{ transform: `translateY(${imageOffset * 0.05}px)` }}
          />
          <img
            src="./images/SplashColor.png"
            alt="SplashColor"
            className="splash"
            style={{ transform: `translateY(-${imageOffset * 0.1}px)` }}
          />
        </div>
        <p>
          Leading digital agency with solid design and divelopment expertise. We
          focus on building Webflow websites.
        </p>
        <div className="imgbox">
          <img
            src="./images/CartoonMac.png"
            alt="CartoonMac"
            className="cartoon"
            style={{ transform: `translateY(${imageOffset * 0.05}px)` }}
          />
          <img
            src="./images/SplashColor.png"
            alt="SplashColor"
            className="splash"
            style={{ transform: `translateY(-${imageOffset * 0.1}px)` }}
          />
        </div>
        <p>
          Leading digital agency with solid design and divelopment expertise. We
          focus on building Webflow websites.
        </p>

        <div className={styles.swiperCom}>
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper">
            {data.map((img) => (
              <SwiperSlide key={img.id} className="swiper-slide">
                <img src={path + img.image} alt={img.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="swiper-txt">Types of clients we want to work</p>
      </section>

      <footer>
        <p>ⓒMadeByProxymaDesign 2023. Web Design Italy Company. P.Iva</p>
        <p>02130380385. All Right Reserved. Privacy Policy</p>
      </footer>

      <a href="#top" className="top-btn">
        ⬆
      </a>
    </div>
  );
};

export default Agency;
