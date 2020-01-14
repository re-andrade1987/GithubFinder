import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  h4{
    text-align: center;
    font-size: 15px;
    margin-top: 15px;
  }
  p{
    margin-top: 15px;
    text-align: center;
    background-color: #df0053;
    border-radius: 2px;
    width: 127px;
    height: 25px;
    padding: 3px;
    font-size: 14px;
    
  }
  a{
    margin-top: 15px;
    font-size: 12px;
    color: #df0053;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  .info_repos{
    display: flex;
    justify-content: space-around;
    width: 382px;
  }  
` 
export const Title = styled.h2`
 font-size: 30px;
 text-align: center;
 margin-top: 40px;
 color: #000;
`
export const Form = styled.form`

button{
    height: 40px ;
    margin-top: 30px;
    width: 100px;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 2px;
    background-color: #df0053;
    
}
`




