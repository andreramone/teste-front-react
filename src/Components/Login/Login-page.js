import React, { useState } from "react";
import LoginStyles from "../../main.scss";
import { useNavigate } from "react-router-dom";
import { login } from "../../Services/auth";
import api from "../../Services/api";
import { Button } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/tokens", { email }).then((res) => {
      if (res.status === 200) {
        const result = res.data;
        login(result.token);
        navigate("/clientes");
      }
    });
  };

  return (
    <section id="entry-page">
      <form onSubmit={handleSubmit}>
        <h3>Faça seu Login</h3>
        <fieldset>
          <ul>
            <li>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </li>
          </ul>
        </fieldset>

        <Button variant="dark" type="submit">
          Entrar
        </Button>
        <Button variant="dark" onClick={() => navigate("/cadastro")}>
          Crie uma conta
        </Button>
      </form>
    </section>
  );
}

export default Login;
