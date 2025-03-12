import React from "react";
import "./footer.style.scss";
import userStore from "../../store/useStore";
import LogoIcon from "../../assets/Logo.svg";
const Footer: React.FC = () => {
  const { links } = userStore();

  return (
    <>
      <footer>
        <div className="footerLeftSide">
          <h3>Быстрая навигация</h3>
          <nav>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.anchor}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footerRightSide">
          <div className="logo">
            <img src={LogoIcon} alt="" width={165} />
          </div>
          <p>© 2022 TradeBlade. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
