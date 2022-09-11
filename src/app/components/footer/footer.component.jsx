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
                  Private Sale
                </button>
                <button className='footer__button-inverse'>
                  Whitepaper
                </button>
              </div>
              <Social />
            </div>
            {/* <div className="footer__right">
              menu
            </div> */}
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
