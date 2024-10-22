import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from 'jquery';
// import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import RecentApiProvider from "./contexts/RecentApiContext.js";
import FixDetailsPageIdProvider from "./contexts/FixDetailsPageId.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <RecentApiProvider>
    <FixDetailsPageIdProvider>
      <App />
      </FixDetailsPageIdProvider>
  </RecentApiProvider>
    </BrowserRouter>
);

// reportWebVitals();
