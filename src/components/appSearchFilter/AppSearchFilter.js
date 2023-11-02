import { useState } from "react";

import "./appSearchFilter.scss";
import generateProduct from "../../services/generateProduct";

const AppSearchFilter = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [text, setText] = useState("Axtarış üçün açar sözünü daxil edin ...");

  const onFiltered = (e) => {
    setProducts(
      generateProduct().filterProducts.filter((p) =>
        p.title.toLowerCase().includes(e.toLowerCase())
      )
    );
    setSearch(e);

    if (e.length > 0) {
      setText(`“${e}” açar sözü üzrə axtarış nəticələri...`);
    } else {
      setText("Axtarış üçün açar sözünü daxil edin ...");
      setProducts([]);
    }
  };

  return (
    <>
      <div className="photo-header">
        <div className="text-center">
          <h1>Axtar</h1>
          <div className="search-form">
            <input
              value={search}
              onChange={(e) => onFiltered(e.target.value)}
              type="text"
              placeholder="Axtar..."
            />
            <a href="*" className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="search-desc">{text}</h3>
        <div className="filtered-products">
          {products.map((item, id) => (
            <div className="product" key={id}>
              <img src={item.image} alt="jpg" />
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppSearchFilter;
