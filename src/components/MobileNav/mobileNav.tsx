import userStore from "../../store/useStore";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import "./mobileNav.style.scss";
function MobileNav() {
  const { links, activeMenu, setDisActiveMenu } = userStore();

  console.log(activeMenu);
  return (
    <>
      <div className={activeMenu ? "navMenu" : "navMenu disActive"}>
        <div className="navMenuBody">
          <div className="closeBtn" onClick={() => setDisActiveMenu()}>
            <img src={CloseIcon} alt="" />
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
        </div>
      </div>
    </>
  );
}

export default MobileNav;
