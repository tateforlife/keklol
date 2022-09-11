import React from 'react';

import './faq.styles.scss';

const FAQ = () => {
  return (
    <div className='faq'>
      <span id="faq"></span>
      <svg width="42" height="56" viewBox="0 0 42 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.8438 52.5L36.9375 48.5938C38.9688 45.625 38.6563 41.4062 36 38.75C34.4375 37.3437 32.4062 36.5625 30.375 36.5625C28.3438 36.5625 26.3125 37.3437 24.9062 38.9062C21.9375 41.875 21.9375 46.875 24.9062 50C26.3125 51.4062 28.3438 52.3437 30.375 52.3437C31.9375 52.3437 33.3437 51.875 34.75 51.0937L38.6562 55C39.2812 55.625 40.2188 55.625 40.8438 55C41.3125 54.2187 41.3125 53.125 40.8438 52.5Z" fill="white"/>
        <path d="M22.7188 36.7188C24.75 34.6875 27.5625 33.4375 30.375 33.4375C33.1875 33.4375 36 34.5312 38.0312 36.7188C39.2812 37.9688 40.2188 39.5312 40.6875 41.0938C41 40.1562 41.3125 39.2188 41.3125 38.2812V24.0625C41.3125 19.6875 37.875 16.25 33.5 16.25H8.5C4.125 16.25 0.6875 19.6875 0.6875 24.0625V53.75C0.6875 54.375 1 54.8438 1.625 55.1562C1.78125 55.3125 2.09375 55.3125 2.25 55.3125C2.5625 55.3125 3.03125 55.1562 3.34375 55C8.03125 50.9375 13.8125 48.125 19.75 46.875C18.9688 43.2812 19.9062 39.375 22.7188 36.7188ZM13.1875 27.1875H22.5625C23.5 27.1875 24.125 27.8125 24.125 28.75C24.125 29.6875 23.5 30.3125 22.5625 30.3125H13.1875C12.25 30.3125 11.625 29.6875 11.625 28.75C11.625 27.8125 12.25 27.1875 13.1875 27.1875ZM17.875 36.5625H13.1875C12.25 36.5625 11.625 35.9375 11.625 35C11.625 34.0625 12.25 33.4375 13.1875 33.4375H17.875C18.8125 33.4375 19.4375 34.0625 19.4375 35C19.4375 35.9375 18.8125 36.5625 17.875 36.5625Z" fill="white"/>
        <path d="M17.455 0.5L14.995 0.935L16.2975 8.32L18.7575 7.885L17.455 0.5ZM27.005 0.935L24.545 0.5L23.2425 7.885L25.7075 8.32L27.005 0.935ZM36 4.005L33.8325 2.755L30.0825 9.25L32.25 10.5L36 4.005ZM8.1675 2.755L6 4.005L9.75 10.5L11.9175 9.25L8.1675 2.755Z" fill="white"/>
      </svg>
      <h3 className='faq__heading'>
        CoinFlip <br /><span>F.A.Q</span>
      </h3>
      <div className='faq__list'>
        <details className='faq__list-item'>
          <summary>What is Coin Flip? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg>
          </summary>
          <p className='faq__list-item-paragraph'>
            Coin Flip is a web 3.0 level game that allows you to win, earn, stake and participate in games with players around the world.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>What is Coin Flip ($CFC) Token? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg></summary>
          <p className='faq__list-item-paragraph'>
            In simple words, Coin Flip coin is the main engine in all project processes: 1in1 game, jackpot, staking, rewards, and so on - all this functions only on the $CFC token, making the coin indispensable for playing and earning along with Coin Flip platform.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>How to buy Coin Flip ($CFC) Token? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg></summary>
          <p className='faq__list-item-paragraph'>
            $CFC can be purchased or sold on our partnered DEX Pancakeswap and the liquidity pair will be CFC/BNB.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>Is Coin Flip team verified? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg></summary>
          <p className='faq__list-item-paragraph'>
          Yes, Coin Flip team has been KYC verified by trusted verification partner “HZ KTO”. Please find more information regarding KYC report in &quot;Team KYC&quot; whitepaper section.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>How can such high APY be sustainable? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg></summary>
          <p className='faq__list-item-paragraph'>
          We sustain the APY of our token distribution phase through hardwired taxes, fees and external revenues.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>Is Coin Flip&quot;s contract audited? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg></summary>
          <p className='faq__list-item-paragraph'>
          Yes, Coin Flip have safe smart contract that has been audited by HZ KTO. Please find more information regarding KYC report in &quot;Smart-contract&quot; whitepaper section.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>What is SAFU? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg></summary>
          <p className='faq__list-item-paragraph'>
          SAFU Badge means that the project cannot be manipulated by the developer to hurt investors and gain an unfair advantage over them. SAFU badge will be given to KYCed projects that meet below specifications and ownership held by SAFU Developer.
          </p>
          <p className='faq__list-item-paragraph'>
          Read more by following link <a href="https://docs.pinksale.finance/important/safu-contract">https://docs.pinksale.finance/important/safu-contract</a>
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>Is it safe to invest in Coin Flip (SAFU)? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg></summary>
          <p className='faq__list-item-paragraph'>
            Yes, our partner in public sale Pink Sale awarded us the SAFU badge, showing our project full confidence.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
