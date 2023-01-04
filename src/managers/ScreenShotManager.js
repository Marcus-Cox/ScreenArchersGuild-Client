//This component manages getting data from the server to be rendered onto  pagges.
import { getToken } from "../utils/authorizations";

const remoteURL = "http://localhost:8000";

export const getScreenShots = () => {
  return fetch("http://localhost:8000/screenshots", {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((response) => response.json());
};

export const getScreenShotById = (screenshotId) => {
  return fetch(`${remoteURL}/screenshots/${screenshotId}`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((response) => response.json());
};

export const getCaptureTools = () => {
  return fetch("http://localhost:8000/capturetools", {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((response) => response.json());
};

export const getEditingTools = () => {
  return fetch("http://localhost:8000/editingtools", {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((response) => response.json());
};

export const getCategorys = () => {
  return fetch("http://localhost:8000/categorys", {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((response) => response.json());
};

export const createScreenShot = (screenshot) => {
  return fetch(`${remoteURL}/screenshots`, {
    method: "POST",
    headers: {
      Authorization: `Token ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(screenshot),
  }).then((response) => response.json());
};

export const getScreenshotsForArcher = () => {
  return fetch("http://localhost:8000/screenshots?myScreenshots", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`,
    },
  }).then((response) => response.json());
};

export const updateScreenShot = (screenshot, id) => {
  console.log("updatedScreenShot", screenshot);
  return fetch(`http://localhost:8000/screenshots/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(screenshot),
  });
};

export const deleteScreenShot = (id) => {
  return fetch(`${remoteURL}/screenshots/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${getToken()}`,
    },
    body: JSON.stringify(id),
  });
};
