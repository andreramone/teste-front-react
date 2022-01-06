import React, {Component} from "react";
import { Link } from "react-router-dom";


class ClientPage extends Component {
    
    render(){
        return (
            <div>
                <h1>Seja bem vindo</h1>
                <p>Funcionalidades: CRUD de PETS</p>
                <p>Funcionalidades: CRUD DE VACINAS DO PET</p>
                <p>Funcionalidades: CRUD DE MEDICAMENTOS ADMINISTRADOS NO PET</p>
                <p>Funcionalidades: AGENDAMENTO DE SERVICOS</p>

            </div>
        )
    }

};

export default ClientPage