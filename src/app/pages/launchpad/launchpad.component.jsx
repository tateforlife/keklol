import React from 'react';
import PropTypes from 'prop-types';

import './launchpad.styles.scss';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

const LaunchpadComponent = ({
  currentAccount,
  setCurrentAccount,
}) => {
  return (
    <section className='launchpad'>
      <Header
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <div className="launchpad__wrapper">
        <div className="launchpad__left">
          <h2 className="launchpad__head">
            Coin Flip <br /> <span>Private Sale</span>
          </h2>
          <p className="launchpad__para">
          Coin Flip private sale will begin on October 8th and <br />
will be hosted on our private launchpad.
          </p>
          <div className="launchpad__features">
            <div className="launchpad__feature">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_302_254)" strokeWidth="3"/>
                <defs>
                  <linearGradient id="paint0_linear_302_254" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9960FF"/>
                    <stop offset="1" stopColor="#19D6E2"/>
                  </linearGradient>
                </defs>
              </svg>
              <p className="launchpad__feature-text">
                Start: Fri, 12 Oct 2022 04:20:00 GMT
              </p>
            </div>
            <div className="launchpad__feature">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_302_254)" strokeWidth="3"/>
                <defs>
                  <linearGradient id="paint0_linear_302_254" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9960FF"/>
                    <stop offset="1" stopColor="#19D6E2"/>
                  </linearGradient>
                </defs>
              </svg>
              <p className="launchpad__feature-text">
                Softcap: 99998 BNB
              </p>
            </div>
            <div className="launchpad__feature">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_302_254)" strokeWidth="3"/>
                <defs>
                  <linearGradient id="paint0_linear_302_254" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9960FF"/>
                    <stop offset="1" stopColor="#19D6E2"/>
                  </linearGradient>
                </defs>
              </svg>
              <p className="launchpad__feature-text">
                Hardcap: 99999 BNB
              </p>
            </div>
            <div className="launchpad__feature">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_302_254)" strokeWidth="3"/>
                <defs>
                  <linearGradient id="paint0_linear_302_254" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9960FF"/>
                    <stop offset="1" stopColor="#19D6E2"/>
                  </linearGradient>
                </defs>
              </svg>
              <p className="launchpad__feature-text">
                Min Buy: 0.5 BNB
              </p>
            </div>
            <div className="launchpad__feature">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_302_254)" strokeWidth="3"/>
                <defs>
                  <linearGradient id="paint0_linear_302_254" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9960FF"/>
                    <stop offset="1" stopColor="#19D6E2"/>
                  </linearGradient>
                </defs>
              </svg>
              <p className="launchpad__feature-text">
                Max. Buy: 10 BNB
              </p>
            </div>
          </div>
        </div>
        <div className="launchpad__right">
          <img src="launchpad.png" />
          <div className="launchpad__timer">
            <h5 className="launchpad__timer-heading">Token Sale Starts In:</h5>
            <div className="launchpad__timer-wrapper">
              <div className="launchpad__timer-item">
                <div className="launchpad__timer-kek">
                  15
                </div>
                <div className="launchpad__timer-name">
                  Days
                </div>
              </div>
              <div className="launchpad__timer-item">
                <div className="launchpad__timer-kek">
                  12
                </div>
                <div className="launchpad__timer-name">
                  Hours
                </div>
              </div>
              <div className="launchpad__timer-item">
                <div className="launchpad__timer-kek">
                  36
                </div>
                <div className="launchpad__timer-name">
                  Minutes
                </div>
              </div>
              <div className="launchpad__timer-item">
                <div className="launchpad__timer-kek">
                  58
                </div>
                <div className="launchpad__timer-name">
                  Seconds
                </div>
              </div>
            </div>
          </div>
          <div className="launchpad__progress-1">
            <p className="launchpad__progress-name">
              Raised - <span>55.64 BNB</span>
            </p>
            <p className="launchpad__progress-name">
              Target - <span>500 BNB</span>
            </p>
          </div>
          <div className="progress-bar">
            <span className="bar">
              <span className="progress"></span>
            </span>
          </div>
          <p className="launchpad__para">
          The Private Sale will be completed as soon as 500 BNB is raised. <br/>
Click here to buy.
          </p>
          <div className="launchpad__progress-1">
            <p className="launchpad__progress-name">
              <span>Min. Buy : 0.5 BNB</span>
            </p>
            <p className="launchpad__progress-name">
              <span>Max. Buy : 10 BNB</span>
            </p>
          </div>
          <div className="launchpad__action">
            <input defaultValue={0.5} id="subscribe"
              name="subscribe" className='launchpad__input' type="number" />
            <button className='launchpad__button'>Buy CFC</button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

LaunchpadComponent.propTypes = {
  currentAccount: PropTypes.string,
  setCurrentAccount: PropTypes.func,
}

export default LaunchpadComponent;
