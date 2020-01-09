import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaGithub} from 'react-icons/fa';
import {Title, Form, Container} from '../styles'
import api from '../Server/api'


export default function Repos() {
  const [ Repo, newRepo] = useState('');

  function handleInput(e){
    newRepo(e.target.value);

  }
  async function handleSubmit(e){
    e.preventDefault();
    console.log(Repo)

    const response = await api.get(`repos/${Repo}`);
    console.log(response.data)
  }


  return (
    <Container>
     <Title>
       <FaGithub size={35}/>GitHub Find
     </Title>
     <Form onSubmit={handleSubmit}>
        <input 
        value={Repo} 
        onChange={handleInput}
        type="text"
        placeholder="Pesquisar Repositorios"/>

        <button type='submit'>Enviar</button>
     </Form>
     <Link to="/InfoRepos">Ir para repo info</Link>
    </Container>
  );
}

