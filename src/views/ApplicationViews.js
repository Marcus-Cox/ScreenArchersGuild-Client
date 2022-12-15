import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { GuideList } from "../components/guide/GuideList";
import { NewGuideForm } from "../components/guide/NewGuideForm";
import { UpdateGuideForm } from "../components/guide/UpdateGuideForm";
import { Authorized } from "./Authorized";
export const ApplicationViews = () => {
  return (
    <>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />} />
              <Route path="/guides" element={<GuideList />} />
              <Route path="/guides/new" element={<NewGuideForm />} />
              <Route path="/guides/:guideId/update" element={<UpdateGuideForm />} />
        </Routes>
    </>
  );
};
