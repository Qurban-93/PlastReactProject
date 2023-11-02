import AppWeBuy from "../appWeBuy/AppWeBuy";
import AppPageHeader from "../appPageHeader/AppPageHeader";
import AppFooter from "../appFooter/AppFooter";

import generateProducts from "../../services/generateProduct";

const WeBuyPage = () => {
  const { products } = generateProducts();
  const content = {
    first: "Biz Alırıq !",
    second: "Alırıq",
  };
  const settingWeBuy = {
    display: "none",
    products: products,
  };
  const color = {
    footer_back: "white",
    text_color: "black",
  };

  return (
    <>
      <AppPageHeader content={content} />
      <AppWeBuy settingWeBuy={settingWeBuy } />
      <AppFooter color={color} />
    </>
  );
};

export default WeBuyPage;
