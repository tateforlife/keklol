import React from 'react';
import PropTypes from 'prop-types';

import { arr as randomArray } from './arr';

import './launchpad.styles.scss';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import useCountdownHook from '../../hooks/countdown.hook';

const LaunchpadComponent = ({
  currentAccount,
  setCurrentAccount,
}) => {
  const { splitItems } = useCountdownHook('Feb 25, 2024 00:00:00 UTC-0200');
  const [days, hours, minutes, seconds] = splitItems;
  const [progress, setProgress] = React.useState(50);

  const start = new Date('Feb 22, 2024 15:00:00 UTC-0200');
  const end = new Date('Feb 23, 2024 01:00:00 UTC-0200');

  function normalizeArray(arr, targetSum) {
    const currentSum = arr.reduce((acc, num) => acc + num, 0);
    const scaleFactor = targetSum / currentSum;
    return arr.map((num) => num * scaleFactor);
  }

  Math.seed = 42;
  const normalizedArray = normalizeArray(randomArray, 500);

  // console.log('Normalized Array:', normalizedArray);
  console.log('Sum of the Array:', normalizedArray.reduce((acc, num) => acc + num, 0));

  const getProgress = (startDate, endDate) => {
    const currentDate = new Date(Date.now());
    const targetTimeZone = 'Europe/Riga';
    const formattedDate = currentDate.toLocaleString('en-US', {
      timeZone: targetTimeZone,
    });
    const formattedDateInSeconds = Math.floor(new Date(formattedDate).getTime());
    const total = +endDate - +startDate;
    const elaps = formattedDateInSeconds - start;
    return ((elaps / total) * 100).toFixed(3);
  };

  React.useEffect(() => {
    setProgress(getProgress(start, end));
    console.log('Between dates %: ', getProgress(start, end))
  }, [splitItems]);

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
                Softcap: 99998 SOL
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
                Hardcap: 99999 SOL
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
                Min Buy: 0.5 SOL
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
                Max. Buy: 10 SOL
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
                  {days}
                </div>
                <div className="launchpad__timer-name">
                  Days
                </div>
              </div>
              <div className="launchpad__timer-item">
                <div className="launchpad__timer-kek">
                  {hours}
                </div>
                <div className="launchpad__timer-name">
                  Hours
                </div>
              </div>
              <div className="launchpad__timer-item">
                <div className="launchpad__timer-kek">
                  {minutes}
                </div>
                <div className="launchpad__timer-name">
                  Minutes
                </div>
              </div>
              <div className="launchpad__timer-item">
                <div className="launchpad__timer-kek">
                  {seconds}
                </div>
                <div className="launchpad__timer-name">
                  Seconds
                </div>
              </div>
            </div>
          </div>
          <div className="launchpad__progress-1">
            <p className="launchpad__progress-name">
              Raised - <span>55.64 SOL</span>
            </p>
            <p className="launchpad__progress-name">
              Target - <span>500 SOL</span>
            </p>
          </div>
          <div className="progress-bar" style={{'--bar-length': `${progress}%`}}>
            <span className="bar">
              <span className="progress"></span>
            </span>
          </div>
          <p className="launchpad__para">
          The Private Sale will be completed as soon as 500 SOL is raised. <br/>
Click here to buy.
          </p>
          <div className="launchpad__progress-1">
            <p className="launchpad__progress-name">
              <span>Min. Buy : 0.5 SOL</span>
            </p>
            <p className="launchpad__progress-name">
              <span>Max. Buy : 10 SOL</span>
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
