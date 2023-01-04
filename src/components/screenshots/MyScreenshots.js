import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteScreenShot,
  getScreenShots,
  getScreenshotsForArcher,
} from "../../managers/ScreenShotManager";
import { getArchers } from "../../managers/UserManager";
import "./ScreenShotCard.css";

export const MyScreenshots = ({ delScreenShot }) => {
  const navigate = useNavigate();
  const localScreenshotArcher = localStorage.getItem("lu_token");
  const ScreenshotArcherObject = JSON.parse(localScreenshotArcher);
  const [archers, setArcher] = useState([]);
  const [screenshot, setAllScreenshots] = useState([]);
  const [screenshotByArchers, setScreenshotsByArcher] = useState([]);

  useEffect(() => {
    getScreenshotsForArcher().then((screenshotsByarcher) => {
      setScreenshotsByArcher(screenshotsByarcher);
    });
  }, []);

  useEffect(() => {
    getScreenShots().then((allscreenshotsArray) => {
      setAllScreenshots(allscreenshotsArray);
    });
  }, []);

  useEffect(() => {
    getArchers().then((archerArray) => setArcher(archerArray));
  }, []);

  const confirmDelete = (screenshot) => {
    let text = "Are you sure you want to delete this screenshot?";
    window.confirm(text) ? (
      deleteScreenShot(screenshot.id).then(() => {
        window.location.reload();
      })
    ) : (
      <></>
    );
  };

  const screenshotEdit = (screenshot) => {
    let text = "Are you sure you want to edit screenshot?";
    window.confirm(text) ? (
      navigate(`/screenshots/${screenshot.id}/edit`)
    ) : (
      //.then(() => {window.location.href = '/myscreenshots'})
      <></>
    );
  };

  return (
    <article className="screenshots">
      <h2 className="screenshotsHeader-title-is-3">My Screenshots</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {screenshotByArchers.map((filteredScreenshot) => {
          return (
            <section
              key={`screenshots--${filteredScreenshot.id}`}
              className="screenshot"
            >
              <div className="screenshot-boxes" id="screenshots">
                <div className="screenshotDetails-column">
                  <img
                    src={filteredScreenshot.image}
                    className="screenshot__image"
                    key={`screenshot--${filteredScreenshot.image}`}
                  />
                  <div className="archer has-text-left">
                    Content: {filteredScreenshot.content}
                  </div>
                  <div className="archer has-text-left">
                    Capture Tool: {filteredScreenshot.captureTool}
                  </div>
                  <div className="archer has-text-left">
                    Editing Tool: {filteredScreenshot.editingTool}
                  </div>

                  {/* <div className="archer has-text-left">category: {filteredScreenshot.category}</div> */}
                  <div className="archer has-text-left">
                    Time Stamp: {filteredScreenshot.timestamp}
                  </div>

                  <div className="edit_screenshot">
                    {ScreenshotArcherObject.username ===
                    filteredScreenshot.archer.user.username ? (
                      <button
                        className="cardBtn"
                        onClick={() =>
                          navigate(
                            `/screenshots/${filteredScreenshot.id}/update`
                          )
                        }
                      >
                        Edit
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className="delete_screenshot">
                    {ScreenshotArcherObject.username ===
                    filteredScreenshot.archer.user.username ? (
                      <button
                        className="cardBtn"
                        onClick={() => {
                          delScreenShot(screenshot.id);
                        }}
                      >
                        Delete
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
};
