import React from 'react';
import NameImg from '../../../assets/images/name.png';
import './Home.scss';
import Logo from '../../components/Logo/Logo';
import IconBSC from '../../../assets/images/BSC.png';
import IconAVAX from '../../../assets/images/Avalanche.png';
import IconHECO from '../../../assets/images/HECO.png';
import IconPOLYGON from '../../../assets/images/Polygon.png';
import IconFANTOM from '../../../assets/images/Fantom.png';
import IconHarmony from '../../../assets/images/multichain/HARMONY.svg';
import IconCelo from '../../../assets/images/multichain/CELO.svg';
import IconMoonriber from '../../../assets/images/multichain/MOONRIVER.svg';
import IconArbitrum from '../../../assets/images/multichain/ARBITRUM.svg';

import routes from '../../router/routes';
import { useHistory } from 'react-router-dom';

const MultichainCompanies = () => {
  return (
    <div className="beefy-companies">
      <ul>
        <li>
          <a href="#">
            <img src={IconBSC} alt="BSC" />
            <span>BSC</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={IconAVAX} alt="AVAX" />
            <span>AVAX</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={IconHECO} alt="HECO" />
            <span>HECO</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={IconPOLYGON} alt="Polygon" />
            <span>Polygon</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={IconFANTOM} alt="Fantom" />
            <span>Fantom</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={IconHarmony} alt="Harmony" />
            <span>Harmony</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={IconArbitrum} alt="Arbitrum" />
            <span>Arbitrum</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={IconCelo} alt="Celo" />
            <span>Celo</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={IconMoonriber} alt="Moonriber" />
            <span>Moonriber</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

const Home = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/connect');
  }
  return (
    <div className="page">
      <div className="page-container">
        <div className="box-content" onClick={handleClick}>
          <div className="beefy-brand">
            <Logo notext={true} />
            <img src={NameImg} alt="Name" />
            <span>The Multichain Yield Optimizer</span>
          </div>
          <MultichainCompanies />
        </div>
      </div>
    </div>
  );
};

export default Home;
