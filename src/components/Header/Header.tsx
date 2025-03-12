import React from "react";
import "./header.style.scss";
import LogoIcon from "../../assets/Logo.svg";
import userStore from "../../store/useStore";
const Header: React.FC = () => {
  const { links } = userStore();
  return (
    <>
      <header>
        <div className="logo">
          <img src={LogoIcon} alt="" />
        </div>
        <nav>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.anchor}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="authActionBtns">
          <button>Вход</button>
          <button>Регистрация</button>
        </div>
      </header>
    </>
  );
};

export default Header;
