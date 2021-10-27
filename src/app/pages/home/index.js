import React from "react";
import NameImg from "../../../assets/images/name.png";
import "./Home.scss";
import Logo from "../../components/Logo/Logo";
import IconBSC from "../../../assets/images/BSC.png";
import IconAVAX from "../../../assets/images/Avalanche.png";
import IconHECO from "../../../assets/images/HECO.png";
import IconPOLYGON from "../../../assets/images/Polygon.png";
import IconFANTOM from "../../../assets/images/Fantom.png";

const Home = () => {
  return (
    <div className="page">
      <div className="page-container">
        <div className="page-content">
          <div className="beefy-brand">
            <Logo notext={true} />
            <img src={NameImg} alt="Name" />
            <span>The Multichain Yield Optimizer</span>
          </div>
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
                  <img src={IconAVAX} alt="BSC" />
                  <span>AVAX</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={IconHECO} alt="BSC" />
                  <span>HECO</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={IconPOLYGON} alt="BSC" />
                  <span>Polygon</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={IconFANTOM} alt="BSC" />
                  <span>Fantom</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
