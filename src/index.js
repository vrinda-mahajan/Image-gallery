import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  HistoryProvider,
  ImageProvider,
  LikeProvider,
} from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <HistoryProvider>
        <LikeProvider>
          <ImageProvider>
            <App />
          </ImageProvider>
        </LikeProvider>
      </HistoryProvider>
    </AuthProvider>
  </BrowserRouter>
);
