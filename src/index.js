import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/landing/';
import News from './pages/news';
import ConnectProvider from './provider/ConnectProvider';
import { ToastContainer } from "react-toastify"
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Routing = () => {
  return (
    <Router>
      <ToastContainer />
      <ConnectProvider>
        <Routes>
          <Route path="/lexi" element={<Landing />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </ConnectProvider>
    </Router>
  )
}

root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);