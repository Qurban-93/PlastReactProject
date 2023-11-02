import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import {
  HomePage,
  WeBuyPage,
  Page404,
  OurProductsPage,
  AboutUsPage,
  ContactWithUsPage,
  DevicesPage,
} from "../pages/Index";

import AppHeader from "../appHeader/AppHeader";
import AppSearchFilter from "../appSearchFilter/AppSearchFilter";
import AppApplyModal from "../appApplyModal/AppApplyModal";
import { useMyContext } from "../../context/ModalContext";

function App() {

  const { isOpen } = useMyContext();

  return (
    <Router>
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="aliriq" element={<WeBuyPage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/mehsullarimiz" element={<OurProductsPage />} />
          <Route path="/melumat" element={<AboutUsPage />} />
          <Route path="/elaqe" element={<ContactWithUsPage />} />
          <Route path="/cihazlar" element={<DevicesPage />} />
          <Route path="/search" element={<AppSearchFilter />} />
        </Routes>
          {isOpen && <AppApplyModal />}
      </main>
    </Router>
  );
}

export default App;
