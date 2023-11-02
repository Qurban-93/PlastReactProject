import AppPageHeader from "../appPageHeader/AppPageHeader";
import AppWeBuy from "../appWeBuy/AppWeBuy";
import AppFooter from "../appFooter/AppFooter";

import generateProducts from "../../services/generateProduct";

const DevicesPage = () => {
  const { devices } = generateProducts();
  const content = {
    first: "Cİhazlar",
    second: "Cihazlar",
  };
  const settingWeBuy = {
    display: "none",
    products: devices,
  };

  const color = {
    footer_back : "white",
    text_color: "black"
  }
  return (
    <>
      <AppPageHeader content={content} />
      <AppWeBuy settingWeBuy={settingWeBuy } />
      <AppFooter color={color} />
    </>
  );
};
export default DevicesPage;
