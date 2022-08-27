import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import styled from "styled-components";

const Body = styled.div`
  margin-left: 450px;
  margin-top: 50px;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Body>
      <App />
    </Body>
  </React.StrictMode>
);
