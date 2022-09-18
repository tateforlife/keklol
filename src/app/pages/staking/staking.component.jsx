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
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleChange = () => {
    setIsSubscribed(current => !current);
  };

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
          <div className="staking__info">
            <div className="staking__info-left">
              <h4 className="staking__info-heading">Information about your choice</h4>
              <div className="staking__info-items">
                <div className="staking__info-item">
                  <span>Days staking:</span> 30 Days
                </div>
                <div className="staking__info-item">
                  <span>APY (%):</span> 10%
                </div>
                <div className="staking__info-item">
                  <span>Unlocking date:</span> 18 October, 2022
                </div>
              </div>
            </div>
            <div className="staking__info-right">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.94373 19.1088C14.9419 19.1088 18.9937 15.0524 18.9937 10.0486C18.9937 5.04471 14.9419 0.988281 9.94373 0.988281C4.94559 0.988281 0.893799 5.04471 0.893799 10.0486C0.893799 15.0524 4.94559 19.1088 9.94373 19.1088Z" fill="white"/>
                <path d="M13.4546 17.726C17.7102 15.8166 19.614 10.815 17.7068 6.55446C15.7996 2.29397 10.8036 0.388023 6.54801 2.2974C2.29239 4.20678 0.388619 9.20845 2.29582 13.4689C4.20302 17.7294 9.19897 19.6354 13.4546 17.726Z" fill="url(#paint0_linear_612_977)"/>
                <path style={{mixBlendMode: 'multiply'}} d="M12.8776 16.2109C16.1703 14.7335 17.6433 10.8636 16.1676 7.56709C14.692 4.27062 10.8265 2.79592 7.53375 4.27327C4.24104 5.75062 2.76804 9.62056 4.24369 12.917C5.71935 16.2135 9.58488 17.6882 12.8776 16.2109Z" fill="url(#paint1_linear_612_977)"/>
                <path d="M7.26172 1.2938L9.77036 9.81362L7.65976 1.26392L7.26172 1.2938Z" fill="#FDD65B"/>
                <path d="M4.46045 2.75642L9.7285 9.90343L4.82416 2.59204L4.46045 2.75642Z" fill="#FDD65B"/>
                <path d="M2.3291 5.08949L9.7207 10.0014L2.61469 4.81055L2.3291 5.08949Z" fill="#FDD65B"/>
                <path d="M1.12256 8.01248L9.74658 10.0971L1.29571 7.65234L1.12256 8.01248Z" fill="#FDD65B"/>
                <path d="M0.986816 11.1715L9.8034 10.1777L1.02662 10.774L0.986816 11.1715Z" fill="#FDD65B"/>
                <path d="M1.93885 14.1872L9.88422 10.2341L1.84033 13.8002L1.93885 14.1872Z" fill="#FDD65B"/>
                <path d="M3.86405 16.6947L9.97943 10.2595L3.63916 16.3645L3.86405 16.6947Z" fill="#FDD65B"/>
                <path d="M6.52972 18.3912L10.0782 10.2505L6.20581 18.1581L6.52972 18.3912Z" fill="#FDD65B"/>
                <path d="M9.61459 19.0738L10.1679 10.2087L9.22998 18.9652L9.61459 19.0738Z" fill="#FDD65B"/>
                <path d="M12.7452 18.6582L10.2366 10.1384L12.3477 18.6881L12.7452 18.6582Z" fill="#FDD65B"/>
                <path d="M15.5464 17.1958L10.2788 10.0488L15.1827 17.3602L15.5464 17.1958Z" fill="#FDD65B"/>
                <path d="M17.6787 14.8626L10.2866 9.9502L17.3931 15.1416L17.6787 14.8626Z" fill="#FDD65B"/>
                <path d="M18.8853 11.9396L10.2607 9.85498L18.7121 12.2997L18.8853 11.9396Z" fill="#FDD65B"/>
                <path d="M19.0197 8.78003L10.2036 9.77378L18.9804 9.17753L19.0197 8.78003Z" fill="#FDD65B"/>
                <path d="M18.0679 5.76489L10.123 9.71746L18.1664 6.15193L18.0679 5.76489Z" fill="#FDD65B"/>
                <path d="M16.143 3.25732L10.0276 9.69202L16.3679 3.58758L16.143 3.25732Z" fill="#FDD65B"/>
                <path d="M13.4775 1.5603L9.92944 9.70106L13.8019 1.79342L13.4775 1.5603Z" fill="#FDD65B"/>
                <path d="M10.3931 0.878418L9.83984 9.74343L10.7772 0.98651L10.3931 0.878418Z" fill="#FDD65B"/>
                <path d="M12.5633 15.8899C15.8239 14.4269 17.2825 10.5947 15.8213 7.33034C14.36 4.066 10.5321 2.60569 7.27154 4.06863C4.01092 5.53158 2.55227 9.3638 4.01355 12.6281C5.47482 15.8925 9.30267 17.3528 12.5633 15.8899Z" fill="url(#paint2_linear_612_977)"/>
                <path style={{mixBlendMode: 'multiply'}} d="M6.54736 2.29602C8.07132 1.61221 9.76358 1.39616 11.4102 1.67521C13.0568 1.95425 14.5837 2.71585 15.798 3.8637C17.0122 5.01155 17.8593 6.4941 18.2319 8.12387C18.6046 9.75365 18.4861 11.4574 17.8916 13.0198C17.297 14.5822 16.253 15.933 14.8917 16.9014C13.5303 17.8698 11.9127 18.4123 10.2433 18.4603C8.57401 18.5083 6.92795 18.0597 5.5133 17.1711C4.09866 16.2825 2.97896 14.994 2.2958 13.4683C1.84217 12.4553 1.5923 11.3627 1.56046 10.2529C1.52862 9.14319 1.71543 8.03804 2.11023 7.00059C2.50503 5.96313 3.10008 5.01369 3.86141 4.20648C4.62274 3.39926 5.53543 2.75009 6.54736 2.29602M6.31849 1.78445C1.7883 3.81777 -0.245182 9.16159 1.78532 13.697C3.81582 18.2323 9.15353 20.2681 13.6837 18.2353C18.2139 16.2025 20.2474 10.8587 18.2169 6.32331C16.1864 1.78794 10.8487 -0.24787 6.31849 1.78445Z" fill="url(#paint3_linear_612_977)"/>
                <path d="M12.6456 9.93169L11.75 10.3387C11.7818 10.6535 11.7107 10.9702 11.5475 11.2412C11.3816 11.5182 11.1197 11.7384 10.7618 11.9017C10.3233 12.101 9.88747 12.1317 9.45427 11.9939C9.02737 11.8584 8.68738 11.5566 8.43429 11.0883L8.42235 11.0669L12.4236 9.24877C12.3662 9.07362 12.2997 8.90154 12.2246 8.73322C12.2087 8.69835 12.1923 8.66398 12.1749 8.63011C11.9884 8.24028 11.7124 7.90024 11.3693 7.63785C11.0114 7.36673 10.5837 7.20329 10.1364 7.16663C9.67701 7.12546 9.20981 7.21279 8.73481 7.42864C8.24755 7.65014 7.86427 7.95117 7.58498 8.33173C7.30716 8.70875 7.14578 9.159 7.12076 9.62684C7.09926 10.0395 7.16329 10.4521 7.30884 10.8388C7.34367 10.9354 7.3833 11.0327 7.42775 11.1307C7.48082 11.2479 7.53804 11.3595 7.59941 11.4654C7.79307 11.81 8.05418 12.1119 8.36712 12.353C8.74121 12.6425 9.18994 12.8193 9.66075 12.8626C10.1485 12.9029 10.6381 12.8136 11.0803 12.6036C11.6773 12.3323 12.1085 11.9544 12.3739 11.4699C12.6358 11.0027 12.7315 10.4604 12.6456 9.93169ZM8.09347 9.07293C8.26507 8.67251 8.58423 8.3537 8.98458 8.1828C9.25966 8.0536 9.56101 7.99033 9.86475 7.99799C10.1533 8.00585 10.4335 8.09682 10.6718 8.26C10.9156 8.42488 11.142 8.73521 11.2858 9.05251L8.12581 10.4886C7.95167 9.99346 7.91983 9.47591 8.09347 9.07293V9.07293Z" fill="#FF905F"/>
                <path d="M13.5188 8.01929L12.8904 8.30471L12.2849 8.57967C12.3018 8.61354 12.3182 8.64791 12.3347 8.68278C12.4098 8.8511 12.4762 9.02318 12.5337 9.19833H12.5292C12.5293 9.19933 12.5293 9.20033 12.5292 9.20132C12.5315 9.20425 12.533 9.20767 12.5337 9.2113C12.5344 9.21494 12.5342 9.21869 12.5332 9.22224L13.174 8.93134L13.9343 10.609L13.3059 10.8944L13.591 11.5236L14.2194 11.2381L14.5045 11.8673L12.6193 12.724L12.9044 13.3531L15.418 12.211L14.8478 10.9527L14.5627 10.3236L13.8044 8.64841L13.5193 8.01929H13.5188Z" fill="#FF905F"/>
                <path d="M5.26409 8.23003L7.1493 7.37326L6.86421 6.74414L4.97899 7.6009L4.35059 7.88633L5.20637 9.7737L6.25123 12.0805L7.48863 11.5181C7.4276 11.4122 7.37038 11.3006 7.31698 11.1834C7.27253 11.0854 7.23289 10.9881 7.19806 10.8915L6.59453 11.1654L5.83428 9.48778L6.46268 9.20236L6.17759 8.57323L5.54918 8.85766L5.26409 8.23003Z" fill="#FF905F"/>
                <path d="M13.0105 10.0691L12.115 10.4761C12.1468 10.791 12.0757 11.1077 11.9125 11.3787C11.7466 11.6556 11.4847 11.8758 11.1268 12.0392C10.6883 12.2384 10.2525 12.2692 9.81926 12.1314C9.39236 11.9959 9.05237 11.694 8.79928 11.2258L8.78734 11.2044L12.7886 9.38622C12.7312 9.21107 12.6647 9.03899 12.5896 8.87067C12.5737 8.8358 12.5573 8.80143 12.5399 8.76756C12.3534 8.37774 12.0774 8.03769 11.7343 7.77531C11.3764 7.50419 10.9487 7.34074 10.5014 7.30408C10.042 7.26291 9.5748 7.35024 9.0998 7.5661C8.61254 7.78759 8.22926 8.08862 7.94997 8.46918C7.67215 8.8462 7.51077 9.29645 7.48575 9.76429C7.46425 10.1769 7.52828 10.5896 7.67383 10.9762C7.70866 11.0728 7.74829 11.1701 7.79274 11.2681C7.84581 11.3853 7.90303 11.4969 7.9644 11.6028C8.15782 11.9487 8.41913 12.2518 8.73261 12.494C9.10669 12.7835 9.55543 12.9602 10.0262 13.0036C10.5139 13.0439 11.0036 12.9545 11.4458 12.7445C12.0428 12.4732 12.474 12.0953 12.7394 11.6108C13.0019 11.1426 13.0975 10.599 13.0105 10.0691V10.0691ZM8.45846 9.21038C8.63006 8.80996 8.94922 8.49115 9.34957 8.32025C9.62465 8.19106 9.926 8.12778 10.2297 8.13544C10.5185 8.14321 10.7989 8.23418 11.0373 8.39745C11.2811 8.56233 11.5074 8.87266 11.6512 9.18996L8.49031 10.626C8.31666 10.1309 8.28432 9.61286 8.45796 9.21038H8.45846Z" fill="#FFE585"/>
                <path d="M13.8843 8.15675L13.2559 8.44217L12.6504 8.71713C12.6673 8.751 12.6837 8.78537 12.7001 8.82024C12.7753 8.98857 12.8417 9.16064 12.8992 9.3358H12.8947C12.8948 9.33679 12.8948 9.33779 12.8947 9.33878C12.897 9.34171 12.8985 9.34513 12.8992 9.34876C12.8999 9.3524 12.8997 9.35615 12.8987 9.3597L13.5395 9.0688L14.3018 10.7505L13.6734 11.0344L13.9584 11.6635L14.5869 11.3781L14.8719 12.0072L12.9867 12.864L13.2718 13.4931L15.7879 12.3504L15.2177 11.0922L14.9327 10.463L14.1724 8.78537L13.8873 8.15625L13.8843 8.15675Z" fill="#FFE585"/>
                <path d="M5.62857 8.36698L7.51379 7.51271L7.22968 6.88159L5.34447 7.73836L4.71606 8.02378L5.57185 9.91115L6.6167 12.2179L7.85411 11.6556C7.79308 11.5496 7.73586 11.438 7.68246 11.3208C7.63801 11.2229 7.59837 11.1256 7.56354 11.0289L6.96001 11.3029L6.19976 9.62523L6.82816 9.33981L6.54207 8.70819L5.91367 8.99361L5.62857 8.36698Z" fill="#FFE585"/>
                <path style={{mixBlendMode: 'color-dodge'}} d="M1.90151 7.48178C2.39972 5.88602 3.35938 4.47398 4.65915 3.42423C5.95891 2.37448 7.54042 1.73415 9.20367 1.58422C10.8669 1.43429 12.5372 1.78148 14.0034 2.58189C15.4696 3.38231 16.6658 4.6 17.4407 6.081C18.2156 7.562 18.5345 9.23979 18.357 10.9022C18.1795 12.5646 17.5136 14.137 16.4435 15.4206C15.3734 16.7042 13.9472 17.6412 12.3452 18.1133C10.7431 18.5854 9.03725 18.5713 7.44322 18.0728C6.38478 17.7417 5.40185 17.2052 4.55052 16.4938C3.6992 15.7825 2.99617 14.9102 2.48158 13.9268C1.96698 12.9435 1.6509 11.8682 1.55137 10.7626C1.45184 9.65689 1.57082 8.54241 1.90151 7.48278M1.36764 7.31342C-0.113063 12.0585 2.53788 17.1264 7.27654 18.6063C12.0152 20.0862 17.0748 17.4347 18.555 12.6931C20.0352 7.95151 17.3853 2.88016 12.6466 1.39876C7.90793 -0.0826486 2.84785 2.57033 1.36764 7.31342Z" fill="url(#paint4_radial_612_977)"/>
                <path style={{mixBlendMode: 'color-dodge'}} d="M3.53082 4.49063C2.27357 5.91677 1.53348 7.72573 1.43021 9.62506C1.32694 11.5244 1.86653 13.4031 2.96173 14.9574C4.05693 16.5118 5.64374 17.6509 7.46562 18.1906C9.2875 18.7304 11.238 18.6392 13.0017 17.9319L6.61513 2.28247C5.43251 2.77382 4.37758 3.52908 3.53082 4.49063V4.49063Z" fill="url(#paint5_radial_612_977)"/>
                <path style={{mixBlendMode: 'color-dodge'}} d="M8.58105 1.73062L14.7925 16.9471C15.7389 16.2662 16.5337 15.3959 17.1265 14.3913L12.035 1.91791C10.9088 1.61841 9.733 1.55465 8.58105 1.73062V1.73062Z" fill="url(#paint6_radial_612_977)"/>
                <path style={{mixBlendMode: 'screen'}} d="M11.0758 11.7374C13.3447 11.7374 15.1841 9.89597 15.1841 7.62444C15.1841 5.35291 13.3447 3.51147 11.0758 3.51147C8.80686 3.51147 6.96753 5.35291 6.96753 7.62444C6.96753 9.89597 8.80686 11.7374 11.0758 11.7374Z" fill="url(#paint7_radial_612_977)"/>
                <defs>
                  <linearGradient id="paint0_linear_612_977" x1="13.69" y1="18.4751" x2="6.83009" y2="2.76616" gradientUnits="userSpaceOnUse">
                    <stop offset="0.04" stopColor="#FFBA78"/>
                    <stop offset="0.4" stopColor="#FFC987"/>
                    <stop offset="1" stopColor="#FEECA8"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_612_977" x1="7.54262" y1="13.154" x2="13.6053" y2="6.53893" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFBB96"/>
                    <stop offset="0.23" stopColor="#FFFBC9"/>
                    <stop offset="0.54" stopColor="#F9B673"/>
                    <stop offset="0.64" stopColor="#F9B876"/>
                    <stop offset="0.72" stopColor="#FABE81"/>
                    <stop offset="0.81" stopColor="#FCC993"/>
                    <stop offset="0.86" stopColor="#FED2A3"/>
                    <stop offset="0.97" stopColor="#FFC28C"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_612_977" x1="8.25925" y1="7.54345" x2="12.7786" y2="14.1611" gradientUnits="userSpaceOnUse">
                    <stop offset="0.04" stopColor="#FFBA78"/>
                    <stop offset="0.4" stopColor="#FFC987"/>
                    <stop offset="1" stopColor="#FEECA8"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_612_977" x1="15.1042" y1="17.1424" x2="1.2031" y2="-2.24124" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFBB96"/>
                    <stop offset="0.23" stopColor="#FFFBC9"/>
                    <stop offset="0.54" stopColor="#F9B673"/>
                    <stop offset="0.64" stopColor="#F9B876"/>
                    <stop offset="0.72" stopColor="#FABE81"/>
                    <stop offset="0.81" stopColor="#FCC993"/>
                    <stop offset="0.86" stopColor="#FED2A3"/>
                    <stop offset="0.97" stopColor="#FFC28C"/>
                  </linearGradient>
                  <radialGradient id="paint4_radial_612_977" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3.35386 1.73648) scale(4.00726 4.01185)">
                    <stop stopColor="white"/>
                    <stop offset="1"/>
                  </radialGradient>
                  <radialGradient id="paint5_radial_612_977" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-11.7656 -1.55565) rotate(-24.4347) scale(24.0712 24.0893)">
                    <stop stopColor="white"/>
                    <stop offset="1"/>
                  </radialGradient>
                  <radialGradient id="paint6_radial_612_977" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-11.766 -1.55559) rotate(-24.4346) scale(24.0712 24.0893)">
                    <stop stopColor="white"/>
                    <stop offset="1"/>
                  </radialGradient>
                  <radialGradient id="paint7_radial_612_977" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.0758 7.62444) scale(4.10827 4.11297)">
                    <stop stopColor="white"/>
                    <stop offset="0.01" stopColor="#FDFDFD" stopOpacity="0.99"/>
                    <stop offset="0.23" stopColor="#B2B2B2" stopOpacity="0.7"/>
                    <stop offset="0.43" stopColor="#727272" stopOpacity="0.45"/>
                    <stop offset="0.62" stopColor="#414141" stopOpacity="0.26"/>
                    <stop offset="0.78" stopColor="#1E1E1E" stopOpacity="0.12"/>
                    <stop offset="0.91" stopColor="#080808" stopOpacity="0.03"/>
                    <stop offset="1" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
              <input defaultValue={0} id="subscribe"
                name="subscribe" className='staking__input' type="number" />
              <label className="form-control">
                <input value={isSubscribed}
                  onChange={(e) => handleChange(e)} className='staking__checkbox' type="checkbox" />
                By clicking this box, you confirm CFC coin staking agreement.
              </label>
              <button className='staking__button' disabled={!isSubscribed}>Approve</button>
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
