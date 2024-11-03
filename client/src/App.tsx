import "./App.css";
import { AuthProvider } from "./components/authentication/AuthContext";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DeleteLater from "./pages/DeleteLater";
import AuthWrapper from "./components/authentication/AuthWrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <nav>
            <Link to="/login">Login</Link> |{" "}
            <Link to="/delete-later">Delete Later</Link>
          </nav>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/delete-later" element={<AuthWrapper><DeleteLater /></AuthWrapper>}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
