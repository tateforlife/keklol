/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import './header.styles.scss';

import Logo from './logo/logo.component';
import Menu from './menu/menu.component';
import Social from './social/social.component';
// import Wallet from './wallet/wallet.component';
import MobileMenu from './mobile-menu/mobile-menu.component';

const Header = ({ currentAccount, setCurrentAccount }) => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Logo />
        <Menu />
        <Social />
        {/* <Wallet
          // onlyAddress
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
        /> */}
        <MobileMenu />
        {/* <svg className='header__gradient' width="428" height="894" viewBox="0 0 428 894" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5" filter="url(#filter0_f_47_2129)">
            <ellipse cx="14" cy="346.911" rx="350" ry="347.911" fill="url(#paint0_radial_47_2129)" fillOpacity="0.5"/>
            <ellipse cx="75.2732" cy="291.904" rx="141.114" ry="140.186" fill="#81DEC2"/>
            <ellipse cx="-26.8488" cy="291.904" rx="141.114" ry="140.186" fill="#AE7DE4"/>
            <ellipse cx="20.9629" cy="381.957" rx="154.576" ry="166.18" fill="#58C0C6"/>
            <ellipse cx="70.1671" cy="432.09" rx="141.114" ry="140.186" fill="#C37FF5"/>
          </g>
          <defs>
            <filter id="filter0_f_47_2129" x="-535" y="-200" width="1098" height="1093.82" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="99.5" result="effect1_foregroundBlur_47_2129"/>
            </filter>
            <radialGradient id="paint0_radial_47_2129" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14 346.911) rotate(90) scale(226.764 228.125)">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="#202742" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg> */}
      </div>
    </header>
  );
};


Header.propTypes = {
  currentAccount: PropTypes.string,
  setCurrentAccount: PropTypes.func,
};

export default Header;
