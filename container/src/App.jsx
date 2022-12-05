import React from "react";
import ReactDOM from "react-dom";
import App from 'mfe1/Test'

import "./index.css";

const App1 = () => (
  <div>
    <h3>Container</h3>
    <App />
  </div>
);
ReactDOM.render(<App1 />, document.getElementById("app"));
