import {useMyContext} from "../../../context/ModalContext";
import AppPageHeader from "../../appPageHeader/AppPageHeader";
import AppFooter from "../../appFooter/AppFooter";
import "./ourProductsPage.scss";

import generateProduct from '../../../services/generateProduct';


const OurProductsPage = () => {

  const {filterProducts} = generateProduct();
  const { setToOpenModal } = useMyContext();

  const content = {
    first: "Məhsullarımız",
    second: "Məhsullarımız",
  };

  const color = {
    footer_back: "white",
    text_color: "black",
  };


  const Products = () => {
    const arrProd = filterProducts.map((item, id) => (
      <div key={id} className="product">
        <img src={item.image} alt="jpg" />
        <h5>{item.title}</h5>
        <p>{item.desc}</p>
        <a onClick={(e) => setToOpenModal(e,item)} href="*">Müraciət et</a>
        <span>{item.price}</span>
      </div>
    ));

    return (
      <div className="container">
        <div className="products">{arrProd}</div>
      </div>
    );
  };

  return (
    <>
      <AppPageHeader content={content} />
      <Products />
      <AppFooter color={color} />
    </>
  );
};

export default OurProductsPage;
