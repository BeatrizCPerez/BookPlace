import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Router from "../src/routes/router"; 
import './Pages/index.css'

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {Router}
  </React.StrictMode>
);
