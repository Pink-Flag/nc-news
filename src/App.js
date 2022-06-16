import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import UserContext from "./context/UserContext";
import Topics from "./components/Topics";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SingleArticlePage from "./components/SingleArticlePage";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState("jessjelly");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
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
          <Route
            path="/articles/:article_id"
            element={
              <SingleArticlePage
                isLoading={isLoading}
                setLoading={setLoading}
              />
            }
          />
        </Routes>
        <NavBar />
      </UserContext.Provider>
    </>
  );
}

export default App;
