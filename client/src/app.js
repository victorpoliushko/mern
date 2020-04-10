import React from "react";
import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import "materialize-css";
import "./index.css";
import { AuthContext } from "./context/AuthContext";
import { Navbar } from "./components/navbar";

function App() {
  const { token, userId, login, logout } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{ token, userId, login, logout, isAuthenticated }}
    >
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        <div>{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
