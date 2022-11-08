import styled from "styled-components";

export const Container = styled.div`
    height:30vh;
    background:url("https://www.pixelstalk.net/wp-content/uploads/2016/09/Free-game-backgrounds-1080p.jpg") center/cover no-repeat;
    margin-bottom: 2rem;
    position:relative;

    .wrapper{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0%;
        background:rgba(0,0,0,0.4);
    }

    h1{
        text-align: right;
        color: white;
        font-size:70px;
        margin-right:20px;
        margin-top:40px;
    }
`