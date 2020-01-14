import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Title, Container } from '../stylesRepo';
import axios from 'axios';


export default function InfoRepos({ match }) {

  const [repositorio, setRepositorio] = useState([]);

  useEffect(() => {

    async function load() {
      const nomeRepo = (match.params.infoUsers);

      const [repositorioData] = await Promise.all([
        axios.get(`https://api.github.com/users/${nomeRepo}/repos`),
      ]);
      console.log(repositorioData)

      setRepositorio(repositorioData.data)

    }

    load();

  }, [match.params.infoUsers]);

  return (
    <Container>
      <Title>Escolha um repositório</Title>
       <div>
          {repositorio.map(repo =>
            <div key={repo.id}>
              <h4>{repo.full_name}</h4>
              <div className='info_repos'>
                <p>Forks: {repo.forks}</p>
                <p>Watchers:{repo.watchers}</p>
              </div>
              <a href='{repo.owner.html_url}' target='blank'>{repo.name}</a>
            </div>
            
          )}
      </div> 
      <Link style={{marginBottom: 20}} to="/">Voltar</Link>
    </Container>
  );
}

