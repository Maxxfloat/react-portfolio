import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import Radium from "radium";

import Admin from "./Pages/Admin";
import Project from "./Pages/Project";
import Index from "./Pages";

import Sidebar from "./Component/Sidebar";
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <div
          className="fixed w-screen h-screen"
          style={{ zIndex: -10, backgroundColor: "#1d1d1d" }}
        />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/project" component={Project} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
