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
    arrows: true,
    appendDots: (dots) => <ul>{dots}</ul>,
  };

  return (
    <div className='carousel' id="features">
      <div className="carousel__wrapper">
        <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.6278 25.8154L19.9799 47.0001L11.1046 25.8154H28.6278Z" fill="white"/>
          <path d="M14.1311 23.1597L19.9849 18.522L25.6887 23.1597H14.1311Z" fill="white"/>
          <path d="M7.57394 25.8154L14.6735 42.7639L0 25.8154H7.57394Z" fill="white"/>
          <path d="M32.1497 25.8154H40L25.1444 42.9733L32.1497 25.8154Z" fill="white"/>
          <path d="M38.6524 23.1597H30.3676L23.021 17.1848H29.8536L38.6524 23.1597Z" fill="white"/>
          <path d="M9.20673 17.1848H16.9332L9.39205 23.1597H1.08594L9.20673 17.1848Z" fill="white"/>
          <path d="M16.455 0.5L13.995 0.935L15.2975 8.32L17.7575 7.885L16.455 0.5ZM26.005 0.935L23.545 0.5L22.2425 7.885L24.7075 8.32L26.005 0.935ZM35 4.005L32.8325 2.755L29.0825 9.25L31.25 10.5L35 4.005ZM7.1675 2.755L5 4.005L8.75 10.5L10.9175 9.25L7.1675 2.755Z" fill="white"/>
        </svg>
        <h3 className='carousel__heading'>Utilities <br/> &amp; <span>Key Features</span></h3>
        <Slider {...settings}>
          <div>
            <div className='carousel__item'>
              <img className='carouseL__img' src='carousel_1.png' alt='carousel 1' />
              <div className="carousel__content">
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
                  <svg className='more-arrow' width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.7281 8.70711C9.11863 8.31658 9.11863 7.68342 8.7281 7.29289L2.36414 0.928932C1.97362 0.538408 1.34045 0.538408 0.949928 0.928932C0.559404 1.31946 0.559404 1.95262 0.949928 2.34315L6.60678 8L0.949928 13.6569C0.559404 14.0474 0.559404 14.6805 0.949928 15.0711C1.34045 15.4616 1.97362 15.4616 2.36414 15.0711L8.7281 8.70711ZM7.021 9H8.021V7H7.021V9Z" fill="white"/>
                  </svg>
                  <div className="carousel__divider"></div>
                </a>
                <p className="carousel__paragraph">
                  <span>An innovative Web 3 coin toss game.</span> Allows you to play with any player around the globe, hit the X100 jackpot and much more. Read more in &quot;Quick Guide&quot; section.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='carousel__item'>
              <img className='carouseL__img' src='carousel_2.png' alt='carousel 1' />
              <div className="carousel__content">
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
                  <div className="carousel__divider"></div>
                </a>
                <p className="carousel__paragraph">
                  <span>New generation web 3.0 stacking.</span> Allows any holder of $CFC earn more tokens by staking it for a certain time.                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='carousel__item'>
              <img className='carouseL__img' src='carousel_3.png' alt='carousel 1' />
              <div className="carousel__content">
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
              Rewards
                </h4>
                <a className='carousel__link' href='#'>
                  <div className="carousel__divider"></div>
                </a>
                <p className="carousel__paragraph">
                  <span>Leaderboard pool of rewards.</span> Played once a week among the most active participants of the project, a jackpot that allows you to multiply your investments 10 times in just 5 minutes and much more.                 </p>
              </div>
            </div>
          </div>
          {/* <div>
            <div className='carousel__item'>
              <img className='carouseL__img' src='carousel_5.png' alt='carousel 1' />
              <div className="carousel__content">
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
              SAFU
                </h4>
                <a className='carousel__link' href='#'>
                  <div className="carousel__divider"></div>
                </a>
                <p className="carousel__paragraph">
                  <span>Verified by the PinkSale platform and received the SAFU ticker.</span> CoinFlip is an absolutely safe project for investment.</p>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
