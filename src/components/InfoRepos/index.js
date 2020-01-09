import React from 'react';
import {Link} from 'react-router-dom'
import {Title, Container} from '../styles'


export default function InfoRepos() {
  return (
    <Container>
     <Title>Página de info</Title>
     <Link to="/">Voltar</Link>
    </Container>
  );
}

