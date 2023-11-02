import compMan from "../../images/XMLID_2603_.png";
import headset from "../../images/headset 1.png";
import map from "../../images/location (3) 1.png";

import "./appFooter.scss";

const AppFooter = ({ color }) => {
  return (
    <footer style={{ backgroundColor: color.footer_back }}>
      <div className="container">
        <div className="footer-section">
          <div style={{ color: color.text_color }} className="our-activity">
            <img src={compMan} alt="xmlid" />
            <h2>Fəaliyyətimiz</h2>
            <p className="products-text">Məhsullarımız</p>
            <p>Biz alırıq</p>
            <p>Cihazdar</p>
          </div>
          <div style={{ color: color.text_color }} className="contact-us">
            <img src={headset} alt="headset" />
            <h2>Bizimlə əlaqə</h2>
            <p>+994 12 222 22 22</p>
            <p>info@plast.az</p>
            <div
              style={{ color: color.text_color }}
              className="social-web-icons"
            >
              <a href="*">
                <i
                  style={{ color: color.text_color }}
                  className="fa-brands fa-square-facebook"
                ></i>
              </a>
              <a href="*">
                <i
                  style={{ color: color.text_color }}
                  className="fa-brands fa-instagram"
                ></i>
              </a>
              <a href="*">
                <i
                  style={{ color: color.text_color }}
                  className="fa-brands fa-youtube"
                ></i>
              </a>
              <a href="*">
                <i
                  style={{ color: color.text_color }}
                  className="fa-brands fa-whatsapp"
                ></i>
              </a>
            </div>
          </div>
          <div style={{ color: color.text_color }} className="our-space">
            <img src={map} alt="location" />
            <h2>Bizim Məkan</h2>
            <p>
              Bakı şəhəri, Fikrət Əmirov 24, Perron Gallery 2-ci mərtəbə.( 28
              may metro stansiyasının yanı)
            </p>
          </div>
        </div>
      </div>
      <hr style={{ color: color.text_color }} />
      <div className="container end-texts">
        <div style={{ color: color.text_color }} className="end-text-left">
          <p>
            Copyright © 2021 <span>PLAST</span>. Bütün hüquqlar qorunur.
          </p>
        </div>
        <div style={{ color: color.text_color }} className="end-text-right">
          <p>
            Developed by <span>Crocusoft LLC</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
