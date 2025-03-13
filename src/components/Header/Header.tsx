import React from "react";
import "./header.style.scss";
import LogoIcon from "../../assets/Logo.svg";
import useStore from "../../store/useStore";
import Burger from "../../assets/icons/burger.svg";
const Header: React.FC = () => {
  const { links, setActiveMenu } = useStore();

  const handleNav = () => {
    const body = document.querySelector("body");
    const html = document.querySelector("html");
    if (body && html) {
      body.style.overflowY = "hidden";
      html.style.overflowY = "hidden";
    }
    setActiveMenu(true);
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
