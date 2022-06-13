import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import { useState } from "react";

function App() {
  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <div className="App"></div>
      <Header />
      <NavBar />
      <LandingPage isLoading={isLoading} setLoading={setLoading} />
    </>
  );
}

export default App;
