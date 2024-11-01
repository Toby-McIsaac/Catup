import "./App.css";
import { AuthProvider } from "./components/authentication/AuthContext";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <AuthProvider>
        <LoginPage></LoginPage>
      </AuthProvider>
    </>
  );
}

export default App;
