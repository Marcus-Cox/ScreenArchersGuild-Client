import React from "react";
import { Link } from "react-router-dom";
import "./ScreenShotCard.css";

export const ScreenShotCard = ({ screenshot, delScreenShot }) => {
// eslint-disable-next-line

  return (
    <section key={`screenshot--${screenshot.id}`} className="screenshot">
      
      <img className="screenshot__image" src={screenshot.image} />

      <div className="screenshot__content">
                Content:
                {screenshot.content}
      </div>

      <div className="screenshot__captureTool">
                Capture Tool:
                {screenshot.captureTool}
      </div>
      <div className="screenshot__editingTool">
                Editing Tool:
                {screenshot.editingTool}
        </div>

        <div className="screenshot__category">
                category:
                {screenshot.category}
        </div>

      <div className="=screenshot__timestamp">
            Time Stamp:
            {screenshot.timestamp}
      </div>

      <div className="buttons">
        <Link to={`${screenshot.id}/update`}>
          <button className="cardBtn">Edit</button>{" "}
        </Link>
        
        <button
          className="cardBtn"
          onClick={() => {
            delScreenShot(screenshot.id);
          }}
        >
          Delete
        </button>
      </div>
    </section>
  );
};
