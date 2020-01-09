import React from 'react';
import {Link} from 'react-router-dom'
import {Title} from '../styles'


export default function InfoRepos() {
  return (
    <div className="App">
     <Title>Página de info</Title>
     <Link to="/">Voltar para a page inicial</Link>
    </div>
  );
}

