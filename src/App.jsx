import React, { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Loading from "./Pages/Loading";
import "./App.css";

const Home = lazy(() => (import("./Pages/Home")));

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
