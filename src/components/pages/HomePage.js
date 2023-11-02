import AppApply from "../appApply/AppApply";
import AppWeBuy from "../appWeBuy/AppWeBuy";
import AppOurProducts from "../appOurProducts/AppOurProducts";
import AppAboutUs from "../appAboutUs/AppAboutUs";
import AppContactWithUs from "../appContactWithUs/AppContactWithUs";
import AppFooter from "../appFooter/AppFooter";

import generateProducts from "../../services/generateProduct";

const HomePage = () => {
  const color = {
    footer_back: "black",
    text_color: "white",
  };
  const settingForCntcWthUs = { display: "block", backGroundColor: "black" };
  const { products } = generateProducts();

  const settingWeBuy = {
    products: products,
    display: "block",
  };

  return (
    <>
      <AppApply />
      <AppWeBuy settingWeBuy={settingWeBuy} />
      <AppOurProducts />
      <AppAboutUs />
      <AppContactWithUs settingForCntcWthUs={settingForCntcWthUs} />
      <AppFooter color={color} />
    </>
  );
};

export default HomePage;
