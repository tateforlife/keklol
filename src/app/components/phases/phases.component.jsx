import React from 'react';
import MediaQuery from 'react-responsive'
import Slider from 'react-slick';

import './phases.styles.scss'

const Phases = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => <ul>{dots}</ul>,
  };

  return (
    <>
      <MediaQuery maxWidth={1024}>
        <div className="phases">
          <div className="phases__wrapper">
            <h3 className='phases__heading'>Roadmap <br /> &amp; Project <span>Phases</span></h3>
            <div className="phases__top">
              <Slider {...settings}>
                <div>
                  <div className="phases__item">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_540_346)" strokeWidth="3"/>
                      <defs>
                        <linearGradient id="paint0_linear_540_346" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#9960FF"/>
                          <stop offset="1" stopColor="#19D6E2"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="phases__img">
                      <svg width="136" height="178" viewBox="0 0 136 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M67.9967 68.0166V143.968L136 109.964V34.0051L67.9967 68.0166Z" fill="url(#paint0_linear_398_666)"/>
                        <path d="M67.9967 0L0 34.0049L67.9967 68.0164L136 34.0049L67.9967 0Z" fill="url(#paint1_linear_398_666)"/>
                        <path d="M67.9967 68.0166V143.968L0 109.964V34.0051L67.9967 68.0166Z" fill="#1DAFA1"/>
                        <path d="M26.6485 98.8695V95.902L31.215 97.6062V77.7546L26.5696 75.4648V72.6157L36.0578 75.5043V100.014L40.6243 102.877V105.844L26.6485 98.8695Z" fill="#EAEAEF"/>
                        <path opacity="0.1" d="M67.9967 109.885L0 143.896L67.9967 177.901L136 143.896L67.9967 109.885Z" fill="url(#paint2_linear_398_666)"/>
                        <defs>
                          <linearGradient id="paint0_linear_398_666" x1="117.859" y1="126.604" x2="85.2229" y2="49.1981" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#40E0D0"/>
                            <stop offset="0.83" stopColor="#1C9B8C"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_398_666" x1="-19.1278" y1="13.4625" x2="145.672" y2="52.3234" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="0.53" stopColor="#40E0D0"/>
                            <stop offset="1" stopColor="#1C9B8C"/>
                          </linearGradient>
                          <linearGradient id="paint2_linear_398_666" x1="-19.1278" y1="123.354" x2="145.672" y2="162.208" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="0.53" stopColor="#40E0D0"/>
                            <stop offset="1" stopColor="#1C9B8C"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="phases__content">
                      <h4 className="phases__heading--small">
                Phase 1
                        <div className="phases__divider"></div>
                      </h4>
                      <p className="phases__paragraph">
                - Presenting innovative Web3 CoinFlip project
                      </p>
                      <p className="phases__paragraph">
                - Presenting roadmap &amp; Ecosystem sketch
                      </p>
                      <p className="phases__paragraph">
                - Website Development
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="phases__item">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_540_346)" strokeWidth="3"/>
                      <defs>
                        <linearGradient id="paint0_linear_540_346" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#9960FF"/>
                          <stop offset="1" stopColor="#19D6E2"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="phases__img">
                      <svg width="136" height="178" viewBox="0 0 136 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M67.9966 68.0164V143.968L136 109.963V34.0049L67.9966 68.0164Z" fill="url(#paint0_linear_540_352)"/>
                        <path d="M67.9967 0L0 34.0049L67.9967 68.0165L136 34.0049L67.9967 0Z" fill="url(#paint1_linear_540_352)"/>
                        <path d="M67.9967 68.0164V143.968L0 109.963V34.0049L67.9967 68.0164Z" fill="#FF8500"/>
                        <path d="M25.4446 98.9288V95.7112L34.5841 90.3157C35.412 89.8115 36.1917 89.2323 36.9134 88.5852C37.4158 88.1611 37.8158 87.6289 38.0835 87.0284C38.3513 86.4279 38.4799 85.7747 38.4597 85.1176C38.4377 83.827 38.0646 82.5668 37.3805 81.4723C36.6356 80.2457 35.5496 79.2625 34.2551 78.6429C32.8119 77.9191 31.7153 77.8182 30.9651 78.3403C30.215 78.8623 29.8312 79.9326 29.8137 81.5512L25.109 79.1956L25.0695 79.064C24.9548 77.6651 25.3292 76.2697 26.1289 75.1161C26.5185 74.6343 27.0107 74.2455 27.5696 73.978C28.1285 73.7105 28.74 73.571 29.3596 73.5698C31.1177 73.5755 32.8453 74.0284 34.3801 74.8858C36.1565 75.7544 37.7772 76.9105 39.1769 78.3074C40.4567 79.5769 41.5055 81.0598 42.276 82.6896C42.9789 84.1661 43.3495 85.7787 43.3617 87.4139C43.382 88.3828 43.1747 89.3429 42.7563 90.217C42.3023 91.07 41.6774 91.8204 40.9205 92.4212C39.9564 93.1954 38.9284 93.8865 37.8477 94.4873L31.5837 98.1523L31.6231 98.2642L40.0257 102.469L40.3152 99.6986L44.1907 101.64V108.292L25.4446 98.9288Z" fill="#EAEAEF"/>
                        <path opacity="0.1" d="M67.9967 109.884L0 143.889L67.9967 177.901L135.993 143.889L67.9967 109.884Z" fill="url(#paint2_linear_540_352)"/>
                        <defs>
                          <linearGradient id="paint0_linear_540_352" x1="39.828" y1="74.6621" x2="152.193" y2="100.554" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F80023"/>
                            <stop offset="1" stopColor="#FFC400"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_540_352" x1="128.742" y1="49.5401" x2="-18.5093" y2="11.8899" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F80023"/>
                            <stop offset="0.52" stopColor="#FFC400"/>
                            <stop offset="0.54" stopColor="#FFC915"/>
                            <stop offset="0.59" stopColor="#FFD54B"/>
                            <stop offset="0.65" stopColor="#FFE07B"/>
                            <stop offset="0.7" stopColor="#FFEAA4"/>
                            <stop offset="0.76" stopColor="#FFF2C5"/>
                            <stop offset="0.81" stopColor="#FFF7DE"/>
                            <stop offset="0.87" stopColor="#FFFCF1"/>
                            <stop offset="0.93" stopColor="#FFFEFB"/>
                            <stop offset="1" stopColor="white"/>
                          </linearGradient>
                          <linearGradient id="paint2_linear_540_352" x1="128.742" y1="159.424" x2="-18.5093" y2="121.774" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F80023"/>
                            <stop offset="0.52" stopColor="#FFC400"/>
                            <stop offset="0.54" stopColor="#FFC915"/>
                            <stop offset="0.59" stopColor="#FFD54B"/>
                            <stop offset="0.65" stopColor="#FFE07B"/>
                            <stop offset="0.7" stopColor="#FFEAA4"/>
                            <stop offset="0.76" stopColor="#FFF2C5"/>
                            <stop offset="0.81" stopColor="#FFF7DE"/>
                            <stop offset="0.87" stopColor="#FFFCF1"/>
                            <stop offset="0.93" stopColor="#FFFEFB"/>
                            <stop offset="1" stopColor="white"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="phases__content">
                      <h4 className="phases__heading--small">
                    Phase 2
                        <div className="phases__divider"></div>
                      </h4>
                      <p className="phases__paragraph">
                    - Launch Start (22 Feb)
                      </p>
                      <p className="phases__paragraph">
                    - Dex Tranding
                      </p>
                      <p className="phases__paragraph">
                    - Dexscreener Update
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="phases__item">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_540_346)" strokeWidth="3"/>
                      <defs>
                        <linearGradient id="paint0_linear_540_346" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#9960FF"/>
                          <stop offset="1" stopColor="#19D6E2"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="phases__img">
                      <svg width="136" height="178" viewBox="0 0 136 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M67.9966 68.0164V143.968L136 109.963V34.0049L67.9966 68.0164Z" fill="url(#paint0_linear_540_364)"/>
                        <path d="M67.9967 0L0 34.0049L67.9967 68.0165L136 34.0049L67.9967 0Z" fill="url(#paint1_linear_540_364)"/>
                        <path d="M67.9967 68.0164V143.968L0 109.963V34.0049L67.9967 68.0164Z" fill="#ADADC9"/>
                        <path d="M32.5967 103.397C30.8599 102.539 29.2591 101.431 27.846 100.107C26.5097 98.8472 25.3972 97.3698 24.556 95.7376C23.7687 94.2512 23.3703 92.5897 23.398 90.9079L23.4374 90.8092L28.1223 93.1517C28.1261 94.0143 28.3122 94.8664 28.6685 95.652C29.0536 96.4969 29.5811 97.2692 30.2279 97.9353C30.9224 98.6518 31.7347 99.2438 32.6296 99.6855C34.0596 100.401 35.1804 100.567 35.9919 100.186C36.8078 99.804 37.2157 98.8696 37.2157 97.3957C37.2399 95.9936 36.8384 94.6171 36.0643 93.4478C35.1496 92.1773 33.9208 91.1661 32.498 90.5131L29.333 88.934V85.236L32.5703 86.8547C33.3028 87.2609 34.1217 87.4865 34.9588 87.5127C35.2358 87.5149 35.5085 87.4436 35.7489 87.306C35.9893 87.1685 36.189 86.9696 36.3275 86.7297C36.65 86.0977 36.7998 85.3918 36.7617 84.6833C36.7838 83.3564 36.4154 82.0521 35.7024 80.9328C34.923 79.7918 33.85 78.8825 32.5967 78.3008C31.9174 77.9226 31.1565 77.7148 30.3792 77.6955C30.1003 77.6903 29.8237 77.7466 29.569 77.8603C29.3143 77.9741 29.0877 78.1424 28.9053 78.3535C28.5185 78.8915 28.3322 79.548 28.3789 80.209L23.6875 77.8402L23.648 77.7086C23.5907 77.1073 23.6544 76.5007 23.8352 75.9244C24.016 75.348 24.3103 74.8137 24.7008 74.3529C25.117 73.9456 25.6149 73.6312 26.1616 73.4304C26.7083 73.2297 27.2914 73.1471 27.8723 73.1883C29.5129 73.2697 31.1141 73.7195 32.5572 74.5042C35.1431 75.7503 37.3977 77.59 39.1371 79.8734C40.7245 81.9108 41.5921 84.4167 41.6045 86.9995C41.6321 87.541 41.552 88.0827 41.3691 88.5932C41.1861 89.1036 40.9039 89.5728 40.5386 89.9736C40.1073 90.3618 39.5967 90.6518 39.0423 90.8233C38.4879 90.9949 37.9028 91.0439 37.3276 90.9671C38.7976 92.1554 40.0071 93.6337 40.8808 95.3099C41.6176 96.7206 42.0121 98.2849 42.0322 99.8763C42.0322 101.583 41.6265 102.85 40.815 103.68C40.3728 104.105 39.8441 104.429 39.2649 104.631C38.6858 104.834 38.0699 104.908 37.4592 104.851C35.7546 104.711 34.0982 104.216 32.5967 103.397Z" fill="#EAEAEF"/>
                        <path opacity="0.1" d="M67.9967 109.884L0 143.889L67.9967 177.901L135.993 143.889L67.9967 109.884Z" fill="url(#paint2_linear_540_364)"/>
                        <defs>
                          <linearGradient id="paint0_linear_540_364" x1="150.541" y1="99.6065" x2="71.7471" y2="82.3737" gradientUnits="userSpaceOnUse">
                            <stop offset="0.35" stopColor="#C1C1D6"/>
                            <stop offset="1" stopColor="white"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_540_364" x1="153.542" y1="52.7182" x2="14.6863" y2="22.3454" gradientUnits="userSpaceOnUse">
                            <stop offset="0.35" stopColor="#C1C1D6"/>
                            <stop offset="1" stopColor="white"/>
                          </linearGradient>
                          <linearGradient id="paint2_linear_540_364" x1="153.535" y1="162.602" x2="14.6863" y2="132.23" gradientUnits="userSpaceOnUse">
                            <stop offset="0.35" stopColor="#C1C1D6"/>
                            <stop offset="1" stopColor="white"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="phases__content">
                      <h4 className="phases__heading--small">
                    Phase 3
                        <div className="phases__divider"></div>
                      </h4>
                      <p className="phases__paragraph">
                    - Activation of Staking Pool
                      </p>
                      <p className="phases__paragraph">
                    - DEX Launch &amp; LP Lock
                      </p>
                      <p className="phases__paragraph">
                    - CEX Launch anouncement
                      </p>
                      <p className="phases__paragraph">
                    - Post Launch Marketing
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="phases__item">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_540_346)" strokeWidth="3"/>
                      <defs>
                        <linearGradient id="paint0_linear_540_346" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#9960FF"/>
                          <stop offset="1" stopColor="#19D6E2"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="phases__img">
                      <svg width="136" height="178" viewBox="0 0 136 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M67.9966 68.0164V143.968L136 109.963V34.0049L67.9966 68.0164Z" fill="url(#paint0_linear_540_384)"/>
                        <path d="M67.9967 0L0 34.0049L67.9967 68.0165L136 34.0049L67.9967 0Z" fill="url(#paint1_linear_540_384)"/>
                        <path d="M67.9967 68.0164V143.968L0 109.963V34.0049L67.9967 68.0164Z" fill="url(#paint2_linear_540_384)"/>
                        <path d="M31.4191 102.739V99.771L34.4853 100.725V97.6588L22.5559 91.6909L22.3717 89.1181L34.3471 76.136L39.315 78.6232V96.6653L42.7694 98.4024V101.817L39.2952 100.08V103.146L42.368 105.278V108.246L31.4191 102.739ZM27.1421 90.5723L34.4853 94.2505V82.8146L34.3669 82.7225L33.9458 83.3805L27.1421 90.5723Z" fill="#EAEAEF"/>
                        <path opacity="0.1" d="M67.9967 109.884L0 143.889L67.9967 177.901L135.993 143.889L67.9967 109.884Z" fill="url(#paint3_linear_540_384)"/>
                        <defs>
                          <linearGradient id="paint0_linear_540_384" x1="159.122" y1="73.379" x2="17.8775" y2="111.977" gradientUnits="userSpaceOnUse">
                            <stop offset="0.07" stopColor="#a2A6EE8"/>
                            <stop offset="1" stopColor="#2E49E5"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_540_384" x1="-10.7055" y1="1.38836" x2="164.438" y2="73.9713" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="0.53" stopColor="#53C7F4"/>
                            <stop offset="0.83" stopColor="#2A6EE8"/>
                          </linearGradient>
                          <linearGradient id="paint2_linear_540_384" x1="80.2945" y1="76.34" x2="-34.176" y2="107.621" gradientUnits="userSpaceOnUse">
                            <stop offset="0.07" stopColor="#2A6EE8"/>
                            <stop offset="1" stopColor="#2E49E5"/>
                          </linearGradient>
                          <linearGradient id="paint3_linear_540_384" x1="-10.7121" y1="111.273" x2="164.438" y2="183.856" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="0.53" stopColor="#53C7F4"/>
                            <stop offset="0.83" stopColor="#2A6EE8"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="phases__content">
                      <h4 className="phases__heading--small">
                    Phase 4
                        <div className="phases__divider"></div>
                      </h4>
                      <p className="phases__paragraph">
                    - Innovative CoinFlip game beta version release
                      </p>
                      <p className="phases__paragraph">
                    - Jackpot pool activation
                      </p>
                      <p className="phases__paragraph">
                    - Leaderboard pool activation
                      </p>
                      <p className="phases__paragraph">
                    - Continue development of ecosystem
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1025}>
        <div className="phases">
          <div className="phases__wrapper">
            <h3 className='phases__heading'>Roadmap <br /> &amp; Project <span>Phases</span></h3>
            <div className="phases__top">
              <div className="phases__item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_540_346)" strokeWidth="3"/>
                  <defs>
                    <linearGradient id="paint0_linear_540_346" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9960FF"/>
                      <stop offset="1" stopColor="#19D6E2"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="phases__img">
                  <svg width="136" height="178" viewBox="0 0 136 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M67.9967 68.0166V143.968L136 109.964V34.0051L67.9967 68.0166Z" fill="url(#paint0_linear_398_666)"/>
                    <path d="M67.9967 0L0 34.0049L67.9967 68.0164L136 34.0049L67.9967 0Z" fill="url(#paint1_linear_398_666)"/>
                    <path d="M67.9967 68.0166V143.968L0 109.964V34.0051L67.9967 68.0166Z" fill="#1DAFA1"/>
                    <path d="M26.6485 98.8695V95.902L31.215 97.6062V77.7546L26.5696 75.4648V72.6157L36.0578 75.5043V100.014L40.6243 102.877V105.844L26.6485 98.8695Z" fill="#EAEAEF"/>
                    <path opacity="0.1" d="M67.9967 109.885L0 143.896L67.9967 177.901L136 143.896L67.9967 109.885Z" fill="url(#paint2_linear_398_666)"/>
                    <defs>
                      <linearGradient id="paint0_linear_398_666" x1="117.859" y1="126.604" x2="85.2229" y2="49.1981" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#40E0D0"/>
                        <stop offset="0.83" stopColor="#1C9B8C"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_398_666" x1="-19.1278" y1="13.4625" x2="145.672" y2="52.3234" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="0.53" stopColor="#40E0D0"/>
                        <stop offset="1" stopColor="#1C9B8C"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_398_666" x1="-19.1278" y1="123.354" x2="145.672" y2="162.208" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="0.53" stopColor="#40E0D0"/>
                        <stop offset="1" stopColor="#1C9B8C"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="phases__content">
                  <h4 className="phases__heading--small">
                Phase 1
                    <div className="phases__divider"></div>
                  </h4>
                  <p className="phases__paragraph">
                - Presenting innovative Web3 CoinFlip project
                  </p>
                  <p className="phases__paragraph">
                - Presenting roadmap &amp; Ecosystem sketch
                  </p>
                  <p className="phases__paragraph">
                - Website Development
                  </p>
                </div>
              </div>
              <div className="phases__item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_540_346)" strokeWidth="3"/>
                  <defs>
                    <linearGradient id="paint0_linear_540_346" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9960FF"/>
                      <stop offset="1" stopColor="#19D6E2"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="phases__img">
                  <svg width="136" height="178" viewBox="0 0 136 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M67.9966 68.0164V143.968L136 109.963V34.0049L67.9966 68.0164Z" fill="url(#paint0_linear_540_364)"/>
                    <path d="M67.9967 0L0 34.0049L67.9967 68.0165L136 34.0049L67.9967 0Z" fill="url(#paint1_linear_540_364)"/>
                    <path d="M67.9967 68.0164V143.968L0 109.963V34.0049L67.9967 68.0164Z" fill="#ADADC9"/>
                    <path d="M32.5967 103.397C30.8599 102.539 29.2591 101.431 27.846 100.107C26.5097 98.8472 25.3972 97.3698 24.556 95.7376C23.7687 94.2512 23.3703 92.5897 23.398 90.9079L23.4374 90.8092L28.1223 93.1517C28.1261 94.0143 28.3122 94.8664 28.6685 95.652C29.0536 96.4969 29.5811 97.2692 30.2279 97.9353C30.9224 98.6518 31.7347 99.2438 32.6296 99.6855C34.0596 100.401 35.1804 100.567 35.9919 100.186C36.8078 99.804 37.2157 98.8696 37.2157 97.3957C37.2399 95.9936 36.8384 94.6171 36.0643 93.4478C35.1496 92.1773 33.9208 91.1661 32.498 90.5131L29.333 88.934V85.236L32.5703 86.8547C33.3028 87.2609 34.1217 87.4865 34.9588 87.5127C35.2358 87.5149 35.5085 87.4436 35.7489 87.306C35.9893 87.1685 36.189 86.9696 36.3275 86.7297C36.65 86.0977 36.7998 85.3918 36.7617 84.6833C36.7838 83.3564 36.4154 82.0521 35.7024 80.9328C34.923 79.7918 33.85 78.8825 32.5967 78.3008C31.9174 77.9226 31.1565 77.7148 30.3792 77.6955C30.1003 77.6903 29.8237 77.7466 29.569 77.8603C29.3143 77.9741 29.0877 78.1424 28.9053 78.3535C28.5185 78.8915 28.3322 79.548 28.3789 80.209L23.6875 77.8402L23.648 77.7086C23.5907 77.1073 23.6544 76.5007 23.8352 75.9244C24.016 75.348 24.3103 74.8137 24.7008 74.3529C25.117 73.9456 25.6149 73.6312 26.1616 73.4304C26.7083 73.2297 27.2914 73.1471 27.8723 73.1883C29.5129 73.2697 31.1141 73.7195 32.5572 74.5042C35.1431 75.7503 37.3977 77.59 39.1371 79.8734C40.7245 81.9108 41.5921 84.4167 41.6045 86.9995C41.6321 87.541 41.552 88.0827 41.3691 88.5932C41.1861 89.1036 40.9039 89.5728 40.5386 89.9736C40.1073 90.3618 39.5967 90.6518 39.0423 90.8233C38.4879 90.9949 37.9028 91.0439 37.3276 90.9671C38.7976 92.1554 40.0071 93.6337 40.8808 95.3099C41.6176 96.7206 42.0121 98.2849 42.0322 99.8763C42.0322 101.583 41.6265 102.85 40.815 103.68C40.3728 104.105 39.8441 104.429 39.2649 104.631C38.6858 104.834 38.0699 104.908 37.4592 104.851C35.7546 104.711 34.0982 104.216 32.5967 103.397Z" fill="#EAEAEF"/>
                    <path opacity="0.1" d="M67.9967 109.884L0 143.889L67.9967 177.901L135.993 143.889L67.9967 109.884Z" fill="url(#paint2_linear_540_364)"/>
                    <defs>
                      <linearGradient id="paint0_linear_540_364" x1="150.541" y1="99.6065" x2="71.7471" y2="82.3737" gradientUnits="userSpaceOnUse">
                        <stop offset="0.35" stopColor="#C1C1D6"/>
                        <stop offset="1" stopColor="white"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_540_364" x1="153.542" y1="52.7182" x2="14.6863" y2="22.3454" gradientUnits="userSpaceOnUse">
                        <stop offset="0.35" stopColor="#C1C1D6"/>
                        <stop offset="1" stopColor="white"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_540_364" x1="153.535" y1="162.602" x2="14.6863" y2="132.23" gradientUnits="userSpaceOnUse">
                        <stop offset="0.35" stopColor="#C1C1D6"/>
                        <stop offset="1" stopColor="white"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="phases__content">
                  <h4 className="phases__heading--small">
                Phase 3
                    <div className="phases__divider"></div>
                  </h4>
                  <p className="phases__paragraph">
                - Activation of Staking Pool
                  </p>
                  <p className="phases__paragraph">
                - DEX Launch &amp; LP Lock
                  </p>
                  <p className="phases__paragraph">
                - CEX Launch anouncement
                  </p>
                  <p className="phases__paragraph">
                - Post Launch Marketing
                  </p>
                </div>
              </div>
              <div className="phases__divider"></div>
            </div>
            <div className="phases__bot">
              <div className="phases__item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_540_346)" strokeWidth="3"/>
                  <defs>
                    <linearGradient id="paint0_linear_540_346" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9960FF"/>
                      <stop offset="1" stopColor="#19D6E2"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="phases__img">
                  <svg width="136" height="178" viewBox="0 0 136 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M67.9966 68.0164V143.968L136 109.963V34.0049L67.9966 68.0164Z" fill="url(#paint0_linear_540_352)"/>
                    <path d="M67.9967 0L0 34.0049L67.9967 68.0165L136 34.0049L67.9967 0Z" fill="url(#paint1_linear_540_352)"/>
                    <path d="M67.9967 68.0164V143.968L0 109.963V34.0049L67.9967 68.0164Z" fill="#FF8500"/>
                    <path d="M25.4446 98.9288V95.7112L34.5841 90.3157C35.412 89.8115 36.1917 89.2323 36.9134 88.5852C37.4158 88.1611 37.8158 87.6289 38.0835 87.0284C38.3513 86.4279 38.4799 85.7747 38.4597 85.1176C38.4377 83.827 38.0646 82.5668 37.3805 81.4723C36.6356 80.2457 35.5496 79.2625 34.2551 78.6429C32.8119 77.9191 31.7153 77.8182 30.9651 78.3403C30.215 78.8623 29.8312 79.9326 29.8137 81.5512L25.109 79.1956L25.0695 79.064C24.9548 77.6651 25.3292 76.2697 26.1289 75.1161C26.5185 74.6343 27.0107 74.2455 27.5696 73.978C28.1285 73.7105 28.74 73.571 29.3596 73.5698C31.1177 73.5755 32.8453 74.0284 34.3801 74.8858C36.1565 75.7544 37.7772 76.9105 39.1769 78.3074C40.4567 79.5769 41.5055 81.0598 42.276 82.6896C42.9789 84.1661 43.3495 85.7787 43.3617 87.4139C43.382 88.3828 43.1747 89.3429 42.7563 90.217C42.3023 91.07 41.6774 91.8204 40.9205 92.4212C39.9564 93.1954 38.9284 93.8865 37.8477 94.4873L31.5837 98.1523L31.6231 98.2642L40.0257 102.469L40.3152 99.6986L44.1907 101.64V108.292L25.4446 98.9288Z" fill="#EAEAEF"/>
                    <path opacity="0.1" d="M67.9967 109.884L0 143.889L67.9967 177.901L135.993 143.889L67.9967 109.884Z" fill="url(#paint2_linear_540_352)"/>
                    <defs>
                      <linearGradient id="paint0_linear_540_352" x1="39.828" y1="74.6621" x2="152.193" y2="100.554" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F80023"/>
                        <stop offset="1" stopColor="#FFC400"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_540_352" x1="128.742" y1="49.5401" x2="-18.5093" y2="11.8899" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F80023"/>
                        <stop offset="0.52" stopColor="#FFC400"/>
                        <stop offset="0.54" stopColor="#FFC915"/>
                        <stop offset="0.59" stopColor="#FFD54B"/>
                        <stop offset="0.65" stopColor="#FFE07B"/>
                        <stop offset="0.7" stopColor="#FFEAA4"/>
                        <stop offset="0.76" stopColor="#FFF2C5"/>
                        <stop offset="0.81" stopColor="#FFF7DE"/>
                        <stop offset="0.87" stopColor="#FFFCF1"/>
                        <stop offset="0.93" stopColor="#FFFEFB"/>
                        <stop offset="1" stopColor="white"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_540_352" x1="128.742" y1="159.424" x2="-18.5093" y2="121.774" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F80023"/>
                        <stop offset="0.52" stopColor="#FFC400"/>
                        <stop offset="0.54" stopColor="#FFC915"/>
                        <stop offset="0.59" stopColor="#FFD54B"/>
                        <stop offset="0.65" stopColor="#FFE07B"/>
                        <stop offset="0.7" stopColor="#FFEAA4"/>
                        <stop offset="0.76" stopColor="#FFF2C5"/>
                        <stop offset="0.81" stopColor="#FFF7DE"/>
                        <stop offset="0.87" stopColor="#FFFCF1"/>
                        <stop offset="0.93" stopColor="#FFFEFB"/>
                        <stop offset="1" stopColor="white"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="phases__content">
                  <h4 className="phases__heading--small">
                Phase 2
                  </h4>
                  <p className="phases__paragraph">
                - Launch Start (22 Feb)
                  </p>
                  <p className="phases__paragraph">
                - Dex Tranding
                  </p>
                  <p className="phases__paragraph">
                - Dexscreener Update
                  </p>
                </div>
              </div>
              <div className="phases__item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7.5" cy="7.5" r="6" stroke="url(#paint0_linear_540_346)" strokeWidth="3"/>
                  <defs>
                    <linearGradient id="paint0_linear_540_346" x1="15" y1="7.49995" x2="4.98441e-08" y2="7.49995" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9960FF"/>
                      <stop offset="1" stopColor="#19D6E2"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="phases__img">
                  <svg width="136" height="178" viewBox="0 0 136 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M67.9966 68.0164V143.968L136 109.963V34.0049L67.9966 68.0164Z" fill="url(#paint0_linear_540_384)"/>
                    <path d="M67.9967 0L0 34.0049L67.9967 68.0165L136 34.0049L67.9967 0Z" fill="url(#paint1_linear_540_384)"/>
                    <path d="M67.9967 68.0164V143.968L0 109.963V34.0049L67.9967 68.0164Z" fill="url(#paint2_linear_540_384)"/>
                    <path d="M31.4191 102.739V99.771L34.4853 100.725V97.6588L22.5559 91.6909L22.3717 89.1181L34.3471 76.136L39.315 78.6232V96.6653L42.7694 98.4024V101.817L39.2952 100.08V103.146L42.368 105.278V108.246L31.4191 102.739ZM27.1421 90.5723L34.4853 94.2505V82.8146L34.3669 82.7225L33.9458 83.3805L27.1421 90.5723Z" fill="#EAEAEF"/>
                    <path opacity="0.1" d="M67.9967 109.884L0 143.889L67.9967 177.901L135.993 143.889L67.9967 109.884Z" fill="url(#paint3_linear_540_384)"/>
                    <defs>
                      <linearGradient id="paint0_linear_540_384" x1="159.122" y1="73.379" x2="17.8775" y2="111.977" gradientUnits="userSpaceOnUse">
                        <stop offset="0.07" stopColor="#a2A6EE8"/>
                        <stop offset="1" stopColor="#2E49E5"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_540_384" x1="-10.7055" y1="1.38836" x2="164.438" y2="73.9713" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="0.53" stopColor="#53C7F4"/>
                        <stop offset="0.83" stopColor="#2A6EE8"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_540_384" x1="80.2945" y1="76.34" x2="-34.176" y2="107.621" gradientUnits="userSpaceOnUse">
                        <stop offset="0.07" stopColor="#2A6EE8"/>
                        <stop offset="1" stopColor="#2E49E5"/>
                      </linearGradient>
                      <linearGradient id="paint3_linear_540_384" x1="-10.7121" y1="111.273" x2="164.438" y2="183.856" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="0.53" stopColor="#53C7F4"/>
                        <stop offset="0.83" stopColor="#2A6EE8"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="phases__content">
                  <h4 className="phases__heading--small">
                Phase 4
                  </h4>
                  <p className="phases__paragraph">
                - Innovative CoinFlip game beta version release
                  </p>
                  <p className="phases__paragraph">
                - Jackpot pool activation
                  </p>
                  <p className="phases__paragraph">
                - Leaderboard pool activation
                  </p>
                  <p className="phases__paragraph">
                - Continue development of ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default Phases;
