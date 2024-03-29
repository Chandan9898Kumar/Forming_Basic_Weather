import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Spinner from "./Spinner/Spinner";
import NavBar from "./NavBar/NavBar";
import HomePage from "./HomePage/HomePage";
const WeatherApp = lazy(() => import("./WeatherSimple/WeatherApp"));
const WeatherTwo = lazy(() => import("./SecondWeather/WeatherSecond"));
const FinalApp = lazy(() => import("./ThirdWeatherApp/MainPage"));
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/normalWeather" element={<WeatherApp />} />
          <Route exact path="/newWeather" element={<WeatherTwo />} />
          <Route exact path="/finalWeather" element={<FinalApp />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
