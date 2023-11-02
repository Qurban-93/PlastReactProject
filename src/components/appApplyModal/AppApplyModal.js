import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useMyContext } from "../../context/ModalContext";

import "./appApplyModal.scss";


const AppApplyModal = () => {
  const categories = ["Kagiz" ,"A4", "Karton"];
    const modalRef = useRef();
    const [modalData, setModalData] = useState(null);
    const [inputs, setInputs] = useState({category : categories[0]});
    const { t } = useTranslation();
    const { isOpen , setToCloseModal , product } = useMyContext();

    

    useEffect(() => {
        const handleEscapeKey = (e) => {
          if (isOpen && e.key === "Escape") {
            setToCloseModal(e);
          }
        };
    
        document.addEventListener("keydown", handleEscapeKey);
    
        return () => {
          document.removeEventListener("keydown", handleEscapeKey);
        }; // eslint-disable-next-line
      }, [isOpen]);
    
      useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("modalData")) || [];
        setModalData(savedData);
      }, []);
  
      const handleBackgroundClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          setToCloseModal(e);
        }
      };
    
      const onChangeInputs = (e) => {
        if (e.target.value.length > 0) {
          setInputs({ ...inputs, [e.target.name]: e.target.value });
        }
      };

      function isPropertyEmpty(obj, propertyName) {
        return !(propertyName in obj) || obj[propertyName] === null || obj[propertyName] === undefined || obj[propertyName] === '';
      }
    
      const onSubmitModalForm = (e) => {
        e.preventDefault();
        if(Object.keys(inputs).length === 0 
        || isPropertyEmpty(inputs,"weight") 
        || isPropertyEmpty(inputs,"fullName") 
        || isPropertyEmpty(inputs,"phoneNumber")
        || isPropertyEmpty(inputs,"category")){
          alert("Bosh Olmaz !");
          return;
        }
        const newData = { ...inputs , product : product };
        const updatedData =
          modalData.length > 0 ? [...modalData, newData] : [newData];
    
        localStorage.setItem("modalData", JSON.stringify(updatedData));
        setModalData(updatedData);
    
        alert("Melumat gonderildi !");
        setToCloseModal(e);
      };

    return(
        <div
            className="modal-background"
            onClick={(e) => handleBackgroundClick(e)}
          >
            <div className="modal-content" ref={modalRef}>
              <div className="close-icon-modal">
                <i onClick={(e) => setToCloseModal(e)} class="fa-solid fa-xmark"></i>
              </div>
              <h2>{t("appApply.applyBtn")}</h2>
              <select
                onChange={(e) => onChangeInputs(e)}
                name="category"
                type="text"
              >
                {categories.map(item => (
                  <option value={item}>{t(`applyModal.categories.${item}`)}</option>
                ))}
              </select>
              <input
                onChange={(e) => onChangeInputs(e)}
                name="weight"
                type="text"
                placeholder={t("applyModal.weight")}
              />
              <input
                onChange={(e) => onChangeInputs(e)}
                name="fullName"
                type="text"
                placeholder={t("applyModal.fullName")}
              />
              <input
                onChange={(e) => onChangeInputs(e)}
                name="phoneNumber"
                type="text"
                placeholder={t("applyModal.contactPhone")}
              />
              <button onClick={(e) => onSubmitModalForm(e)}>{t("applyModal.applyBtn")}</button>
            </div>
          </div>
    )
}

export default AppApplyModal;