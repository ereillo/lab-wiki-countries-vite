import "./App.css";
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  console.log("probando app");

  return (
    <>
      <div
        className="App"
        style={{
          fontSize: "15px",
          padding: "15px",
          background: "#426efe",
          color: "white",
          textAlign: "left",
        }}
      >
        <h1 style={{ marginLeft: "100px" }}>WikiCountries</h1>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryId" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
