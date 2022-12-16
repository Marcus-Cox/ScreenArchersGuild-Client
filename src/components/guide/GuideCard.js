import React from "react";
import { Link } from "react-router-dom";
import "./GuideCard.css";

export const GuideCard = ({ guide, delGuide }) => {
// eslint-disable-next-line

  return (
    <section key={`guide--${guide.id}`} className="guide">
      
      <div className="guide__title"> Title: {guide.title}</div>
      
      <div className="guide__description"> Description:
      
        {guide.description}
      </div>

      <div className="guide__content"> Content:
        
        {guide.content}
      </div>

      <div className="=guide__publishing_date">
          Publishing Date:
        {guide.publishing_date}
      </div>

      <div className="buttons">
        <Link to={`${guide.id}/update`}>
          <button className="cardBtn">Edit</button>{" "}
        </Link>
        
        <button
          className="cardBtn"
          onClick={() => {
            delGuide(guide.id);
          }}
        >
          Delete
        </button>
      </div>
    </section>
  );
};
