import React from 'react';
import PropTypes from 'prop-types';

import './home.styles.scss';
import './slider.css';

import Header from '../../components/header/header.component';
import Welcome from '../../components/welcome/welcome.component';
import Roadmap from '../../components/roadmap/roadmap.component';
import Partners from '../../components/partners/partners.component';
import Carousel from '../../components/carousel/carousel.component';
import Phases from '../../components/phases/phases.component';
// import Larry from '../../components/larry/larry.component';
// import About from '../../components/about/about.component';
import Footer from '../../components/footer/footer.component';
// import Team from '../../components/team/team.component';
import FAQ from '../../components/faq/faq.component';

const HomePageComponent = ({
  currentAccount,
  setCurrentAccount,
  // publicActive,
  // presaleActive,
  // raffleStatus,
}) => {
  function reveal() {
    let mybutton = document.getElementById('myBtn');

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      mybutton.style.visibility = 'visible';
      mybutton.style.opacity = '1';
    } else {
      mybutton.style.visibility = 'hidden';
      mybutton.style.opacity = '0';
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', reveal);

    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  // React.useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 400) {
  //       console.log(true);
  //     } else {
  //       console.log(false);
  //     }
  //   });
  // }, []);

  return (
    <section className='home-page'>
      <Header
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <Welcome />
      <Carousel />
      <Roadmap />
      <Phases />
      <Partners />
      <FAQ />
      <Footer />
      <button onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }} id="myBtn" title="Go to top"><svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_628_1174)">
            <rect x="20" y="16" width="70" height="70" rx="10" fill="url(#paint0_linear_628_1174)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M55.1926 49.4352L45.2426 59.3852L41 55.1426L55.1421 41.0004L55.1922 41.0505L55.2426 41L69.3848 55.1421L65.1421 59.3848L55.1926 49.4352Z" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_d_628_1174" x="0" y="0" width="110" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.0740659 0 0 0 0 0.050434 0 0 0 0 0.345833 0 0 0 0.2 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_628_1174"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_628_1174" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_628_1174" x1="20" y1="16" x2="101.976" y2="35.4022" gradientUnits="userSpaceOnUse">
              <stop stopColor="#09BECA"/>
              <stop offset="1" stopColor="#9A68F3"/>
            </linearGradient>
          </defs>
        </svg>
      </button>
    </section>
  );
};

HomePageComponent.propTypes = {
  network: PropTypes.string,
  currentAccount: PropTypes.string,
  setCurrentAccount: PropTypes.func,
  publicActive: PropTypes.bool,
  presaleActive: PropTypes.bool,
  raffleStatus: PropTypes.bool,
  setMintType: PropTypes.func,
  setMintProof: PropTypes.func,
}

export default HomePageComponent;
