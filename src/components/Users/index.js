import React, {useState, useCallback} from 'react';
import {Link} from 'react-router-dom';
import {FaGithub} from 'react-icons/fa';
import {Title, Form, Container} from '../styles'
import axios from 'axios'


export default function Repos() {

  const [ users, infoUsers] = useState('');
  const [ repositorios, setRepositorios] = useState([]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault(); 
    console.log(users)

    async function submit() {
      const response = await axios.get(`https://api.github.com/users/${users}`);
      console.log(response.data)

      const data = {
        usuario: response.data.login,
        name: response.data.name,
        avatar: response.data.avatar_url,
       
      }

      setRepositorios([...repositorios, data]);
      infoUsers('');
    }

    submit();
   
  }, [users, repositorios]);

  
  function handleInput(e){
    infoUsers(e.target.value);
  }

  return (
    <Container>
     <Title>
       <FaGithub size={35}/>GitHub Find
     </Title>
     <Form onSubmit={handleSubmit}>
        <input 
        value={users} 
        onChange={handleInput}
        type="text"
        placeholder="Pesquisar usuários"/>
        <button type='submit'>Enviar</button>
     </Form>
      <ul>
        {repositorios.map(repo =>
        <li key={repo.name}>
          <img src={repo.avatar} alt='img_avatar'/>
          <span>Name: {repo.name}</span>
          <span>Login: {repo.usuario}</span>
          <Link to={`/InfoRepos/${encodeURIComponent(repo.name)}`}>Repositorios</Link>
        </li>
        )}
      </ul>
    </Container>
  );
}

