import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createGuide, getGuides } from "./GuideManager.js";
import "./GuideForm.css";

export const NewGuideForm = () => {
  const navigate  = useNavigate();
  const [guides, setGuides] = useState([]);

  const [currentGuide, setGuide] = useState({
    title: "",
    description: "",
    content: "",
    publishing_date: "",
  });

  const changeGuideState = (domEvent) => {
    const newGuide = { ...currentGuide };
    let selectedVal = domEvent.target.value;
    newGuide[domEvent.target.id] = selectedVal;
    setGuide(newGuide);
  };

  return (
    <form className="guideForm">
      <h2 className="guideForm__title"> New Guide</h2>

      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            autoFocus
            className="form-control"
            value={currentGuide.title}
            onChange={changeGuideState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Guide Description</label>
          <input
            type="text"
            name="description"
            id="description"
            required
            className="form-group"
            value={currentGuide.description}
            onChange={changeGuideState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="content">Guide Content</label>
          <textarea
            type="text"
            name="content"
            id="content"
            required
            className="form-group"
            rows="5"
            value={currentGuide.content}
            onChange={changeGuideState}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          const newGuide = {
            id: currentGuide.id,
            title: currentGuide.title,
            description: currentGuide.description,
            content: currentGuide.content,
            publishing_date: currentGuide.publishing_date
          };

          createGuide(newGuide).then(() =>
          navigate("/guides")
          );
        }}
        className="btn btn-primary"
        id="createBtn"
      >
        Add Guide
      </button>
    </form>
  );
};
