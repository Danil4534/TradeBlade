import React from "react";
import "./header.style.scss";
import LogoIcon from "../../assets/Logo.svg";
import userStore from "../../store/useStore";
import Burger from "../../assets/icons/burger.svg";
const Header: React.FC = () => {
  const { links, setActiveMenu } = userStore();

  const handleNav = () => {
    const body = document.getElementsByTagName("body")[0];
    if (body) {
      body.style.overflow = "hidden";
    }
    setActiveMenu();
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src={LogoIcon} alt="" />
        </div>
        <nav>
          <ul>
            {links.map((link: any, index: number) => (
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
        <div className="Burger" onClick={() => handleNav()}>
          <img src={Burger} alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
