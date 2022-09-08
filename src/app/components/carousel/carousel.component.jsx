import React from 'react';
import Slider from 'react-slick';

import './carousel.styles.scss';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => <ul>{dots}</ul>,
  };

  return (
    <div className='carousel'>
      <div className="carousel__wrapper">
        <h3 className='carousel__heading'>Partners &amp; <span>Collaborations</span></h3>
        <Slider {...settings}>
          <div>
            <div className='carousel__item'>
              <img className='carouseL__img' src='carousel_1.png' alt='carousel 1' />
              <h4 className='carousel__heading-small'>
                <svg className='carousel__svg' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_435_970)" strokeWidth="3"/>
                  <defs>
                    <linearGradient id="paint0_linear_435_970" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9960FF"/>
                      <stop offset="1" stopColor="#19D6E2"/>
                    </linearGradient>
                  </defs>
                </svg>
              Platform
              </h4>
              <a className='carousel__link' href='#'>
              Also read more in the Whitepaper
                <svg className='more-arrow' width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.7281 8.70711C9.11863 8.31658 9.11863 7.68342 8.7281 7.29289L2.36414 0.928932C1.97362 0.538408 1.34045 0.538408 0.949928 0.928932C0.559404 1.31946 0.559404 1.95262 0.949928 2.34315L6.60678 8L0.949928 13.6569C0.559404 14.0474 0.559404 14.6805 0.949928 15.0711C1.34045 15.4616 1.97362 15.4616 2.36414 15.0711L8.7281 8.70711ZM7.021 9H8.021V7H7.021V9Z" fill="white"/>
                </svg>
                <div className="carousel__divider"></div>
              </a>
              <p className="carousel__paragraph">
                <span>An innovative Web 3 coin toss game.</span> Allows you to play with any player around the globe, hit
              the X100 jackpot and much more.
              </p>
            </div>
          </div>
          <div>
            <div className='carousel__item'>
              <img className='carouseL__img' src='carousel_2.png' alt='carousel 2' />
              <h4 className='carousel__heading-small'>
                <svg className='carousel__svg' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_435_970)" strokeWidth="3"/>
                  <defs>
                    <linearGradient id="paint0_linear_435_970" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9960FF"/>
                      <stop offset="1" stopColor="#19D6E2"/>
                    </linearGradient>
                  </defs>
                </svg>
              Staking
              </h4>
              <a className='carousel__link' href='#'>
              Read more in the Whitepaper
                <svg className='more-arrow' width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.7281 8.70711C9.11863 8.31658 9.11863 7.68342 8.7281 7.29289L2.36414 0.928932C1.97362 0.538408 1.34045 0.538408 0.949928 0.928932C0.559404 1.31946 0.559404 1.95262 0.949928 2.34315L6.60678 8L0.949928 13.6569C0.559404 14.0474 0.559404 14.6805 0.949928 15.0711C1.34045 15.4616 1.97362 15.4616 2.36414 15.0711L8.7281 8.70711ZM7.021 9H8.021V7H7.021V9Z" fill="white"/>
                </svg>
                <div className="carousel__divider"></div>
              </a>
              <p className="carousel__paragraph">
                <span>New generation web 3.0 stacking.</span> Allows any holder of $CFC earn more tokens by staking it for a certain time.
              </p>
            </div>
          </div>
          <div>
            <div className='carousel__item'>
              <img className='carouseL__img' src='carousel_1.png' alt='carousel 1' />
              <h4 className='carousel__heading-small'>
                <svg className='carousel__svg' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_435_970)" strokeWidth="3"/>
                  <defs>
                    <linearGradient id="paint0_linear_435_970" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9960FF"/>
                      <stop offset="1" stopColor="#19D6E2"/>
                    </linearGradient>
                  </defs>
                </svg>
              Platform
              </h4>
              <a className='carousel__link' href='#'>
              Also read more in the Whitepaper
                <svg className='more-arrow' width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.7281 8.70711C9.11863 8.31658 9.11863 7.68342 8.7281 7.29289L2.36414 0.928932C1.97362 0.538408 1.34045 0.538408 0.949928 0.928932C0.559404 1.31946 0.559404 1.95262 0.949928 2.34315L6.60678 8L0.949928 13.6569C0.559404 14.0474 0.559404 14.6805 0.949928 15.0711C1.34045 15.4616 1.97362 15.4616 2.36414 15.0711L8.7281 8.70711ZM7.021 9H8.021V7H7.021V9Z" fill="white"/>
                </svg>
                <div className="carousel__divider"></div>
              </a>
              <p className="carousel__paragraph">
                <span>An innovative Web 3 coin toss game.</span> Allows you to play with any player around the globe, hit
              the X100 jackpot and much more.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
