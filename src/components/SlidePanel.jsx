import React from "react";

function SlidePanel({ isOpen, onClose, children, projectLink }) {
  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
      <div className={`slide-panel ${isOpen ? "open" : ""}`}>
        <div className="panel-header">
          <button onClick={onClose} className="close-button">
            {/* Back arrow SVG */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="silver"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <a href="#" onClick={onClose} className="back-button">
            Back to Projects
          </a>
        </div>
        <div className="underline"></div>
        <div className="panel-content">{children}</div>

        {projectLink && (
          <div className="open-project">
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              Open Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ marginLeft: "0.5rem" }}
              >
                <path
                  d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default SlidePanel;
