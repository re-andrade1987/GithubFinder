import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    a{
    margin-top: 30px;
    text-decoration: none;
    font-size: 20px;
    background-color: #ffffff;
    color: black;
    width: 200px;
    height:40px;
    text-align: center;
    border-radius: 5px;
    padding: 8px;
    }
    svg{
        margin-right: 7px;
        margin-bottom: -5px;
    }
    ul li{
        display: flex;
        flex-direction: column;
    }
    img{
        width: 100px;
        height: 100px ;
    }

` 
export const Title = styled.h2`
 font-size: 30px;
 text-align: center;
 margin-top: 40px;
`
export const Form = styled.form`
input{
    width: 300px;
    height: 40px ;
    margin-top: 30px;
    border-radius: 4px;
}
button{
    height: 40px ;
    margin-top: 30px;
    width: 100px;
}
`
export const Button = styled.button`
 cursor: pointer;
 border-radius: 4px;
`



