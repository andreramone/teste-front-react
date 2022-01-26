import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../Services/api";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function FormCadastro() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/users", inputs).then((res) => {
      const result = res.data;
      setInputs(result);
      navigate("/clientes");
    });
  };

  return (
    <section id="entry-page">
      <form onSubmit={handleSubmit}>
        <h1 className="entrada"> </h1>
        <h2>Cadastre-se agora</h2>
        <fieldset>
          <ul>
            <li>
              <label htmlFor="nome"> Nome:</label>
              <input
                type="text"
                id="nome"
                value={inputs.nome}
                name="nome"
                onChange={handleChange}
                required
              />
            </li>

            <li>
              <label htmlFor="email"> Email:</label>
              <input
                type="email"
                id="email"
                value={inputs.email}
                name="email"
                onChange={handleChange}
                required
              />
            </li>

            <li>
              <label htmlFor="telefone"> Telefone:</label>
              <input
                type="text"
                id="telefone"
                value={inputs.telefone}
                name="telefone"
                onChange={handleChange}
                required
              />
            </li>
          </ul>
        </fieldset>
        <Button variant="dark" className="link" type="submit">
          Cadastrar
        </Button>
        <Button variant="dark" onClick={() => navigate("/")} className="link">
          Tem uma conta?
        </Button>
      </form>
    </section>
  );
}

export default FormCadastro;
