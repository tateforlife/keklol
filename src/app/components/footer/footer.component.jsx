import React from 'react';
import MediaQuery from 'react-responsive'

import './footer.styles.scss';

import Social from '../header/social/social.component';
import Logo from '../header/logo/logo.component';
import environment from '../../../environment/environment';

const Footer = () => {
  return (
    <>
      <MediaQuery maxWidth={1024}>
        <footer className='footer'>
          <div className='footer__wrapper'>
            <Logo />
            <div className='footer__socials'>
              <Social />
              <a
                href={environment.discord}
                className='footer__button'
                target='_blank'
                rel='noreferrer'
              >
                <h4 className='footer__button-title'>
                  Join discord
                </h4>
              </a>
            </div>
            <div className='footer__legal'>
              <p className='footer__legal-rights'>
                2022 Larry. All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </MediaQuery>
      <MediaQuery minWidth={1025}>
        <footer className='footer'>
          <div className='footer__wrapper'>
            <div className='footer__legal'>
              <Logo />
              <p className='footer__legal-rights'>
                2022 Larry, The Adventurer. All rights reserved
              </p>
            </div>
            <div className='footer__socials'>
              <Social />
            </div>
          </div>
        </footer>
      </MediaQuery>
    </>
  );
};

export default Footer;
