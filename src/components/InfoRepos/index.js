import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Title, Container } from '../styles';
import axios from 'axios';


export default function InfoRepos({ match }) {

  useEffect(() => {

    async function load() {
      const nomeRepo = (match.params.infoUsers);

      const [repositorioData, issuesData] = await Promise.all([
        axios.get(`https://api.github.com/users/${nomeRepo}/repos`),
        //axios.get(`https://api.github.com/users/repos${nomeRepo}/issues`)
      ]);
      console.log(repositorioData)
      console.log(issuesData)

    }

    load();

  }, [match.params.infoUsers]);

  return (
    <Container>
      <Title>Escolha um repositório</Title>
      {/* <div>
        <ul>
          {repositorios.map(repo =>
            <li key={repo.name}>
            </li>
          )}
        </ul>
      </div> */}
      <Link to="/">Voltar</Link>
    </Container>
  );
}

