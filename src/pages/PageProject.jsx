import React, { useState } from "react";
import peakmotion from "../images/peakmotion-small.gif";
import movie from "../images/movie-small.gif";
import SlidePanel from "../components/SlidePanel";
import PeakmotionProject from "../components/ProjectDetail/PeakmotionProject";
import MovieProject from "../components/ProjectDetail/MovieProject";

function PageProject() {
  const [openPanel, setOpenPanel] = useState(null);

  const handleImageClick = (panelName) => {
    setOpenPanel(panelName);
  };

  const closePanel = () => {
    setOpenPanel(null);
  };

  return (
    <>
      <main>
        <div className="projects-container">
          <div className="projects">
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
                src={movie}
                alt="movie website"
                onClick={() => handleImageClick("movie")}
                className="clickable"
              />
            </div>
          </div>
          <div className="projects">
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
                src={movie}
                alt="movie website"
                onClick={() => handleImageClick("movie")}
                className="clickable"
              />
            </div>
          </div>
        </div>
      </main>

      <SlidePanel isOpen={!!openPanel} onClose={closePanel}>
        {openPanel === "peakmotion" && <PeakmotionProject />}
        {openPanel === "movie" && <MovieProject />}
      </SlidePanel>
    </>
  );
}

export default PageProject;
