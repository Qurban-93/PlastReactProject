import { useState , useRef , useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../images/Frame.png";
import "./header.scss";

const AppHeader = () => {

  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (isOpen && e.key === "Escape") {
        closeModal(e);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  const changeLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
  };

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = (e) => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <header>
      <div className="logo">
        <NavLink end to={"/"}>
          <img src={logo} alt="logo"></img>
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
              })}
              end
              to={"/"}
            >
              {t("nav-element.mainPage")}
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
              })}
              end
              to={"/aliriq"}
            >
              {t("nav-element.weBuy")}
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
              })}
              end
              to={"/mehsullarimiz"}
            >
              {t("nav-element.ourProducts")}
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
              })}
              end
              to={"/cihazlar"}
            >
              {t("nav-element.devices")}
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
              })}
              end
              to={"/melumat"}
            >
              {t("nav-element.aboutUs")}
            </NavLink>
          </li>
          <li>
            <NavLink
              tyle={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
              })}
              end
              to={"/elaqe"}
            >
              {t("nav-element.contact")}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="search-language">
        <NavLink end to={"/search"}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </NavLink>
        <select onChange={changeLanguage} defaultValue={i18n.language} className="lang-choose-btn" href="*">
          <option value={'az'}>Az</option>
          <option value={'en'}>En</option>
        </select>
      </div>
      <div className="mobile-menu">
        <i onClick={openModal} class="fa-solid fa-bars"></i>
      </div>
      {isOpen && (
          <div
            className="modal-background-mobile-header"
          >
            <div className="modal-content" ref={modalRef}>
                <div className="close-icon-modal">
                  <i onClick={(e) => closeModal(e)} class="fa-solid fa-xmark"></i>
                </div>
                <ul>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "",
                })}
                end
                to={"/"}
                onClick={closeModal}
              >
                {t("nav-element.mainPage")}
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "",
                })}
                end
                to={"/aliriq"}
                onClick={closeModal}
              >
                {t("nav-element.weBuy")}
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "",
                })}
                end
                to={"/mehsullarimiz"}
                onClick={closeModal}
              >
                {t("nav-element.ourProducts")}
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "",
                })}
                end
                to={"/cihazlar"}
                onClick={closeModal}
              >
                {t("nav-element.devices")}
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "",
                })}
                end
                to={"/melumat"}
                onClick={closeModal}
              >
                {t("nav-element.aboutUs")}
              </NavLink>
            </li>
            <li>
              <NavLink
                tyle={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "",
                })}
                end
                to={"/elaqe"}
                onClick={closeModal}
              >
                {t("nav-element.contact")}
              </NavLink>
            </li>
                </ul>
                <div className="search-language-mobile">
                    <NavLink end to={"/search"} onClick={closeModal}>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </NavLink>
                    <select onChange={changeLanguage} defaultValue={i18n.language} className="lang-choose-btn" href="*">
                      <option value={'az'}>Az</option>
                      <option value={'en'}>En</option>
                    </select>
              </div>
            </div>
          </div>
        )}
    </header>
  );
};

export default AppHeader;
