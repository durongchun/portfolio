import React, { useState } from "react";
import peakmotion from "../images/peakmotion.gif";
import peakmotionadmin from "../images/peakmotion-admin.gif";
import SlidePanel from "../components/SlidePanel"; // Import the new component

function PageProject() {
  const [openPanel, setOpenPanel] = useState(null); // "peakmotion" or "admin"

  const handleImageClick = (panelName) => {
    setOpenPanel(panelName);
  };

  const closePanel = () => {
    setOpenPanel(null);
  };

  return (
    <>
      <main>
        <div className="project">
          <div className="peakmotion">
            <div>
              <h2>Peakmotion</h2>
              <img
                src={peakmotion}
                alt="peakmotion ecommerce website"
                onClick={() => handleImageClick("peakmotion")}
                className="clickable"
              />
            </div>
            <div>
              <h2>Peakmotion Admin</h2>
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
        {openPanel === "peakmotion" && (
          <p>Details about the Peakmotion eCommerce website...</p>
        )}
        {openPanel === "admin" && (
          <p>Details about the Peakmotion Admin Panel...</p>
        )}
      </SlidePanel>
    </>
  );
}

export default PageProject;
