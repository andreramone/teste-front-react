
import React from "react";
// import ReactDOM from "react-dom";
import Logincss from './Login.scss'

const { Component } = React

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: "signUp"
    }
  }

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (
          <>
            <form>
              <h1 className="petvetentrada">PETVET SMART </h1>
            <h2>Faça seu login</h2>
            <fieldset>
              <ul>
              <legend>Ou cadastre-se agora:</legend>
                <li>
                  <label for="username">Usuario:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                <li>
                  <label for="password">Senha:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button>Cadastrar</button>
            <button type="button" onClick={ () => this.changeView("logIn")}>Tem uma conta?</button>
          </form>
          </>
        )
       
      case "logIn":
        return (
          <form>
            <h2>Bem vindo!</h2>
            <fieldset>
              <ul>
              <legend>Entre com suas credenciais</legend>
                <li>
                  <label for="username">Usuario:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="password">Senha:</label>
                  <input type="password" id="password" required/>
                </li>
                <li>
                  <i/>
                  <button type="button" onClick={ () => this.changeView("PWReset")} href="#">Esqueceu a senha?</button>
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={ () => this.changeView("signUp")}>Crie uma conta</button>
          </form>
        )
        case "PWReset":
        return (
          <form>
          <h2>Resetar senha</h2>
          <fieldset>
            <legend>Atencao! sua senha sera resetada</legend>
            <ul>
              <li>
                <em>Um link para resetar sua senha sera enviado</em>
              </li>
              <li>
                <label for="email">Email:</label>
                <input type="email" id="email" required/>
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
        </form>
        )
      default:
        break
    }
  }


  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}

export default Login