import React, { useState } from "react";
import LoginStyles from "../../main.scss";
import { useNavigate } from "react-router-dom";
import { login } from "../../Services/auth";
import api from "../../Services/api";
import { Button, Toast, ToastContainer } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/tokens", { email }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        const result = res.data;
        login(result.token);
        navigate("/clientes");
      }
    })
    .catch((err) => {
        setShow(true);
    }) ;
  };

  return (
    <section id="entry-page">
      <ToastContainer position="top-end">
        <Toast show={show} onClose={toggleShow} bg="danger" autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Erro</strong>
              <small></small>
            </Toast.Header>
            <Toast.Body className="text-white" >Email invalido!</Toast.Body>
          </Toast>
      </ToastContainer>

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