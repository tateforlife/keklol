import React from 'react';

import './footer.styles.scss';

import Social from '../header/social/social.component';
import Logo from '../header/logo/logo.component';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer__wrapper'>
          <div className='footer__socials'>
            <div className="footer__left">
              <Logo />
              <div className="footer__buttons">
                <button className='footer__button'>
                  Join Now
                </button>
              </div>
              <Social />
            </div>
            <div className="footer__right">
              <div className="footer__menu">
                <div className="footer__menu-item"><div className="footer__divider"></div><a href="#">Home</a></div>
                <div className="footer__menu-item"><a href="#">Staking</a></div>
                <div className="footer__menu-item"><a href="#">Key Features</a></div>
                <div className="footer__menu-item"><a href="#">Roadmap</a></div>
                <div className="footer__menu-item"><a href="#">Partners</a></div>
              </div>
              <div className="footer__menu">
                <div className="footer__menu">
                  <div className="footer__menu-item"><div className="footer__divider"></div><a href="#">$CFC Token</a></div>
                  <div className="footer__menu-item"><a href="#">PancakeSwap</a></div>
                  <div className="footer__menu-item"><a href="#">PinkSale</a></div>
                  <div className="footer__menu-item"><a href="#">CoinMarketCap</a></div>
                  <div className="footer__menu-item"><a href="#">CoinGecko</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer__legal'>
            <p className='footer__legal-rights'>
              © 2022 CoinFlip, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
