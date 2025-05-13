import React from "react";

function SlidePanel({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>}

      <div className={`slide-panel ${isOpen ? "open" : ""}`}>
        <div className="panel-header">
          <button onClick={onClose} className="close-button">
            {/* Inline SVG icon (simple left arrow) */}
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
          <a href="" onClick={onClose} className="back-button">
            Back to Projects
          </a>
        </div>
        <div className="underline"></div>

        <div className="panel-content">{children}</div>
      </div>
    </>
  );
}

export default SlidePanel;
