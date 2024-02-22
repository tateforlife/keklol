import React from 'react';
import MediaQuery from 'react-responsive'

import './partners.styles.scss'
import environment from '../../../environment/environment';

const Partners = () => {
  React.useEffect(() => {
    const el = document.getElementById('logo-box');
    el.scrollLeft += 100;
  }, []);

  return (
    <div className="partners" id="partners">
      <div className="partners__wrapper">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.5067 52.0467C41.5533 52.81 41.7833 54.2833 41.0067 55.3267L38.3167 58.9667C37.6 59.9467 36.0433 60.2133 35.03 59.47C33.9833 58.7 33.7533 57.23 34.5233 56.1833L37.22 52.5433C37.9833 51.51 39.4533 51.27 40.5067 52.0467ZM24.0767 48.56L26.7667 44.9367C27.5333 43.89 27.3133 42.42 26.26 41.6467C25.2067 40.8733 23.74 41.1033 22.9733 42.15L20.2867 45.7767C19.52 46.82 19.7433 48.2967 20.79 49.0667C21.7833 49.7933 23.35 49.5533 24.0767 48.56ZM32.4633 49.0867L29.78 52.7067C29.01 53.7567 29.24 55.23 30.2833 56C31.2867 56.7367 32.85 56.4833 33.5733 55.4967L36.2567 51.87C37.0267 50.8267 36.8 49.3533 35.7533 48.58C34.71 47.8133 33.2433 48.0367 32.4633 49.0867ZM44.34 56.1433C43.9133 57.15 42.7667 58.5633 41.9833 59.6233C42.5 59.89 43.0133 60 43.4867 60C45.2933 60 46.4933 58.2967 44.87 56.6733L44.34 56.1433ZM27.72 45.62L25.0133 49.2733C24.2467 50.32 24.49 51.76 25.5333 52.5333C26.56 53.2833 28.0933 53.0333 28.8033 52.0567L31.51 48.4C32.2833 47.36 32.0533 45.8833 31.0033 45.1133C29.9533 44.3467 28.4867 44.5767 27.72 45.62ZM70.2067 42.9167L80 40.3133L74.7233 20L64.7933 22.9867L70.2067 42.9167ZM61.9333 25.1767C57.09 25.53 52.4867 23.7467 47.43 21.1367C46.3167 20.5633 45.0333 20.0967 43.78 20.0967C42.6267 20.0967 41.4967 20.4933 40.55 21.5667C37.1367 25.4367 35.1533 28.8567 31.0867 31.2267C29.0833 32.3967 31.4333 36.06 35.74 34.5567C37.9333 33.7867 40.9067 31.8 43.33 29.8467C45.2367 28.31 46.3767 28.5333 48.03 30.1867C51.1233 33.2833 61.54 43.5633 61.54 43.5633C63.15 42.57 64.7067 41.7667 66.25 41.0767L61.9333 25.1767ZM15.2067 22.9867L5.27667 20L0 40.3133L9.79333 42.9167L15.2067 22.9867ZM59.8933 46.74C58.28 44.9567 47.4367 34.2967 45.51 32.3733C42.24 34.8267 37.9333 38.2433 33.7733 38.2433C30.63 38.2433 27.9333 36.3867 27.2133 33.73C26.6367 31.6133 27.5233 29.4467 29.4133 28.3433C31.78 26.9633 33.35 25.0733 35.2633 22.7067C29.4167 19.0133 24.43 25.0133 18.1 25.07L13.8567 40.6867C15.71 41.1267 17.3233 41.5933 18.82 42.1567L20.2867 40.1733C22.9267 36.57 28.4333 37.3167 30.12 41.3433C32.2533 41.53 34.0733 42.9067 34.8667 44.81C36.93 44.99 38.78 46.3 39.6067 48.2733C42.7267 48.5433 45.2733 51.3733 44.7067 54.8467L46.8867 57.0267C47.8033 57.9467 49.2967 57.9433 50.21 57.0267C51.13 56.1067 51.13 54.6167 50.21 53.6967L45.9967 49.48C45.7667 49.25 45.7667 48.87 46.0067 48.64C46.2367 48.42 46.6033 48.4233 46.83 48.6467L51.9067 53.7267C52.8233 54.6467 54.3167 54.6467 55.2333 53.7267C56.1533 52.8067 56.1533 51.32 55.2333 50.4L48.9833 44.1467C48.7433 43.91 48.7533 43.52 49.0033 43.2967C49.2333 43.0867 49.5967 43.09 49.8133 43.3133L56.5633 50.0633C57.48 50.9833 58.9733 50.9833 59.89 50.0633C60.81 49.1467 60.81 47.66 59.8933 46.74ZM35.2733 0L31.9933 0.58L33.73 10.4267L37.01 9.84667L35.2733 0ZM48.0067 0.58L44.7267 0L42.99 9.84667L46.2767 10.4267L48.0067 0.58ZM60 4.67333L57.11 3.00667L52.11 11.6667L55 13.3333L60 4.67333ZM22.89 3.00667L20 4.67333L25 13.3333L27.89 11.6667L22.89 3.00667Z" fill="white"/>
        </svg>
        <h3 className='partners__heading'>Partners &amp; <span>Collaborations</span></h3>
        <div className="partners__content">
          <div className="partners__text">
            <h3 className="partners__heading-small">
              Marketing campaign
            </h3>
            <a className='partners__link' href='#'>
              <div className="partners__divider"></div>
              {/* <svg className='more-arrow' width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.7281 8.70711C9.11863 8.31658 9.11863 7.68342 8.7281 7.29289L2.36414 0.928932C1.97362 0.538408 1.34045 0.538408 0.949928 0.928932C0.559404 1.31946 0.559404 1.95262 0.949928 2.34315L6.60678 8L0.949928 13.6569C0.559404 14.0474 0.559404 14.6805 0.949928 15.0711C1.34045 15.4616 1.97362 15.4616 2.36414 15.0711L8.7281 8.70711ZM7.021 9H8.021V7H7.021V9Z" fill="white"/>
              </svg> */}
            </a>
            <p className="partners__paragraph">
              <span>Partnerships with Top Tier CEX.</span> Blogs, news tabloids and world-class influencers. You can read more about this in the Partnerships &amp; Marketing section.</p>
            <div className="partners__features">
              <div className="partners__feature">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_302_254)" strokeWidth="3"/>
                  <defs>
                    <linearGradient id="paint0_linear_302_254" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9960FF"/>
                      <stop offset="1" stopColor="#19D6E2"/>
                    </linearGradient>
                  </defs>
                </svg>
                <p className="partners__feature-text">
                  500+ influencers
                </p>
              </div>
              <div className="partners__feature">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_302_254)" strokeWidth="3"/>
                  <defs>
                    <linearGradient id="paint0_linear_302_254" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9960FF"/>
                      <stop offset="1" stopColor="#19D6E2"/>
                    </linearGradient>
                  </defs>
                </svg>
                <p className="partners__feature-text">
                  $ 300 000 invested
                </p>
              </div>
              <div className="partners__feature">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_302_254)" strokeWidth="3"/>
                  <defs>
                    <linearGradient id="paint0_linear_302_254" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9960FF"/>
                      <stop offset="1" stopColor="#19D6E2"/>
                    </linearGradient>
                  </defs>
                </svg>
                <p className="partners__feature-text">
                  50+ industry partners
                </p>
              </div>
              <div className="partners__feature">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_302_254)" strokeWidth="3"/>
                  <defs>
                    <linearGradient id="paint0_linear_302_254" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9960FF"/>
                      <stop offset="1" stopColor="#19D6E2"/>
                    </linearGradient>
                  </defs>
                </svg>
                <p className="partners__feature-text">
                  25+ influencers
                </p>
              </div>
            </div>
            <button className='partners__button' onClick={() => location.href = environment.telegram}>
              Join Now
            </button>
          </div>
          <MediaQuery maxWidth={1024}>
            <div className="partners__logos" id="logo-box">
              <div className="partners__mob">
                <div className="partners__logo">
                  <div className="partners__logo-wrapper">
                    <img src="/solscan.svg" />
                  </div>
                </div>
                <div className="partners__logo">
                  <div className="partners__logo-wrapper">
                    <img src="/ray.svg" />
                  </div>
                </div>
              </div>
              <div className="partners__mob">
                <div className="partners__logo">
                  <div className="partners__logo-wrapper">
                    <img src="/jupiter.svg" />
                  </div>
                </div>
                <div className="partners__logo">
                  <div className="partners__logo-wrapper">
                    <img src="/coincap.svg" />
                  </div>
                </div>
              </div>
              <div className="partners__mob">
                <div className="partners__logo">
                  <div className="partners__logo-wrapper">
                    <svg width="65" height="67" viewBox="0 0 65 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M56.5359 39.7652C55.3848 40.4741 54.0417 40.603 53.0184 40.023C51.7393 39.2496 50.9719 37.5095 50.9719 35.1248V27.8421C50.9719 24.3618 49.6288 21.8483 47.3265 21.2038C43.4252 20.0437 40.4833 24.8774 39.3961 26.682L32.489 37.8317V24.104C32.425 20.946 31.4018 19.077 29.4831 18.4969C28.204 18.1102 26.2854 18.3036 24.4307 21.1394L9.01761 46.0168C6.97106 42.0854 5.88383 37.7028 5.88383 33.2558C5.88383 18.2391 17.8434 6.05823 32.489 6.05823C47.1346 6.05823 59.0941 18.2391 59.0941 33.2558V33.3203V33.3847C59.222 36.2849 58.3267 38.6051 56.5359 39.7652ZM64.978 33.2558V33.1914V33.1269C64.914 14.8878 50.3323 0 32.489 0C14.5817 0 0 14.8878 0 33.2558C0 51.5594 14.5817 66.5116 32.489 66.5116C40.7391 66.5116 48.5416 63.3536 54.5534 57.6176C55.7685 56.4575 55.8324 54.5885 54.6813 53.364C53.594 52.1395 51.7393 52.075 50.5242 53.1706C50.5242 53.1706 50.5242 53.1706 50.4602 53.2351C45.5997 57.8754 39.0763 60.5178 32.3611 60.5178C24.4946 60.5178 17.4596 57.0376 12.5991 51.4949L26.4772 29.0666V39.4429C26.4772 44.4055 28.3959 46.0168 29.9948 46.4679C31.5936 46.9191 34.0239 46.5968 36.646 42.4076L44.2566 29.9689C44.5125 29.5822 44.7043 29.1955 44.9602 28.9377V35.2537C44.9602 39.8941 46.8148 43.6321 50.0126 45.4367C52.8905 47.1124 56.536 46.919 59.5418 45.05C63.2512 42.6009 65.2338 38.3473 64.978 33.2558Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <div className="partners__logo">
                  <div className="partners__logo-wrapper">
                    <img src="/dex.svg" />
                  </div>
                </div>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={1025}>
            <div className="partners__logos" id="logo-box">
              <div className="partners__logo">
                <div className="partners__logo-wrapper">
                  <img src="/solscan.svg" />
                  <h4 className="partners__name">
                    SolScan
                  </h4>
                </div>
              </div>
              <div className="partners__logo">
                <div className="partners__logo-wrapper">
                  <img src="/ray.svg" />
                  <h4 className="partners__name">
                    Raydium
                  </h4>
                </div>
              </div>
              <div className="partners__logo">
                <div className="partners__logo-wrapper">
                  <img src="/jupiter.svg" />
                  <h4 className="partners__name" style={{fontSize: 16, lineHeight: '24px'}}>
                    Jupiter
                  </h4>
                </div>
              </div>
              <div className="partners__logo">
                <div className="partners__logo-wrapper">
                  <img src="/coincap.svg" />
                  <h4 className="partners__name">
                    CoinGecko
                  </h4>
                </div>
              </div>
              <div className="partners__logo">
                <div className="partners__logo-wrapper">
                  <svg width="65" height="67" viewBox="0 0 65 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.5359 39.7652C55.3848 40.4741 54.0417 40.603 53.0184 40.023C51.7393 39.2496 50.9719 37.5095 50.9719 35.1248V27.8421C50.9719 24.3618 49.6288 21.8483 47.3265 21.2038C43.4252 20.0437 40.4833 24.8774 39.3961 26.682L32.489 37.8317V24.104C32.425 20.946 31.4018 19.077 29.4831 18.4969C28.204 18.1102 26.2854 18.3036 24.4307 21.1394L9.01761 46.0168C6.97106 42.0854 5.88383 37.7028 5.88383 33.2558C5.88383 18.2391 17.8434 6.05823 32.489 6.05823C47.1346 6.05823 59.0941 18.2391 59.0941 33.2558V33.3203V33.3847C59.222 36.2849 58.3267 38.6051 56.5359 39.7652ZM64.978 33.2558V33.1914V33.1269C64.914 14.8878 50.3323 0 32.489 0C14.5817 0 0 14.8878 0 33.2558C0 51.5594 14.5817 66.5116 32.489 66.5116C40.7391 66.5116 48.5416 63.3536 54.5534 57.6176C55.7685 56.4575 55.8324 54.5885 54.6813 53.364C53.594 52.1395 51.7393 52.075 50.5242 53.1706C50.5242 53.1706 50.5242 53.1706 50.4602 53.2351C45.5997 57.8754 39.0763 60.5178 32.3611 60.5178C24.4946 60.5178 17.4596 57.0376 12.5991 51.4949L26.4772 29.0666V39.4429C26.4772 44.4055 28.3959 46.0168 29.9948 46.4679C31.5936 46.9191 34.0239 46.5968 36.646 42.4076L44.2566 29.9689C44.5125 29.5822 44.7043 29.1955 44.9602 28.9377V35.2537C44.9602 39.8941 46.8148 43.6321 50.0126 45.4367C52.8905 47.1124 56.536 46.919 59.5418 45.05C63.2512 42.6009 65.2338 38.3473 64.978 33.2558Z" fill="white"/>
                  </svg>
                  <h4 className="partners__name">
                    CoinMarketCap
                  </h4>
                </div>
              </div>
              <div className="partners__logo">
                <div className="partners__logo-wrapper">
                  <img src="/dex.svg" />
                  <h4 className="partners__name" style={{fontSize: 16, lineHeight: '24px'}}>
                    DexScreener
                  </h4>
                </div>
              </div>
            </div>
          </MediaQuery>
        </div>
      </div>
    </div>
  );
};

export default Partners;
