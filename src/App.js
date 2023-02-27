import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Spinner from "./Spinner/Spinner";

const WeatherApp = lazy(() => import("./WeatherSimple/WeatherApp"));
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WeatherApp />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
