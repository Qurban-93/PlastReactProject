import AppPageHeader from "../appPageHeader/AppPageHeader";
import AppContactWithUs from "../appContactWithUs/AppContactWithUs";
import AppFooter from "../appFooter/AppFooter";

const ContactWithUsPage = () => {
  const content = {
    first: "Bİzİmlə Əlaqə",
    second: "Əlaqə",
  };

  const color = {
    footer_back: "white",
    text_color: "black",
  };

  const settingForCntcWthUs = {
    display: "none",
    backGroundColor: "white",
    fontColor: "black",
  };

  return (
    <>
      <AppPageHeader content={content} />
      <AppContactWithUs settingForCntcWthUs={settingForCntcWthUs} />
      <AppFooter color={color} />
    </>
  );
};

export default ContactWithUsPage;
