import AppFooter from "../../appFooter/AppFooter";
import AppPageHeader from "../../appPageHeader/AppPageHeader";

import "./aboutUsPage.scss";

import mainPhoto from "../../../images/Rectangle 420.jpg";
import secondPhoto from "../../../images/Rectangle 420@2x.jpg";
import greenConus from "../../../images/green-conus.png";

const AboutUsPage = () => {
  const content = {
    first: "Haqqımızda məlumat",
    second: "Məlumat",
  };

  const color = {
    footer_back: "white",
    text_color: "black",
  };

  const View = () => {
    return (
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
        <div className="what-we-do">
          <div className="desc">
            <h2>
              Nə işlə məşğuluq <span>?</span>
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
          <div className="image-text">
            <div className="image">
              <img src={secondPhoto} alt="Main" />
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
        </div>
      </div>
    );
  };

  return (
    <>
      <AppPageHeader content={content} />
      <View />
      <AppFooter color={color} />
    </>
  );
};

export default AboutUsPage;
