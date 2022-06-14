import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import TopicsMenu from "./components/TopicsMenu";
import Topics from "./components/Topics";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <div className="App"></div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <LandingPage isLoading={isLoading} setLoading={setLoading} />
          }
        />
        <Route
          path="/:topic"
          element={<Topics isLoading={isLoading} setLoading={setLoading} />}
        />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
