import React from "react";

function SlidePanel({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>}

      <div className={`slide-panel ${isOpen ? "open" : ""}`}>
        <button onClick={onClose} className="close-button">
          ×
        </button>
        <div className="panel-content">{children}</div>
      </div>
    </>
  );
}

export default SlidePanel;
