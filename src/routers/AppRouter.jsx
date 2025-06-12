// App Router

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageProject from "../pages/PageProject";
import PageAbout from "../pages/PageAbout";
import PageContact from "../pages/PageContact";
import PageNotFound from "../pages/PageNotFound";
import { appTitle, appAuthor } from "../globals/globalVariables";
import CustomCursor from "../components/CustomCursor";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <CustomCursor />
        <Nav />
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/projects" element={<PageProject />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer author={appAuthor} /> */}
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
