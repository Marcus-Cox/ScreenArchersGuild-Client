import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./GuideCard.css";

export const GuideCard = ({ guide, delGuide }) => {
// eslint-disable-next-line
const navigate  = useNavigate();

  return (
    <section key={`guide--${guide.id}`} className="guide">
      
      <img className="guide__image" src={guide.image} />

      <div className="guide__title">Title: {guide.title}</div>
      
      <div className="guide__description">
        
        {guide.description}
      </div>

      <div className="guide__content">{guide.content}</div>

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
