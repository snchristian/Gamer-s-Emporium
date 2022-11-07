import styled from "styled-components";


export const Container = styled.div`

font-weight: 400;
    line-height: 1.75;
    font-size:100%;
    margin-top:50px;

    p {
        margin-top: 0;
        margin-bottom: 1.5rem;
        max-width: 40em;
    }

    h2 {
        font-size: 2.441rem;
      }

    h4 {
        font-size: 1.563rem;
      }

    h5 {
        margin: 0;
        margin-bottom: 1.38rem;
        font-weight: 400;
        line-height: 1.3;
        text-transform: capitalize;
        letter-spacing:  1px;
      }

      .wrapper{
        display:grid;
    grid-template-columns: 4fr 5fr;
    gap: 3rem;
    align-items: center;
      }

      img{
        height:300px;
    object-fit:cover;
    border-radius:0.25rem;
      }



    button {
        margin-top:5px;
        padding: 8px 20px;
        border-radius: 2px;
        outline: none;
        border: none;
        cursor: pointer;
      }

      .line{
        margin: 20px 0 20px 0;
        height:2px;
        background: grey;
    }


`
