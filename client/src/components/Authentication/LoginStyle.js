import styled from "styled-components";

export const Container = styled.div `



position: relative;

.content {

position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  grid-template-rows: 15vh 85vh;
  
  
}



`
export const FormContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
gap: 2rem;
height: 85vh;


`
export const Form = styled.div`
padding: 8rem 4rem;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
padding: 2rem;
background-color:  #000000b0;
width: 25vw;
gap: 2rem;
color: white;


.container {
display:flex;
flex-direction:column;
gap: 2rem;
input {
padding: 0.5rem 1rem;
width: 15rem;
}


button {
    padding: 0.5rem 1rem;
    background-color: rgb(72, 217, 220);
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }


`