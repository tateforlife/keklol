import React from 'react';

import './team.styles.scss';

const Team = () => {
  return (
    <div className='team'>
      <span id="team"></span>
      <h3 className='team__heading'>Team</h3>
      <div className='team__players'>
        <div className='team__player'>
          <img className='team__player-img' src='/dio.png' alt='Dio' />
          <div className="team__player-wrapper">
            <h5 className='team__player-name'>Dio</h5>
            <p className='team__player-description'>Big Boss</p>
            <p className='team__player-expanded'>Dio is the shark of the office business. He doesn&apos;t care about any whales because he has an army of hamsters in his office. In a week you can meet him in several states in the company of people from completely different fields discussing the creation of 10 more projects... he does not know what is a lot  With 10+ years of experience in the financial business sector he knows how to make a well organized working structure and make numbers working for him.</p>
            <div className='team__player-socials'>
              <a
                className='team__player-socials-icon team__player-socials-icon--discord'
                target='_blank'
                rel='noreferrer'
                href='https://discord.gg/ySp223qgRu'
              >
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.4129 1.94491C23.4709 1.03632 21.3945 0.375996 19.2236 0C18.957 0.482013 18.6455 1.13033 18.4308 1.64607C16.1231 1.29902 13.8367 1.29902 11.5714 1.64607C11.3567 1.13033 11.0382 0.482013 10.7692 0C8.59601 0.375996 6.51719 1.03875 4.57524 1.94973C0.658303 7.86873 -0.403514 13.6407 0.127396 19.3307C2.72531 21.2708 5.24301 22.4493 7.71822 23.2205C8.32936 22.3794 8.87442 21.4853 9.34397 20.543C8.44969 20.2032 7.59316 19.7839 6.78384 19.297C6.99855 19.138 7.20857 18.9717 7.41148 18.8005C12.3477 21.1094 17.7111 21.1094 22.5884 18.8005C22.7937 18.9717 23.0037 19.138 23.2161 19.297C22.4043 19.7862 21.5455 20.2056 20.6512 20.5454C21.1207 21.4853 21.6635 22.3819 22.2769 23.2229C24.7545 22.4517 27.2746 21.2732 29.8725 19.3307C30.4954 12.7346 28.8083 7.01558 25.4129 1.94491ZM10.0165 15.8314C8.53465 15.8314 7.31944 14.4481 7.31944 12.7635C7.31944 11.0789 8.5087 9.69311 10.0165 9.69311C11.5243 9.69311 12.7394 11.0764 12.7135 12.7635C12.7158 14.4481 11.5243 15.8314 10.0165 15.8314ZM17.2864 12.7635C17.2864 14.4481 18.5016 15.8314 19.9834 15.8314C21.4912 15.8314 22.6805 14.4481 22.6805 12.7635C22.7064 11.0764 21.4912 9.69311 19.9834 9.69311C18.4756 9.69311 17.2864 11.0789 17.2864 12.7635Z" fill="white"/>
                </svg>
              </a>
              <a
                className='team__player-socials-icon team__player-socials-icon--instagram'
                target='_blank'
                rel='noreferrer'
                href='https://instagram.com/diomarkov'
              >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.1217 0C13.2195 5.67495e-05 13.3144 0.000128867 13.4066 0.000217531L14.3915 0.00215132C15.6265 0.00623007 16.2305 0.0164553 16.8439 0.0386247L17.0618 0.0469546C17.2454 0.0543252 17.4364 0.0627881 17.651 0.0724907C18.9823 0.138116 19.8893 0.345147 20.6862 0.654522C21.5119 0.971709 22.208 1.40296 22.8994 2.09905C23.5948 2.79046 24.0221 3.49046 24.344 4.31233C24.6487 5.10452 24.8604 6.01624 24.926 7.34749C24.9351 7.56196 24.9431 7.75285 24.9502 7.93644L24.9583 8.1543C24.985 8.91184 24.9959 9.6556 24.9982 11.5919L24.9983 13.4046C24.9964 15.3408 24.9873 16.0843 24.9599 16.8419L24.9515 17.0598C24.9442 17.2435 24.9357 17.4345 24.926 17.6491C24.8604 18.9803 24.6494 19.8873 24.344 20.6842C24.0268 21.51 23.5955 22.2061 22.8994 22.8975C22.208 23.5928 21.508 24.0201 20.6862 24.342C19.8893 24.6467 18.9823 24.8584 17.651 24.9241C16.45 24.9749 15.9883 24.9932 13.4066 24.9962L11.5939 24.9963C9.65767 24.9945 8.91424 24.9853 8.15657 24.9579L7.93866 24.9496C7.75501 24.9422 7.56404 24.9338 7.34944 24.9241C6.01819 24.8584 5.11116 24.6475 4.31429 24.342C3.49241 24.0248 2.79241 23.5936 2.10101 22.8975C1.40569 22.2061 0.97835 21.5061 0.656475 20.6842C0.3471 19.8873 0.140069 18.9803 0.0744438 17.6491C0.0290809 16.5767 0.00963099 16.0938 0.00380131 14.165L0.00226978 13.4046C0.00216027 13.3124 0.00207019 13.2175 0.00199876 13.1198L0.00195312 11.8768C0.00200987 11.779 0.00208199 11.6841 0.00217066 11.5919L0.00410444 10.607C0.00818319 9.37199 0.0184084 8.76797 0.0405778 8.15462L0.0489077 7.93671C0.0562784 7.75306 0.0647412 7.56208 0.0744438 7.34749C0.140069 6.01233 0.3471 5.10921 0.656475 4.31233C0.973663 3.49046 1.40491 2.79046 2.10101 2.09905C2.79241 1.40374 3.49241 0.976397 4.31429 0.654522C5.11116 0.345147 6.01429 0.138116 7.34944 0.0724907C8.42177 0.0271278 8.90471 0.00767786 10.8335 0.00184819L11.5939 0.000316659C11.6861 0.000207146 11.781 0.000117066 11.8787 4.56304e-05L13.1217 0ZM12.5002 6.08343C8.95257 6.08343 6.08382 8.95608 6.08382 12.4998C6.08382 16.0475 8.95648 18.9162 12.5002 18.9162C16.0479 18.9162 18.9166 16.0436 18.9166 12.4998C18.9166 8.95218 16.044 6.08343 12.5002 6.08343ZM19.1729 4.32952C18.3471 4.32952 17.6721 5.0014 17.6721 5.82718C17.6721 6.65687 18.3424 7.32796 19.1729 7.32796C19.9994 7.32796 20.6752 6.65765 20.6752 5.82718C20.6752 5.0014 19.9987 4.32952 19.1729 4.32952ZM12.5002 16.6662C10.1971 16.6662 8.33382 14.803 8.33382 12.4998C8.33382 10.1967 10.1971 8.33343 12.5002 8.33343C14.8034 8.33343 16.6666 10.1967 16.6666 12.4998C16.6666 14.803 14.8034 16.6662 12.5002 16.6662Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className='team__player'>
          <img className='team__player-img' src='/mary.png' alt='Mary' />
          <div className="team__player-wrapper">
            <h5 className='team__player-name'>Mary</h5>
            <p className='team__player-description'>NFT Artist</p>
            <p className='team__player-expanded'>Mary is the golden hand of visualizing anytype of idea. Sometimes you may not understand exactly what Mary is talking about, but don&apos;t ask her to explain, you are witnessing the birth of art. Catching Mary outside her workplace is like finding a dinosaur egg in a sandbox, her workplace looks more like an independent hippie state.  With 5+ years of experience creating art for all sorts of NFT projects, she knows how to create art that&apos;s impossible to take your eyes off.</p>
            <div className='team__player-socials'>
              <a
                className='team__player-socials-icon team__player-socials-icon--discord'
                target='_blank'
                rel='noreferrer'
                href='https://discord.gg/ySp223qgRu'
              >
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.4129 1.94491C23.4709 1.03632 21.3945 0.375996 19.2236 0C18.957 0.482013 18.6455 1.13033 18.4308 1.64607C16.1231 1.29902 13.8367 1.29902 11.5714 1.64607C11.3567 1.13033 11.0382 0.482013 10.7692 0C8.59601 0.375996 6.51719 1.03875 4.57524 1.94973C0.658303 7.86873 -0.403514 13.6407 0.127396 19.3307C2.72531 21.2708 5.24301 22.4493 7.71822 23.2205C8.32936 22.3794 8.87442 21.4853 9.34397 20.543C8.44969 20.2032 7.59316 19.7839 6.78384 19.297C6.99855 19.138 7.20857 18.9717 7.41148 18.8005C12.3477 21.1094 17.7111 21.1094 22.5884 18.8005C22.7937 18.9717 23.0037 19.138 23.2161 19.297C22.4043 19.7862 21.5455 20.2056 20.6512 20.5454C21.1207 21.4853 21.6635 22.3819 22.2769 23.2229C24.7545 22.4517 27.2746 21.2732 29.8725 19.3307C30.4954 12.7346 28.8083 7.01558 25.4129 1.94491ZM10.0165 15.8314C8.53465 15.8314 7.31944 14.4481 7.31944 12.7635C7.31944 11.0789 8.5087 9.69311 10.0165 9.69311C11.5243 9.69311 12.7394 11.0764 12.7135 12.7635C12.7158 14.4481 11.5243 15.8314 10.0165 15.8314ZM17.2864 12.7635C17.2864 14.4481 18.5016 15.8314 19.9834 15.8314C21.4912 15.8314 22.6805 14.4481 22.6805 12.7635C22.7064 11.0764 21.4912 9.69311 19.9834 9.69311C18.4756 9.69311 17.2864 11.0789 17.2864 12.7635Z" fill="white"/>
                </svg>
              </a>
              <a
                className='team__player-socials-icon team__player-socials-icon--instagram'
                target='_blank'
                rel='noreferrer'
                href='https://instagram.com/shisheckaaa'
              >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.1217 0C13.2195 5.67495e-05 13.3144 0.000128867 13.4066 0.000217531L14.3915 0.00215132C15.6265 0.00623007 16.2305 0.0164553 16.8439 0.0386247L17.0618 0.0469546C17.2454 0.0543252 17.4364 0.0627881 17.651 0.0724907C18.9823 0.138116 19.8893 0.345147 20.6862 0.654522C21.5119 0.971709 22.208 1.40296 22.8994 2.09905C23.5948 2.79046 24.0221 3.49046 24.344 4.31233C24.6487 5.10452 24.8604 6.01624 24.926 7.34749C24.9351 7.56196 24.9431 7.75285 24.9502 7.93644L24.9583 8.1543C24.985 8.91184 24.9959 9.6556 24.9982 11.5919L24.9983 13.4046C24.9964 15.3408 24.9873 16.0843 24.9599 16.8419L24.9515 17.0598C24.9442 17.2435 24.9357 17.4345 24.926 17.6491C24.8604 18.9803 24.6494 19.8873 24.344 20.6842C24.0268 21.51 23.5955 22.2061 22.8994 22.8975C22.208 23.5928 21.508 24.0201 20.6862 24.342C19.8893 24.6467 18.9823 24.8584 17.651 24.9241C16.45 24.9749 15.9883 24.9932 13.4066 24.9962L11.5939 24.9963C9.65767 24.9945 8.91424 24.9853 8.15657 24.9579L7.93866 24.9496C7.75501 24.9422 7.56404 24.9338 7.34944 24.9241C6.01819 24.8584 5.11116 24.6475 4.31429 24.342C3.49241 24.0248 2.79241 23.5936 2.10101 22.8975C1.40569 22.2061 0.97835 21.5061 0.656475 20.6842C0.3471 19.8873 0.140069 18.9803 0.0744438 17.6491C0.0290809 16.5767 0.00963099 16.0938 0.00380131 14.165L0.00226978 13.4046C0.00216027 13.3124 0.00207019 13.2175 0.00199876 13.1198L0.00195312 11.8768C0.00200987 11.779 0.00208199 11.6841 0.00217066 11.5919L0.00410444 10.607C0.00818319 9.37199 0.0184084 8.76797 0.0405778 8.15462L0.0489077 7.93671C0.0562784 7.75306 0.0647412 7.56208 0.0744438 7.34749C0.140069 6.01233 0.3471 5.10921 0.656475 4.31233C0.973663 3.49046 1.40491 2.79046 2.10101 2.09905C2.79241 1.40374 3.49241 0.976397 4.31429 0.654522C5.11116 0.345147 6.01429 0.138116 7.34944 0.0724907C8.42177 0.0271278 8.90471 0.00767786 10.8335 0.00184819L11.5939 0.000316659C11.6861 0.000207146 11.781 0.000117066 11.8787 4.56304e-05L13.1217 0ZM12.5002 6.08343C8.95257 6.08343 6.08382 8.95608 6.08382 12.4998C6.08382 16.0475 8.95648 18.9162 12.5002 18.9162C16.0479 18.9162 18.9166 16.0436 18.9166 12.4998C18.9166 8.95218 16.044 6.08343 12.5002 6.08343ZM19.1729 4.32952C18.3471 4.32952 17.6721 5.0014 17.6721 5.82718C17.6721 6.65687 18.3424 7.32796 19.1729 7.32796C19.9994 7.32796 20.6752 6.65765 20.6752 5.82718C20.6752 5.0014 19.9987 4.32952 19.1729 4.32952ZM12.5002 16.6662C10.1971 16.6662 8.33382 14.803 8.33382 12.4998C8.33382 10.1967 10.1971 8.33343 12.5002 8.33343C14.8034 8.33343 16.6666 10.1967 16.6666 12.4998C16.6666 14.803 14.8034 16.6662 12.5002 16.6662Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className='team__player'>
          <img className='team__player-img' src='/ars.png' alt='Ars' />
          <div className="team__player-wrapper">
            <h5 className='team__player-name'>Ars</h5>
            <p className='team__player-description'>Top Manager</p>
            <p className='team__player-expanded'>The guy in the office that everyone hates and loves at the same time. If you get 10 messages in 5 minutes in the middle of the night, you realize without looking at your phone that Ars is outlining new tasks again, and another briefing is waiting for you the next morning. Word around the office is that the last time he slept was in 2007… With 5+ years of vision and development of IT projects he knows how to transform any project to fit the trends in the markets.</p>
            <div className='team__player-socials'>
              <a
                className='team__player-socials-icon team__player-socials-icon--discord'
                target='_blank'
                rel='noreferrer'
                href='https://discord.gg/ySp223qgRu'
              >
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.4129 1.94491C23.4709 1.03632 21.3945 0.375996 19.2236 0C18.957 0.482013 18.6455 1.13033 18.4308 1.64607C16.1231 1.29902 13.8367 1.29902 11.5714 1.64607C11.3567 1.13033 11.0382 0.482013 10.7692 0C8.59601 0.375996 6.51719 1.03875 4.57524 1.94973C0.658303 7.86873 -0.403514 13.6407 0.127396 19.3307C2.72531 21.2708 5.24301 22.4493 7.71822 23.2205C8.32936 22.3794 8.87442 21.4853 9.34397 20.543C8.44969 20.2032 7.59316 19.7839 6.78384 19.297C6.99855 19.138 7.20857 18.9717 7.41148 18.8005C12.3477 21.1094 17.7111 21.1094 22.5884 18.8005C22.7937 18.9717 23.0037 19.138 23.2161 19.297C22.4043 19.7862 21.5455 20.2056 20.6512 20.5454C21.1207 21.4853 21.6635 22.3819 22.2769 23.2229C24.7545 22.4517 27.2746 21.2732 29.8725 19.3307C30.4954 12.7346 28.8083 7.01558 25.4129 1.94491ZM10.0165 15.8314C8.53465 15.8314 7.31944 14.4481 7.31944 12.7635C7.31944 11.0789 8.5087 9.69311 10.0165 9.69311C11.5243 9.69311 12.7394 11.0764 12.7135 12.7635C12.7158 14.4481 11.5243 15.8314 10.0165 15.8314ZM17.2864 12.7635C17.2864 14.4481 18.5016 15.8314 19.9834 15.8314C21.4912 15.8314 22.6805 14.4481 22.6805 12.7635C22.7064 11.0764 21.4912 9.69311 19.9834 9.69311C18.4756 9.69311 17.2864 11.0789 17.2864 12.7635Z" fill="white"/>
                </svg>
              </a>
              <a
                className='team__player-socials-icon team__player-socials-icon--instagram'
                target='_blank'
                rel='noreferrer'
                href='https://instagram.com/rech.mvp'
              >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.1217 0C13.2195 5.67495e-05 13.3144 0.000128867 13.4066 0.000217531L14.3915 0.00215132C15.6265 0.00623007 16.2305 0.0164553 16.8439 0.0386247L17.0618 0.0469546C17.2454 0.0543252 17.4364 0.0627881 17.651 0.0724907C18.9823 0.138116 19.8893 0.345147 20.6862 0.654522C21.5119 0.971709 22.208 1.40296 22.8994 2.09905C23.5948 2.79046 24.0221 3.49046 24.344 4.31233C24.6487 5.10452 24.8604 6.01624 24.926 7.34749C24.9351 7.56196 24.9431 7.75285 24.9502 7.93644L24.9583 8.1543C24.985 8.91184 24.9959 9.6556 24.9982 11.5919L24.9983 13.4046C24.9964 15.3408 24.9873 16.0843 24.9599 16.8419L24.9515 17.0598C24.9442 17.2435 24.9357 17.4345 24.926 17.6491C24.8604 18.9803 24.6494 19.8873 24.344 20.6842C24.0268 21.51 23.5955 22.2061 22.8994 22.8975C22.208 23.5928 21.508 24.0201 20.6862 24.342C19.8893 24.6467 18.9823 24.8584 17.651 24.9241C16.45 24.9749 15.9883 24.9932 13.4066 24.9962L11.5939 24.9963C9.65767 24.9945 8.91424 24.9853 8.15657 24.9579L7.93866 24.9496C7.75501 24.9422 7.56404 24.9338 7.34944 24.9241C6.01819 24.8584 5.11116 24.6475 4.31429 24.342C3.49241 24.0248 2.79241 23.5936 2.10101 22.8975C1.40569 22.2061 0.97835 21.5061 0.656475 20.6842C0.3471 19.8873 0.140069 18.9803 0.0744438 17.6491C0.0290809 16.5767 0.00963099 16.0938 0.00380131 14.165L0.00226978 13.4046C0.00216027 13.3124 0.00207019 13.2175 0.00199876 13.1198L0.00195312 11.8768C0.00200987 11.779 0.00208199 11.6841 0.00217066 11.5919L0.00410444 10.607C0.00818319 9.37199 0.0184084 8.76797 0.0405778 8.15462L0.0489077 7.93671C0.0562784 7.75306 0.0647412 7.56208 0.0744438 7.34749C0.140069 6.01233 0.3471 5.10921 0.656475 4.31233C0.973663 3.49046 1.40491 2.79046 2.10101 2.09905C2.79241 1.40374 3.49241 0.976397 4.31429 0.654522C5.11116 0.345147 6.01429 0.138116 7.34944 0.0724907C8.42177 0.0271278 8.90471 0.00767786 10.8335 0.00184819L11.5939 0.000316659C11.6861 0.000207146 11.781 0.000117066 11.8787 4.56304e-05L13.1217 0ZM12.5002 6.08343C8.95257 6.08343 6.08382 8.95608 6.08382 12.4998C6.08382 16.0475 8.95648 18.9162 12.5002 18.9162C16.0479 18.9162 18.9166 16.0436 18.9166 12.4998C18.9166 8.95218 16.044 6.08343 12.5002 6.08343ZM19.1729 4.32952C18.3471 4.32952 17.6721 5.0014 17.6721 5.82718C17.6721 6.65687 18.3424 7.32796 19.1729 7.32796C19.9994 7.32796 20.6752 6.65765 20.6752 5.82718C20.6752 5.0014 19.9987 4.32952 19.1729 4.32952ZM12.5002 16.6662C10.1971 16.6662 8.33382 14.803 8.33382 12.4998C8.33382 10.1967 10.1971 8.33343 12.5002 8.33343C14.8034 8.33343 16.6666 10.1967 16.6666 12.4998C16.6666 14.803 14.8034 16.6662 12.5002 16.6662Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className='team__player'>
          <img className='team__player-img' src='/gl.png' alt='GL' />
          <div className="team__player-wrapper">
            <h5 className='team__player-name'>GL</h5>
            <p className='team__player-description'>System Administrator</p>
            <p className='team__player-expanded'>Click-click-click….don&apos;t create unnecessary noise, GL works. This guy forgot what sunlight is a long time ago. You&apos;d think he was a vampire, but no, he converts all these crazy people&apos;s ideas into code so he doesn&apos;t have too much time to talk. He came straight off the matrix. With 5+ years of experience in IT he knows how to build and maintain all the different systems in operation.</p>
            <div className='team__player-socials'>
              <a
                className='team__player-socials-icon team__player-socials-icon--discord'
                target='_blank'
                rel='noreferrer'
                href='https://discord.gg/ySp223qgRu'
              >
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.4129 1.94491C23.4709 1.03632 21.3945 0.375996 19.2236 0C18.957 0.482013 18.6455 1.13033 18.4308 1.64607C16.1231 1.29902 13.8367 1.29902 11.5714 1.64607C11.3567 1.13033 11.0382 0.482013 10.7692 0C8.59601 0.375996 6.51719 1.03875 4.57524 1.94973C0.658303 7.86873 -0.403514 13.6407 0.127396 19.3307C2.72531 21.2708 5.24301 22.4493 7.71822 23.2205C8.32936 22.3794 8.87442 21.4853 9.34397 20.543C8.44969 20.2032 7.59316 19.7839 6.78384 19.297C6.99855 19.138 7.20857 18.9717 7.41148 18.8005C12.3477 21.1094 17.7111 21.1094 22.5884 18.8005C22.7937 18.9717 23.0037 19.138 23.2161 19.297C22.4043 19.7862 21.5455 20.2056 20.6512 20.5454C21.1207 21.4853 21.6635 22.3819 22.2769 23.2229C24.7545 22.4517 27.2746 21.2732 29.8725 19.3307C30.4954 12.7346 28.8083 7.01558 25.4129 1.94491ZM10.0165 15.8314C8.53465 15.8314 7.31944 14.4481 7.31944 12.7635C7.31944 11.0789 8.5087 9.69311 10.0165 9.69311C11.5243 9.69311 12.7394 11.0764 12.7135 12.7635C12.7158 14.4481 11.5243 15.8314 10.0165 15.8314ZM17.2864 12.7635C17.2864 14.4481 18.5016 15.8314 19.9834 15.8314C21.4912 15.8314 22.6805 14.4481 22.6805 12.7635C22.7064 11.0764 21.4912 9.69311 19.9834 9.69311C18.4756 9.69311 17.2864 11.0789 17.2864 12.7635Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
