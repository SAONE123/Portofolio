import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./component/About";
import Project from "./component/project";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/About" Component={About} />
          <Route path="/Project" Component={Project} />
        </Routes>
      </Router>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
