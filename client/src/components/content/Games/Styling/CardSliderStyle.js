import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction: column;
gap: 1rem;
position: relative;
padding: 2rem 0;

h1 {
    margin-left: 50px;
  }

.card-container{
    display:flex;
    width: max-content;
    gap: 1rem;
    transform: translateX(0px);
    transition: 0.3s ease-in-out;
    margin-left: 50px;
}

`