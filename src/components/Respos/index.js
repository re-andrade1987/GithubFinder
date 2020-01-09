import React from 'react';
import {Link} from 'react-router-dom'
import {Title, Form} from '../styles'

export default function Repos() {
  return (
    <div className="App">
     <Title>GitHub Find</Title>
     <Form>
        <input type="text" placeholder="Pesquisar Repositorios"></input>
        <button>Enviar</button>
     </Form>
     <Link to="/InfoRepos">Ir para repo info</Link>
    </div>
  );
}

