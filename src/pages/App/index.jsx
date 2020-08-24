import React from 'react';
import Slider from 'react-slick';

// components
import Nav from '../../components/Nav';

// styles
import './index.scss';

import PhoneImage from '../../assets/images/png/iPhone XS.H03.2k.png';
import ACImage from '../../assets/images/png/Air Conditioner.H03.2k.png';
import DryerImage from '../../assets/images/png/Dryer.H03.2k.png';
import LaptopImage from '../../assets/images/png/Laptop Computer.H03.2k.png';
import GeneratorImage from '../../assets/images/png/Portable Generator.H03.2k.png';
import GameImage from '../../assets/images/png/Video Game Console.H03.2k.png';

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  // autoplay: true,
  autoplaySpeed: 2000,
  speed: 2000,
  slidesToShow: 1,
  centerMode: true,
  className: 'center',
  slidesToScroll: 1,
  pauseOnHover: true,
  adaptiveHeight: true,
  swipeToSlide: true,
  nextArrow: false,
  prevArrow: '',
};

const App = () => {
  return (
    <section className="jumbotron jumbotron-fluid p-0">
      <Nav />
      <main className="content text-center">
        <Slider {...settings}>
          <div className="slick-item d-flex justify-content-center align-items-center">
            <img
              src={PhoneImage}
              alt="photo of an Iphone"
              className="carousel-image"
            />
          </div>
          <div className="slick-item d-flex justify-content-center align-items-center">
            <img
              src={ACImage}
              alt="photo of an Iphone"
              className="carousel-image"
            />
          </div>
          <div className="slick-item d-flex justify-content-center align-items-center">
            <img
              src={DryerImage}
              alt="photo of an Iphone"
              className="carousel-image"
            />
          </div>
          <div className="slick-item d-flex justify-content-center align-items-center">
            <img
              src={LaptopImage}
              alt="photo of an Iphone"
              className="carousel-image"
            />
          </div>
          <div className="slick-item d-flex justify-content-center align-items-center">
            <img
              src={GeneratorImage}
              alt="photo of an Iphone"
              className="carousel-image"
            />
          </div>
          <div className="slick-item d-flex justify-content-center align-items-center">
            <img
              src={GameImage}
              alt="photo of an Iphone"
              className="carousel-image"
            />
          </div>
        </Slider>
        <p className="text-center slider-caption">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </p>
        <h1 className="lead-text">Lorem ipsum dolor sit amet, consetetur</h1>
        <h2 className="sub-text">Lorem ipsum now</h2>
        <div className="d-flex justify-content-center">
          <p className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <button className="btn btn-custom">Lorem ipsum now</button>
      </main>
      <div className="s"></div>
    </section>
  );
};

export default App;
