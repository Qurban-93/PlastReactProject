import React  from "react";
import Slider from "react-slick";
import { useMyContext } from "../../context/ModalContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./appOurPRoducts.scss";
import conus from "../../images/Polygon 2.png";

import generateProduct from "../../services/generateProduct";

const AppOurProducts = () => {
  const { filterProducts } = generateProduct();
  const { setToOpenModal } = useMyContext();

  const products = filterProducts.map((item, id) => (
    <div key={id} className="product">
      <img src={item.image} alt="jpg" />
      <h5>{item.title}</h5>
      <p>{item.desc}</p>
      <a onClick={(e) => setToOpenModal(e , item)} href="*">Müraciət et</a>
      <span>{item.price}</span>
    </div>
  ));

  const Carousel = () => {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };

    return <Slider {...settings}>{products}</Slider>;
  };

  return (
    <section className="our-products">
      <div className="text-title">
        <h1>
          Bizim <span> məhsullarımız </span>.
        </h1>
        <img src={conus} alt="logo" />
      </div>
      <div className="container">
        <Carousel />
        <div className="carousel-control">
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};

export default AppOurProducts;
