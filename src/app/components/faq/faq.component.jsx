import React from 'react';

import './faq.styles.scss';

const FAQ = () => {
  return (
    <div className='faq'>
      <span id="faq"></span>
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
            You will be able to mint directly from our website in 2022.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>What is Coin Flip ($CFC) Token? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg></summary>
          <p className='faq__list-item-paragraph'>
            “Larry in the Office” supply is 1111 NFT.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>How to buy Coin Flip ($CFC) Token? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg></summary>
          <p className='faq__list-item-paragraph'>
            1 “Larry in the office“ Season 1 NFT will cost 0.1 ETH
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>Is Coin Flip team verified? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg></summary>
          <p className='faq__list-item-paragraph'>
          You can get access to a whitelist by participating in campaigns on our Social Media (Twitter, Instagram, Discord).
          </p>
          <p className='faq__list-item-paragraph'>
            Check our Discord for more information.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>How can such high APY be sustainable? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg></summary>
          <p className='faq__list-item-paragraph'>
            We offer a number of wallet connections for minting, but MetaMask is the recommended wallet.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>Is Coin Flip&quot;s contract audited? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg></summary>
          <p className='faq__list-item-paragraph'>
            We offer a number of wallet connections for minting, but MetaMask is the recommended wallet.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>What is SAFU? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg></summary>
          <p className='faq__list-item-paragraph'>
            We offer a number of wallet connections for minting, but MetaMask is the recommended wallet.
          </p>
        </details>
        <details className='faq__list-item'>
          <summary>Is it safe to invest in Coin Flip (SAFU)? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 0H7V7H0V13H7V20H13V13H20V7H13V0Z" fill="#9960FF"/>
          </svg></summary>
          <p className='faq__list-item-paragraph'>
            We offer a number of wallet connections for minting, but MetaMask is the recommended wallet.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
