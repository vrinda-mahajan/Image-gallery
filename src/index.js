import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ImageProvider } from "./contexts/imageContext";
import { AuthProvider } from "./contexts/authContext";
import { HistoryProvider } from "./contexts/historyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <HistoryProvider>
        <ImageProvider>
          <App />
        </ImageProvider>
      </HistoryProvider>
    </AuthProvider>
  </BrowserRouter>
);
