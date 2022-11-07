import styled from 'styled-components'

export const Container = styled.div`
background: url("https://media.istockphoto.com/id/1307289824/video/scary-endless-medieval-catacombs-with-torches-mystical-nightmare-concept-the-seamless.jpg?s=640x640&k=20&c=GEehp-3ibzVI0iFSdiLz49W-b4mXk_4wHxMGCjkDYYc=");
background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
object-fit: contain;

.h1{
    color: #fff;
  font-size: 400px;
  margin-top: -100px;
}
button{
margin-top: 32px;
background-color: transparent;
  color: #fff;
  padding: 12px 26px;
  font-size: 20px;
  cursor: pointer;
  border: 4px solid #00FF0F
  transition: all 0.3s ease-out;
}
`
