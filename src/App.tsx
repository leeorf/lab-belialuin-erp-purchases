import React from "react";
import ReactDOM from "react-dom";
import { Shell } from "shell/Shell";

import "./index.scss";

const App = () => (
  <Shell>
    <div className="flex items-center justify-center bg-yellow-100 h-full">
      <h1 className="text-9xl">Purchases</h1>
    </div>
  </Shell>
);
ReactDOM.render(<App />, document.getElementById("app"));
