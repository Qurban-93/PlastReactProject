import { useTranslation } from "react-i18next";
import { useMyContext } from '../../context/ModalContext';
import "./appApply.scss";

const AppApply = () => {
  const { t } = useTranslation();

  const { setToOpenModal } = useMyContext();
  
  return (
    <>
      <div className="apply-section">
        <div className="text">
          <p>{t("appApply.smallText")}</p>
          <h1> {t("appApply.mainText")}</h1>
          <a onClick={setToOpenModal} href="*">
          {t("appApply.applyBtn")}
          </a>
        </div>
      </div>
      <div>
      </div>
    </>
  );
};

export default AppApply;
