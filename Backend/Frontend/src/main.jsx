import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import { Provider } from "react-redux";
import store from "./Store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}> 
    <BrowserRouter>
      <AuthProvider>
        <div className="dark:bg-slate-900 dark:text-white">
          <App />
        </div>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);
