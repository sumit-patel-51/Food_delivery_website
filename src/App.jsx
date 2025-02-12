import React, { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Loading from "./Pages/Loading";
import "./App.css";

const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./Pages/Home"));
    }, 1000);
  });
});

function App() {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Home />
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
