import { useEffect, useState } from "react";

import conus from "../../images/Polygon 2.png";
import "./appContactWithUs.scss";

const AppContactWithUs = ({ settingForCntcWthUs }) => {
  const { display, backGroundColor, fontColor } = settingForCntcWthUs;
  const [savedData, setSavedData] = useState([]);
  const [inputValues, setInputValues] = useState({
    fullName: "",
    phoneNumber: "",
    message: "",
  });

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("data")) || [];
    setSavedData(existingData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...inputValues };

    if (savedData.length > 0) {
      if (
        savedData.some(
          (item) =>
            item.fullName === inputValues.fullName &&
            item.phoneNumber === inputValues.phoneNumber
        )
      ) {
        alert("Siz artiq qeydiyyatdan kecmisiz !");
        return;
      }
    }

    const updatedDataArray = [...savedData, newData];

    localStorage.setItem("data", JSON.stringify(updatedDataArray));
    setSavedData([...savedData, newData]);
    alert("Melumat gonderildi !");
    setInputValues({ fullName: "", phoneNumber: "", message: "" });
  };

  return (
    <section className="contact-with-us">
      <div style={{ display: display }} className="text-title">
        <h1>
          Bizimlə <span> əlaqə </span>.
        </h1>
        <img src={conus} alt="logo" />
      </div>
      <div style={{ backgroundColor: backGroundColor }} className="form">
        <div className="container">
          <form>
            <div className="name-mobile">
              <input
                value={inputValues.fullName}
                name="fullName"
                style={{ color: fontColor }}
                onChange={(e) => handleInputChange(e)}
                className="name-input"
                type="text"
                placeholder="Ad Soyad"
              />
              <input
                value={inputValues.phoneNumber}
                name="phoneNumber"
                style={{ color: fontColor }}
                onChange={(e) => handleInputChange(e)}
                className="phone-input"
                type="tel"
                placeholder="Mobil nömrə"
              />
            </div>
            <div className="message">
              <textarea
                value={inputValues.message}
                name="message"
                style={{ color: fontColor }}
                onChange={(e) => handleInputChange(e)}
                className="message-input"
                cols="30"
                rows="5"
                placeholder="Mesajiniz..."
              ></textarea>
            </div>
            <button
              onClick={(e) => handleSubmit(e)}
              className="form-btn"
              type="submit"
            >
              Göndər
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppContactWithUs;
