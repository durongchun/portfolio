import React, { useState } from "react";
import peakmotion from "../images/peakmotion.gif";
import peakmotionadmin from "../images/peakmotion-admin.gif";
import SlidePanel from "../components/SlidePanel";
import PeakmotionProject from "../components/ProjectDetails/PeakmotionProject";

function PageProject() {
  const [openPanel, setOpenPanel] = useState(null); // "peakmotion" or "admin"

  const handleImageClick = (panelName) => {
    setOpenPanel(panelName);
  };

  const closePanel = () => {
    setOpenPanel(null);
    12;
  };

  return (
    <>
      <main>
        <div className="project">
          <div className="peakmotion">
            <div>
              <img
                src={peakmotion}
                alt="peakmotion ecommerce website"
                onClick={() => handleImageClick("peakmotion")}
                className="clickable"
              />
            </div>
            <div>
              <img
                src={peakmotionadmin}
                alt="peakmotion ecommerce website admin panel"
                onClick={() => handleImageClick("admin")}
                className="clickable"
              />
            </div>
          </div>
        </div>
      </main>

      <SlidePanel isOpen={!!openPanel} onClose={closePanel}>
        {openPanel === "peakmotion" && <PeakmotionProject />}
        {openPanel === "admin" && (
          <p>Details about the Peakmotion Admin Panel...</p>
        )}
      </SlidePanel>
    </>
  );
}

export default PageProject;
