import { NavLink } from "react-router-dom";
import "./appPageHeader.scss";

const AppPageHeader = ({ content }) => {
  const { first, second } = content;

  return (
    <>
      <div className="photo-header">
        <div className="text-center">
          <h1>{first}</h1>
          <p>
            <NavLink end to={"/"}>
              Ana səhifə
            </NavLink>{" "}
            <i class="fa-solid fa-angles-right"></i> <span> {second} </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default AppPageHeader;
