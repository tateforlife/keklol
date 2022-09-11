import React from 'react';

import './roadmap.styles.scss';

const Roadmap = () => {
  React.useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        } else {
          if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove('active')
          }
        }
      })
    }

    const observer = new IntersectionObserver(callback, {
      threshold: 1,
    })

    const els = document.getElementsByClassName('reveal');
    Array.from(els).forEach((el) => {
      observer.observe(el);
    })
  }, []);

  return (
    <div className='roadmap'>
      <div className="roadmap__content">
        <svg className='roadmap__tree' xmlns="http://www.w3.org/2000/svg" width="91" height="3047" viewBox="0 0 91 3047" fill="none">
          <line x1="1.5" y1="-6.55671e-08" x2="1.50013" y2="3047" stroke="white" strokeWidth="3"/>
          <path d="M2 297L79.9757 422.604C85.8743 432.105 89 443.066 89 454.25V457M2 2949L74.8259 2862.83C83.9785 2852 89 2838.28 89 2824.1L89 2697M89 498.5L89 847.5M89 893.5L89 1493.5M89 1538L89 2089M89 2134L89 2652" stroke="white" strokeWidth="3"/>
        </svg>
        <div className="roadmap__platform">
          <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7373 0.0370327L1.57586 4.46795C1.10023 4.59835 1.08063 5.26569 1.54779 5.42377L18.4459 11.1421C18.5565 11.1795 18.6767 11.1771 18.7856 11.1352L33.6052 5.43637C34.0532 5.26411 34.0247 4.62097 33.5633 4.48897L18.007 0.0385235C17.9189 0.0133261 17.8256 0.0128103 17.7373 0.0370327Z" fill="white"/>
            <path d="M7 19.8059V9.79999L17.6357 12.9281C18.0041 13.0365 18.3959 13.0365 18.7643 12.9281L29.4 9.79999V19.8059L19.0465 22.851C18.4939 23.0136 17.9061 23.0136 17.3535 22.851L7 19.8059Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.82803 13.2364C2.61322 13.4927 2.47803 13.8652 2.47803 14.2799C2.47803 15.0531 2.94813 15.6799 3.52803 15.6799C4.10793 15.6799 4.57803 15.0531 4.57803 14.2799C4.57803 13.8652 4.44284 13.4927 4.22803 13.2364V8.3996H2.82803V13.2364Z" fill="white"/>
          </svg>
          <h3 className="roadmap__heading reveal">
            Quick platform
            guide for clear
            vision
          </h3>
          <a className='roadmap__link' href='#'>
            Read more in the Whitepaper
            <svg className='more-arrow' width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.7281 8.70711C9.11863 8.31658 9.11863 7.68342 8.7281 7.29289L2.36414 0.928932C1.97362 0.538408 1.34045 0.538408 0.949928 0.928932C0.559404 1.31946 0.559404 1.95262 0.949928 2.34315L6.60678 8L0.949928 13.6569C0.559404 14.0474 0.559404 14.6805 0.949928 15.0711C1.34045 15.4616 1.97362 15.4616 2.36414 15.0711L8.7281 8.70711ZM7.021 9H8.021V7H7.021V9Z" fill="white"/>
            </svg>
          </a>
          <div className="roadmap__divider"></div>
        </div>
        <div className="roadmap__item roadmap__item--0 reveal">
          <div className="roadmap__item-content">
            <div className="roadmap__separator"></div>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="7.5" r="6" stroke="white" strokeWidth="3"/>
            </svg>
            <p className="roadmap__text">
              <span>Connect wallet.</span> To start interacting with the coinflip platform, you need to buy a $CFC token and connect your wallet by clicking on the &quot;Connect Wallet&quot; button at the top of the site.
            </p>
          </div>
          <div className="roadmap__item-image">
            <img src="roadmap_1.png" alt="roadmap deposit" />
          </div>
        </div>
        <div className="roadmap__item roadmap__item--1 reveal">
          <div className="roadmap__item-content">
            <div className="roadmap__separator"></div>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="7.5" r="6" stroke="white" strokeWidth="3"/>
            </svg>
            <p className="roadmap__text">
              <span>Deposit Balance.</span> To get access
              to the platform you have to be
              the holder <span>$ETF</span> tokens, verify
              by connecting your wallet. “+” button at the top of the screen.
            </p>
          </div>
          <div className="roadmap__item-image">
            <img src="roadmap_1.png" alt="roadmap deposit" />
          </div>
        </div>
        <div className="roadmap__item roadmap__item--2 reveal">
          <div className="roadmap__item-content">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="7.5" r="6" stroke="white" strokeWidth="3"/>
            </svg>
            <p className="roadmap__text">
              <span>Find &amp; Create Game.</span> Once your
              tokens are deposited, choose
              the lobby or create one. “Head
              or Tail” wait till game starts.
            </p>
          </div>
          <div className="roadmap__item-image">
            <img src="roadmap_2.png" alt="roadmap game" />
          </div>
        </div>
        <div className="roadmap__item roadmap__item--3 reveal">
          <div className="roadmap__item-content">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="7.5" r="6" stroke="white" strokeWidth="3"/>
            </svg>
            <p className="roadmap__text">
              <span>Join Platform.</span> First you connect your wallet. Deposit your tokens to the platform using “+” button at the top of the screen.
            </p>
          </div>
          <div className="roadmap__item-image">
            <img src="roadmap_3.png" alt="roadmap join" />
          </div>
        </div>
        <div className="roadmap__item roadmap__item--4 reveal">
          <div className="roadmap__item-content">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="7.5" r="6" stroke="white" strokeWidth="3"/>
            </svg>
            <p className="roadmap__text">
              <span>Join Platform.</span> First you connect your wallet. Deposit your tokens to the platform using “+” button at the top of the screen.
            </p>
          </div>
          <div className="roadmap__item-image">
            <img src="roadmap_4.png" alt="roadmap join 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
