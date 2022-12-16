import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createScreenShot, getCaptureTools, getEditingTools } from "../../managers/ScreenShotManager.js";
// import "./ScreenShotForm.css";

export const NewScreenShotForm = () => {

  const navigate  = useNavigate();

  const [captureTools, setCaptureTools] = useState([]);

  const [editingTools, setEditingTools] = useState([]);


  const [currentScreenShot, setScreenShot] = useState({
    image: "",
    content: "",
    captureTool: "",
    captureTool: "",
    timestamp: "",
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


  const changeScreenShotState = (domEvent) => {
    const newScreenShot = { ...currentScreenShot };
    let selectedVal = domEvent.target.value;
    newScreenShot[domEvent.target.id] = selectedVal;
    console.log(newScreenShot)
    setScreenShot(newScreenShot);
  };

  return (
    <form className="screenshotForm">
      <h2 className="screenshotForm__image"> New ScreenShot</h2>

      <fieldset>
        <div className="form-group">
          <label htmlFor="image"> Image </label>
          <input
            type="text"
            name="url"
            id="image"
            required
            className="form-group"
            value={currentScreenShot.image}
            onChange={changeScreenShotState}
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
            onChange={changeScreenShotState}
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
            onChange={changeScreenShotState}
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
            onChange={changeScreenShotState}
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


    <fieldset>
    <div> Time Stamp
      <input type="date" id="timestamp" onChange={changeScreenShotState}
      value={currentScreenShot.timestamp}
      />
    </div>
    </fieldset>


      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          const newScreenShot = {
            id: currentScreenShot.id,
            image: currentScreenShot.image,
            content: currentScreenShot.content,
            captureTool: currentScreenShot.captureTool,
            editingTool: currentScreenShot.editingTool,
            timestamp: currentScreenShot.timestamp
          };

          createScreenShot(newScreenShot).then(() =>
          navigate("/screenshots")
          );
        }}
        className="btn btn-primary"
        id="createBtn"
      >
        Add ScreenShot
      </button>
    </form>
  );
};
