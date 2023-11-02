import { useTranslation } from "react-i18next";
import { useMyContext } from "../../context/ModalContext";
import conus from "../../images/Polygon 1.png";
import "./appWeBuy.scss";


const AppWeBuy = ({ settingWeBuy }) => {
  const { products } = settingWeBuy;
  const { t } = useTranslation();
  const { setToOpenModal } = useMyContext();

  const View = () => {
    const obj = products.map((item, index) => (
      <div key={index} className="box">
        <span>{item.price}</span>
        <img alt="aftafa" src={item.image} />
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="box-btns">
          <a href="*" className="more-info-btn">
            Ətraflı məlumat
          </a>
          <a onClick={(e) => setToOpenModal(e,item)} href="*" className="apply-btn">
            Müraciət et
          </a>
        </div>
      </div>
    ));
    return obj;
  };

  return (
    <div className="section-we-buy">
      <div className="text" style={{ display: settingWeBuy.display }}>
        <h1>
          {t("weBuy.headTextFirstPart")} <span>{t("weBuy.headTextSecondPart")}</span> !
        </h1>
        <img src={conus} alt="aftafa" />
      </div>
      <div className="container">
        <div className="products">
          <View/>
        </div>
      </div>
    </div>
  );
};

export default AppWeBuy;
