import React, { useState } from "react";
import peakmotion from "../images/peakmotion-small.gif";
import movie from "../images/movie-small.gif";
import aivideogenerator from "../images/aivideogenerator-small.gif";
import postdashboard from "../images/postdashboard-small.gif";
import news from "../images/news-small.gif";
import openworld from "../images/openworld-small.gif";
import SlidePanel from "../components/SlidePanel";
import PeakmotionProject from "../components/ProjectDetail/PeakmotionProject";
import MovieProject from "../components/ProjectDetail/MovieProject";
import AiVideoGeneratorProject from "../components/ProjectDetail/AiVideoGeneratorProject";
import PostDashboardProject from "../components/ProjectDetail/PostDashboardProject";
import NewsProject from "../components/ProjectDetail/NewsProject";
import OpenWorldProject from "../components/ProjectDetail/OpenWorldProject";

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
                src={news}
                alt="news"
                onClick={() => handleImageClick("news")}
                className="clickable"
              />
            </div>
            <div>
              <img
                src={postdashboard}
                alt="postdashboard"
                onClick={() => handleImageClick("postdashboard")}
                className="clickable"
              />
            </div>
          </div>
          <div className="projects">
            <div>
              <img
                src={aivideogenerator}
                alt="ai video generator"
                onClick={() => handleImageClick("aivideogenerator")}
                className="clickable"
              />
            </div>
            <div>
              <img
                src={openworld}
                alt="openworld"
                onClick={() => handleImageClick("openworld")}
                className="clickable"
              />
            </div>
          </div>
        </div>
      </main>

      <SlidePanel isOpen={!!openPanel} onClose={closePanel}>
        {openPanel === "peakmotion" && <PeakmotionProject />}
        {openPanel === "movie" && <MovieProject />}
        {openPanel === "news" && <NewsProject />}
        {openPanel === "aivideogenerator" && <AiVideoGeneratorProject />}
        {openPanel === "postdashboard" && <PostDashboardProject />}
        {openPanel === "openworld" && <OpenWorldProject />}
      </SlidePanel>
    </>
  );
}

export default PageProject;
