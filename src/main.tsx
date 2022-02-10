import React from "react";
import ReactDOM from "react-dom";
import { CroctProvider } from "@croct/plug-react";
import RoutesComponet from "./routes";

ReactDOM.render(
  <CroctProvider appId="00000000-0000-0000-0000-000000000000">
    <React.StrictMode>
      <RoutesComponet />
    </React.StrictMode>
  </CroctProvider>,
  document.getElementById("root")
);
