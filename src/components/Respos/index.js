import React, {useState, useCallback} from 'react';
import {Link} from 'react-router-dom';
import {FaGithub} from 'react-icons/fa';
import {Title, Form, Container} from '../styles'
import axios from 'axios'


export default function Repos() {

  const [ repos, newRepo] = useState('');
  const [ repositorios, setRepositorios] = useState([]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault(); 
    console.log(repos)

    async function submit() {
      const response = await axios.get(`https://api.github.com/repos/${repos}`);
      console.log(response.data)

      const data = {
        name: response.data.name,
        starts: response.data.starts,
        forks: response.data.forks,
        issues: response.data.issues,
        avatar: response.data.avatar_url,
        usuario: response.data.login,

      }

      setRepositorios([...repositorios, data]);
      newRepo('');

    }

    submit();
   
  }, [repos, repositorios]);

  
  function handleInput(e){
    newRepo(e.target.value);
  }

  const handleDelete = useCallback ((repo) => {
  const find = repositorios.filter(r => r.name !== repo);
  setRepositorios(find);

  },[repositorios]);

  return (
    <Container>
     <Title>
       <FaGithub size={35}/>GitHub Find
     </Title>
     <Form onSubmit={handleSubmit}>
        <input 
        value={repos} 
        onChange={handleInput}
        type="text"
        placeholder="Pesquisar Repositorios"/>

        <button type='submit'>Enviar</button>
     </Form>
     <Link to="/InfoRepos">Ir para repo info</Link>
      <ul>
        {repositorios.map(repo =>
        <li key={repo.name}>
          <p onClick={()=> handleDelete(repo.name)}></p>
          <span>Name: {repo.name}</span>
          <span>Stars: {repo.stargazers_count}</span>
          <span>Forks: {repo.forks}</span>
          <span>Issues: {repo.open_issues}</span>
          <span>Login: {repo.login}</span>
          <img src={repo.avatar_url} alt='img_avatar'/>
        </li>
        )}
      </ul>
    </Container>
  );
}

