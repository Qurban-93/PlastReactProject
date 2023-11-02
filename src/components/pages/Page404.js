import ErrorMessage from "../errorMessage/ErrorMessage";
import AppPageHeader from "../appPageHeader/AppPageHeader";
import { Link } from "react-router-dom";

const Page404 = () => {
  const content = { first: "Səhv", second: "Səhv" };
  return (
    <div>
      <AppPageHeader content={content} />
      <ErrorMessage />
      <p style={{ textAlign: "center" }}>Page Not Found </p>
      <Link style={{ textAlign: "center", display: "block" }} to={"/"}>
        Go Home Page
      </Link>
    </div>
  );
};

export default Page404;
