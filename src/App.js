import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Main/Home";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";

const PublicRoutes = ({ setAuthenticated }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Landing setAuthenticated={setAuthenticated} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />{" "}
    </Routes>
  );
};

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route index path="/kategori" element={<Home />} />
      <Route path="/kategori" element={<Home />} />
      <Route path="*" element={<Navigate to="/kategori" replace />} />{" "}
    </Routes>
  );
};

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = JSON.parse(
      localStorage.getItem("getir_authenticated")
    );
    setAuthenticated(isAuthenticated);
  }, []);

  return (
    <>
      <Navbar
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <div className="App">
        <Router>
          {!authenticated ? (
            <PublicRoutes setAuthenticated={setAuthenticated} />
          ) : (
            <PrivateRoutes setAuthenticated={setAuthenticated} />
          )}
        </Router>
      </div>
    </>
  );
}

export default App;
