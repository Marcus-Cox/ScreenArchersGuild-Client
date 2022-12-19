import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateScreenShot, getCaptureTools, getEditingTools, getScreenShotById } from "../../managers/ScreenShotManager.js";
import "./ScreenShotForm.css";

export const UpdateScreenShotForm = () => {

  const navigate  = useNavigate();
  
  const [isLoading, setIsLoading] = useState(true);

  const {screenshotId } = useParams();

  const [captureTools, setCaptureTools] = useState([]);

  const [editingTools, setEditingTools] = useState([]);


  const [currentScreenShot, setScreenShot] = useState({
    image: "",
    content: "",
    captureTool: "",
    editingTool: "",
  });

  const CaptureTools = () => {
    return getCaptureTools().then((data) => {
        setCaptureTools(data);
    });
  };

  useEffect(() => {
    CaptureTools();
  }, []);

  const EditingTools = () => {
    return getEditingTools().then((data) => {
        setEditingTools(data);
    });
  };

  useEffect(() => {
    EditingTools();
  }, []);

  const loadScreenShot = () => {
    if (screenshotId) {
      getScreenShotById(screenshotId).then((data) => {
        setScreenShot({
          id: screenshotId,
          image: data.image,
          content: data.content,
          captureTool: data.captureTool,
          editingTool: data.editingTool,
        });
      });
    }
  };

  useEffect(() => {
    loadScreenShot();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("currentScreenShot", currentScreenShot);
  }, [currentScreenShot]);

  const handleFieldChange = (domEvent) => {
    const updatedScreenShot = { ...currentScreenShot };
    let selectedVal = domEvent.target.value;
    updatedScreenShot[domEvent.target.name] = selectedVal;
    setScreenShot(updatedScreenShot);
  };

  return (
    <form className="screenshotForm">
      <h2 className="screenshotForm__image"> Update ScreenShot</h2>

      <fieldset>
        <div className="form-group">
          <label htmlFor="image"> Image </label>
          <input
            type="text"
            name="image"
            id="image"
            required
            autoFocus
            className="form-group"
            value={currentScreenShot.image}
            onChange={handleFieldChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="content">ScreenShot Caption</label>
          <input
            type="text"
            name="content"
            id="content"
            required
            className="form-group"
            value={currentScreenShot.content}
            onChange={handleFieldChange}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="captureTool">ScreenShot captureTool</label>
          <select
             className="form-control"
            name="captureTool"
            id="captureTool"
            required
            value={currentScreenShot.captureTool}
            onChange={handleFieldChange}
          >

        <option value="0">Please select ...
        </option>
        {captureTools.map((captureTool) => (
            <option key={captureTool.id} value={captureTool.id}>
                {captureTool.name}
            </option>
        ))}
        </select>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="editingTool">ScreenShot Editing Tool</label>
          <select
             className="form-control"
            name="editingTool"
            id="editingTool"
            required
            value={currentScreenShot.editingTool}
            onChange={handleFieldChange}
          >
            
        <option value="0">Please select ...
        </option>
        {editingTools.map((editingTool) => (
            <option key={editingTool.id} value={editingTool.id}>
                {editingTool.name}
            </option>
        ))}
        </select>
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          const editedScreenshot = {
            id: currentScreenShot.id,
            image: currentScreenShot.image,
            content: currentScreenShot.content,
            captureTool: currentScreenShot.captureTool,
            editingTool: currentScreenShot.editingTool};

          updateScreenShot(editedScreenshot, screenshotId).then(() =>
          navigate("/screenshots")
          );
        }}
        className="btn btn-primary"
        id="createBtn"
      >
        Update ScreenShot
      </button>
    </form>
  );
};
