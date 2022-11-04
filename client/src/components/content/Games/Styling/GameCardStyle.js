import styled from "styled-components";

export const Container= styled.div`

max-width: 230px;
width: 230px;
height: 100%;
cursor: pointer;
position: relative;

.hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;
  }
   .image-container {
    position: relative;
    height: 140px;
  }   
img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        
   
  }
  
  .info-container {
    display: flex;
    flex-direction: column;
  
    padding: 1rem;
    gap: 0.5rem;
  }
  
 .icons{
    justify-content: between;
  }
    
 .controls {
   display: flex;
    gap: 1rem;
 }
  
.genres {
   display: flex;
 }
 ul {
   display: flex;
   flex-wrap: wrap;
    gap: 1rem;
  }
 li {
    padding-right: 0.7rem;
  }
     
  li:first-of-type {
    list-style-type: none;
  }

  li:nth-of-type(4) {
    list-style-type: none;
  }
  

`
export const Img = styled.img`
border-radius: 0.2rem;
width: 100%;
height: 100%;
z-index: 10;
`