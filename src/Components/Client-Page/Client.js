import React, { useState, useEffect } from "react";
import api from "../../Services/api";
import styles from "../../main.scss";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Table } from "react-bootstrap";
import { logout } from "../../Services/auth";

function ClientPage() {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    id: "",
    nome: "",
    email: "",
    telefone: "",
  });

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    api.get("/users", data).then((res) => {
      const result = res.data;
      setdata(result);
    });
  }, []);

  function openModalDelete(id) {
    if (window.confirm("Você quer realmente apagar?")) {
      api.delete("/users/" + id).then((res) => {
        if (res.status === 200) {
          const filtereddata = data.filter((post) => {
            return post.id !== id;
          });
          setdata(filtereddata);
        }
      });
    }
  }

  const handleEdit = () => {
    api.put("/users", inputs).then((res) => {
      const result = res.data;
      setInputs(result);
      const filtereddata = data.filter((post) => {
        return post.id !== inputs.id;
      });
      filtereddata.unshift(result);
      setdata(filtereddata);
      handleClose();
    });
  };
  return (
    <>
      <Modal
        size="sm"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja editar seus dados?
          <fieldset>
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
          </fieldset>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={() => handleEdit()}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      <section id="entry-page">
        <div className="div-btn">
          <Button
            size="sm"
            onClick={() => {
              logout();
              navigate("/");
            }}
            variant="light"
          >
            Retornar/Sair
          </Button>
        </div>

        {data.length > 0 && (
          <Table variant="light" striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {data.map((post, index) => {
                return (
                  <tr key={index}>
                    <td>{post.nome}</td>
                    <td>{post.email}</td>
                    <td>{post.telefone}</td>
                    <td>
                      <Button
                        variant="primary"
                        value="Editar"
                        onClick={() => {
                          handleShow();
                          setInputs(post);
                        }}
                      >
                        Editar
                      </Button>
                    </td>
                    <td>
                      <Button
                        value="Deletar"
                        variant="danger"
                        onClick={() => openModalDelete(post.id)}
                      >
                        Deletar
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </section>
    </>
  );
}

export default ClientPage;
