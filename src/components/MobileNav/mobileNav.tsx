import useStore from "../../store/useStore";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import "./mobileNav.style.scss";
function MobileNav() {
  const { links, activeMenu, setDisActiveMenu } = useStore();

  const handleNav = () => {
    const body = document.querySelector("body");
    const html = document.querySelector("html");
    if (body && html) {
      body.style.overflowY = "scroll";
      html.style.overflowY = "scroll";
    }
    setDisActiveMenu();
  };
  console.log(activeMenu);
  return (
    <>
      <div className={activeMenu ? "navMenu" : "navMenu disActive"}>
        <div className="navMenuBody">
          <div className="closeBtn" onClick={() => handleNav()}>
            <img src={CloseIcon} alt="" />
          </div>
          <nav className="navMobileLinks">
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
        </div>
      </div>
    </>
  );
}

export default MobileNav;
