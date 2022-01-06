import React, {Component} from "react";
import { Link } from "react-router-dom";


class Error extends Component {
    render(){
        return (
            <div>
                <h1>Deu erro na Pagina, volte para a Pagina Inicial</h1>
                <Link to='/' className='btn'>
                    Voltar
                </Link>
            </div>
        )
    }

};

export default Error