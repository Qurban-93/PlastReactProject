import "./appAboutUs.scss";
import conus from "../../images/Polygon 1.png";
import mainPhoto from "../../images/Rectangle 420.jpg";
import greenConus from "../../images/green-conus.png";

const AppAboutUs = () => {
  return (
    <div className="section-about-us">
      <div className="text">
        <h1>
          Haqqımızda <span>Məlumat</span>.
        </h1>
        <img src={conus} alt="conus" />
      </div>
      <div className="container">
        <div className="who-are-we">
          <div className="image-text">
            <div className="image">
              <img src={mainPhoto} alt="Main" />
            </div>
            <div className="small-text">
              <img src={greenConus} alt="conus" />
              <p>
                Tortor, nibh orci, sed in sed sed dictum tristique. Turpis
                laoreet euismod nisi viverra. Pretium id massa adipiscing
                pellentesque euismod ut pharetra.
              </p>
              <h3>- Anton Çexov</h3>
            </div>
          </div>
          <div className="desc">
            <h2>
              Biz kimik <span>?</span>
            </h2>
            <p>
              Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
              euismod nisi viverra. Pretium id massa adipiscing pellentesque
              euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum
              tristique. Turpis laoreet euismod nisi viverra. Pretium id massa
              adipiscing pellentesque euismod ut pharetra.
            </p>
            <br />
            <p>
              Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
              euismod nisi viverra. Pretium id massa adipiscing pellentesque
              euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum
              tristique. Turpis laoreet euismod nisi viverra. Pretium id massa
              adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci,
              sed in sed sed dictum tristique. Turpis laoreet euismod nisi
              viverra. Pretium id massa adipiscing pellentesque euismod ut
              pharetra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppAboutUs;
