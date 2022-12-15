import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  updateGuide,
  getGuideById,
} from "./GuideManager";
import "./GuideForm.css";

export const UpdateGuideForm = () => {
  const history = useHistory();
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);
  const { guideId } = useParams();

  //Sets game to be edited on page load
  const [currentGuide, setGuide] = useState({
    title: "",
    description: "",
    content: "",
    publishing_date: "",
  });

  const loadGuide = () => {
    if (guideId) {
      getGuideById(guideId).then((data) => {
        setGuide({
          id: guideId,
          title: data.title,
          description: data.description,
          content: data.content,
          publishing_date: data.publishing_date,
        });
      });
    }
  };

  useEffect(() => {
    loadGuide();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("currentGuide", currentGuide);
  }, [currentGuide]);

  const handleFieldChange = (domEvent) => {
    const updatedGuide = { ...currentGuide };
    let selectedVal = domEvent.target.value;
    updatedGuide[domEvent.target.name] = selectedVal;
    setGuide(updatedGuide);
  };

  return (
    <form className="guideForm">
      <h2 className="guide__title">
        Update Guide
      </h2>

      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            autoFocus
            className="form-control"
            value={currentGuide.title}
            onChange={handleFieldChange}
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
            onChange={handleFieldChange}
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
            onChange={handleFieldChange}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          // Prevent form from being submitted
          evt.preventDefault();

          // adjusts code  to snake case to match back end
          const editedGuide = {
            title: currentGuide.title,
            description: currentGuide.description,
            content: currentGuide.content,
            publishing_date: currentGuide.publishing_date,
          };

          // Send POST request to your API
          updateGuide(editedGuide, guideId).then(() =>
            history.push("/guides")
          );
        }}
        className="btn btn-primary"
        id="createBtn"
      >
        Update
      </button>
    </form>
  );
};
