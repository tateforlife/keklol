import React from 'react';
import PropTypes from 'prop-types';

import './staking.styles.scss';
import './slider.css';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

const StakingComponent = ({
  currentAccount,
  setCurrentAccount,
}) => {
  const [item, setItem] = React.useState(0);

  return (
    <section className='staking'>
      <Header
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <div className="staking__wrapper">
        <div className="staking__menu">
          <div className="staking__menu-item">
            <h5 className="staking__menu-heading">
              Stake CFC
            </h5>
            <svg className='staking__menu-divider' width="127" height="4" viewBox="0 0 127 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="2" x2="127" y2="2" stroke="url(#paint0_linear_157_257)" strokeWidth="4"/>
              <defs>
                <linearGradient id="paint0_linear_157_257" x1="0" y1="4" x2="127" y2="4" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2CAAD4"/>
                  <stop offset="1" stopColor="#9A68F3"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="staking__menu-item">
            <h5 className="staking__menu-heading">
              My Stake
            </h5>
          </div>
        </div>
        <div className="staking__board">
          <h4 className="staking__term">Choose Stake Term:</h4>
          <div className="staking__options">
            <div className={`staking__option ${item === 0 ? 'staking__option--selected' : ''}`} onClick={() => setItem(0)}>
              <h5 className="staking__option-heading">
                30 Days
              </h5>
              <p className="staking__option-description">
                45% APY
              </p>
            </div>
            <div className={`staking__option ${item === 1 ? 'staking__option--selected' : ''}`} onClick={() => setItem(1)}>
              <h5 className="staking__option-heading">
                90 Days
              </h5>
              <p className="staking__option-description">
                60% APY
              </p>
            </div>
            <div className={`staking__option ${item === 2 ? 'staking__option--selected' : ''}`} onClick={() => setItem(2)}>
              <h5 className="staking__option-heading">
                180 Days
              </h5>
              <p className="staking__option-description">
                95% APY
              </p>
            </div>
            <div className={`staking__option ${item === 3 ? 'staking__option--selected' : ''}`} onClick={() => setItem(3)}>
              <h5 className="staking__option-heading">
                365 Days
              </h5>
              <p className="staking__option-description">
                135% APY
              </p>
            </div>
          </div>
        </div>
        <svg className='staking__back' width="1440" height="1066" viewBox="0 0 1440 1066" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_604_731)">
            <ellipse cx="720" cy="715.703" rx="720" ry="715.703" fill="url(#paint0_radial_604_731)" fillOpacity="0.5"/>
            <ellipse cx="846.048" cy="602.547" rx="290.292" ry="288.382" fill="#81DEC2"/>
            <ellipse cx="635.968" cy="602.547" rx="290.292" ry="288.382" fill="#AE7DE4"/>
            <ellipse cx="734.324" cy="787.799" rx="317.984" ry="341.857" fill="#58C0C6"/>
            <ellipse cx="835.544" cy="890.928" rx="290.292" ry="288.382" fill="#C37FF5"/>
          </g>
          <defs>
            <filter id="filter0_f_604_731" x="-199" y="-199" width="1838" height="1829.41" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="99.5" result="effect1_foregroundBlur_604_731"/>
            </filter>
            <radialGradient id="paint0_radial_604_731" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720 715.703) rotate(90) scale(466.485 469.286)">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="#202742" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Footer />
    </section>
  );
};

StakingComponent.propTypes = {
  currentAccount: PropTypes.string,
  setCurrentAccount: PropTypes.func,
}

export default StakingComponent;
