import React from "react";
import { Route } from "react-router-dom";
import { GuideList } from "./guide/GuideList";
import { NewGuideForm } from "./guide/NewGuideForm";
import { UpdateGuideForm } from "./guide/UpdateGuideForm";
export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <Route exact path={["/", "/guides"]}>
          <GuideList />
        </Route>
        <Route exact path="/guides/new">
          <NewGuideForm />
        </Route>
        <Route exact path="/guides/:guideId/update">
          <UpdateGuideForm />
        </Route>
      </main>
    </>
  );
};