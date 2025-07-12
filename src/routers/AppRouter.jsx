// App Router

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import ResponsiveNav from "../components/ResponsiveNav";
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageProject from "../pages/PageProject";
import PageAbout from "../pages/PageAbout";
import PageResume from "../pages/PageResume";
import PageEmail from "../pages/PageEmail";
import PageNotFound from "../pages/PageNotFound";
import { appTitle, appAuthor } from "../globals/globalVariables";
import CustomCursor from "../components/CustomCursor";

function AppRouter() {
  return (
    <BrowserRouter basename="/portfolio">
      <div className="wrapper">
        <CustomCursor />
        <ResponsiveNav />
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/projects" element={<PageProject />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/resume" element={<PageResume />} />
          <Route path="/email" element={<PageEmail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer author={appAuthor} /> */}
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
