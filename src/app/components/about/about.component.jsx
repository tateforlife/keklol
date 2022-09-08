import React from 'react';

import './about.styles.scss';

const About = () => {
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
      threshold: 0.4,
    })

    const els = document.getElementsByClassName('reveal-2');
    Array.from(els).forEach((el) => {
      observer.observe(el);
    })
  }, []);

  return (
    <div className='about'>
      <div className='about__gradient'></div>
      <div className='about__works reveal-2'>
        <img src='about_question.png' alt='about question' />
        <h4 className='about__heading'>How it works?</h4>
      </div>
      <div className="about__steps">
        <div className='about__step'>
          <div className='about__separator'></div>
          <div className='about__number'>
            <img src='about_rect.png' />
            <h6 className='about__number-text about__number-text--1'>1</h6>
          </div>
          <div className="about__heading--small">
            Deposit
          </div>
          <div className="about__description">
            Project launch starts with
            presale between private
            made community
          </div>
          <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="35.3553" width="50" height="50" rx="10" transform="rotate(-45 0 35.3553)" fill="#3143EA"/>
            <path d="M35.5 25.4237C28.8129 25.4237 22.7486 29.0823 18.2739 35.0248C17.9087 35.5117 17.9087 36.1918 18.2739 36.6787C22.7486 42.6284 28.8129 46.287 35.5 46.287C42.1871 46.287 48.2514 42.6284 52.7261 36.6859C53.0913 36.199 53.0913 35.5188 52.7261 35.032C48.2514 29.0823 42.1871 25.4237 35.5 25.4237ZM35.9797 43.2011C31.5407 43.4804 27.875 39.8218 28.1542 35.3756C28.3833 31.7099 31.3546 28.7386 35.0203 28.5095C39.4593 28.2303 43.125 31.8889 42.8458 36.335C42.6095 39.9936 39.6383 42.9649 35.9797 43.2011ZM35.7577 39.8075C33.3664 39.9578 31.3904 37.9889 31.5479 35.5976C31.6696 33.6215 33.2733 32.0249 35.2494 31.896C37.6407 31.7457 39.6168 33.7146 39.4593 36.1059C39.3304 38.0891 37.7267 39.6858 35.7577 39.8075Z" fill="white"/>
          </svg>
        </div>
        <div className='about__step'>
          <div className='about__separator'></div>
          <div className='about__number'>
            <img src='about_rect.png' />
            <h6 className='about__number-text about__number-text--2'>2</h6>
          </div>
          <div className="about__heading--small">
            Create Lobby
          </div>
          <div className="about__description">
            Staking system provided
            through additional
            smart-contract
          </div>
          <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="35.3553" width="50" height="50" rx="10" transform="rotate(-45 0 35.3553)" fill="#3143EA"/>
            <path d="M35.5 25.4237C28.8129 25.4237 22.7486 29.0823 18.2739 35.0248C17.9087 35.5117 17.9087 36.1918 18.2739 36.6787C22.7486 42.6284 28.8129 46.287 35.5 46.287C42.1871 46.287 48.2514 42.6284 52.7261 36.6859C53.0913 36.199 53.0913 35.5188 52.7261 35.032C48.2514 29.0823 42.1871 25.4237 35.5 25.4237ZM35.9797 43.2011C31.5407 43.4804 27.875 39.8218 28.1542 35.3756C28.3833 31.7099 31.3546 28.7386 35.0203 28.5095C39.4593 28.2303 43.125 31.8889 42.8458 36.335C42.6095 39.9936 39.6383 42.9649 35.9797 43.2011ZM35.7577 39.8075C33.3664 39.9578 31.3904 37.9889 31.5479 35.5976C31.6696 33.6215 33.2733 32.0249 35.2494 31.896C37.6407 31.7457 39.6168 33.7146 39.4593 36.1059C39.3304 38.0891 37.7267 39.6858 35.7577 39.8075Z" fill="white"/>
          </svg>
        </div>
        <div className='about__step'>
          <div className='about__separator'></div>
          <div className='about__number'>
            <img src='about_rect.png' />
            <h6 className='about__number-text about__number-text--3'>3</h6>
          </div>
          <div className="about__heading--small">
            Play
          </div>
          <div className="about__description">
            Token allocation that
            will guide  the project
            to the future
          </div>
          <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="35.3553" width="50" height="50" rx="10" transform="rotate(-45 0 35.3553)" fill="#3143EA"/>
            <path d="M35.5 25.4237C28.8129 25.4237 22.7486 29.0823 18.2739 35.0248C17.9087 35.5117 17.9087 36.1918 18.2739 36.6787C22.7486 42.6284 28.8129 46.287 35.5 46.287C42.1871 46.287 48.2514 42.6284 52.7261 36.6859C53.0913 36.199 53.0913 35.5188 52.7261 35.032C48.2514 29.0823 42.1871 25.4237 35.5 25.4237ZM35.9797 43.2011C31.5407 43.4804 27.875 39.8218 28.1542 35.3756C28.3833 31.7099 31.3546 28.7386 35.0203 28.5095C39.4593 28.2303 43.125 31.8889 42.8458 36.335C42.6095 39.9936 39.6383 42.9649 35.9797 43.2011ZM35.7577 39.8075C33.3664 39.9578 31.3904 37.9889 31.5479 35.5976C31.6696 33.6215 33.2733 32.0249 35.2494 31.896C37.6407 31.7457 39.6168 33.7146 39.4593 36.1059C39.3304 38.0891 37.7267 39.6858 35.7577 39.8075Z" fill="white"/>
          </svg>
        </div>
        <div className='about__step'>
          <div className='about__separator'></div>
          <div className='about__number'>
            <img src='about_rect.png' />
            <h6 className='about__number-text about__number-text--4'>4</h6>
          </div>
          <div className="about__heading--small">
          Withdraw
          </div>
          <div className="about__description">
          Closed game launch
          for private alpha
          group
          </div>
          <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="35.3553" width="50" height="50" rx="10" transform="rotate(-45 0 35.3553)" fill="#3143EA"/>
            <path d="M35.5 25.4237C28.8129 25.4237 22.7486 29.0823 18.2739 35.0248C17.9087 35.5117 17.9087 36.1918 18.2739 36.6787C22.7486 42.6284 28.8129 46.287 35.5 46.287C42.1871 46.287 48.2514 42.6284 52.7261 36.6859C53.0913 36.199 53.0913 35.5188 52.7261 35.032C48.2514 29.0823 42.1871 25.4237 35.5 25.4237ZM35.9797 43.2011C31.5407 43.4804 27.875 39.8218 28.1542 35.3756C28.3833 31.7099 31.3546 28.7386 35.0203 28.5095C39.4593 28.2303 43.125 31.8889 42.8458 36.335C42.6095 39.9936 39.6383 42.9649 35.9797 43.2011ZM35.7577 39.8075C33.3664 39.9578 31.3904 37.9889 31.5479 35.5976C31.6696 33.6215 33.2733 32.0249 35.2494 31.896C37.6407 31.7457 39.6168 33.7146 39.4593 36.1059C39.3304 38.0891 37.7267 39.6858 35.7577 39.8075Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div className="about__triangle-box">
        <div className="about__triangle"></div>
      </div>
    </div>
  );
};

export default About;
