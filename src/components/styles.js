import styled from 'styled-components';

export const Container = styled.div`
 @media (max-width: 480px){
    ul{
        display: flex;
        flex-direction: column;
    }
  
 }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    a{
    margin-top: 30px;
    text-decoration: none;
    font-size: 15px;
    color: black;
    width: 200px;
    height:40px;
    text-align: center;
    border-radius: 4px;
    padding: 8px;
    background-color: #df0053;
    margin-left: 26px;
    }
    svg{
        margin-right: 7px;
        margin-bottom: -5px;
    }
    
    ul{
        display: flex;
    }
    ul li{
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        margin-left: 30px;
       
    }
    img{
        width: 250px;
        height: 200px ;
    }
    span{
        margin-top: 10px;
        font-size: 15px;
        text-align: center;
        color: #000;
    }

` 
export const Title = styled.h2`
 font-size: 30px;
 text-align: center;
 margin-top: 40px;
 color: #000;
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
    cursor: pointer;
    border-radius: 4px;
    margin-left: 2px;
    background-color: #df0053;
    
}
@media (max-width: 480px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button{
        margin-top: 10px;
    }
}
`




