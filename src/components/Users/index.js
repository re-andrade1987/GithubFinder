import React, {useState, useCallback} from 'react';
import {Link} from 'react-router-dom';
import {FaGithub} from 'react-icons/fa';
import {Title, Form, Container} from '../styles'
import axios from 'axios'


export default function Repos() {

  const [ userName, setName] = useState('');
  const [ infoUsers, setinfoUsers] = useState([]);
  

  const handleSubmit = useCallback((e) => {
    e.preventDefault(); 
    console.log(userName)

    async function submit() {
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      console.log(response.data)

      const data = {
        usuario: response.data.login,
        name: response.data.name,
        avatar: response.data.avatar_url,
       
      }

      setinfoUsers([...infoUsers, data]);
      setName('');
     
    }
    submit();
     
  }, [userName, infoUsers]);

  
  function handleInput(e){
    setName(e.target.value);
  }

  return (
    <Container>
     <Title>
       <FaGithub size={35}/>GitHub Find
     </Title>
     <Form onSubmit={handleSubmit}>
        <input 
        value={userName} 
        onChange={handleInput}
        type="text"
        placeholder="Pesquisar usuários"/>
        <button type='submit'>Enviar</button>
     </Form>
      <ul>
        {infoUsers.map(info =>
        <li key={info.name}>
          <img src={info.avatar} alt='img_avatar'/>
          <span>Name: {info.name}</span>
          <span>Login: {info.usuario}</span>
          <Link to={`/infoUsers/${info.name}`}>Repositórios</Link>
        </li>
        )}
      </ul>
    </Container>
  );
}

