import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login-page';
import Error from './Components/Error-Page/ErrorPage'
import PaginaInicial from './Components/Pagina-inicial/Pagina-inicial';

class App extends Component {
  render() {
    return (
        <>
            <Router>
            <Navbar/>
            
            <Routes>
            <Route exact path="/" element={<PaginaInicial />}/>
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<Error/>} />
           </Routes>
          
        </Router>
        </>
    );
  }
}

export default App
