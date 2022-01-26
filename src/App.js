import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login/Login-page";
import Error from "./Components/Error-Page/ErrorPage";
import ClientPage from "./Components/Client-Page/Client";
import Cadastro from "./Components/Cadastro/Cadastro";
import { StateMachineProvider, createStore } from "little-state-machine";
import { isAuthenticated } from "./Services/auth";
import "bootstrap/dist/css/bootstrap.min.css";

function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}

function App() {
  createStore({
    yourDetail: { email: "" },
  });

  return (
    <StateMachineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            exact
            path="/clientes"
            element={
              <PrivateRoute>
                <ClientPage />
              </PrivateRoute>
            }
          />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </StateMachineProvider>
  );
}

export default App;
