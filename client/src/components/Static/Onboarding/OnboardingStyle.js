import styled from "styled-components";

export const Container = styled.div`


position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);


h2 {
    font-size:25px;
    color:#888;
    text-align:center;
}

button{
    padding: 20px 40px;
    border-radius: 2px;
    cursor: pointer;
    margin-left:42%;
    margin-top:20px;
    background-color:#FF0000;
}
.wrapper{
    display:flex;
}

 .list {
    margin-top:40px;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:20px;
    max-width:650px;
  }

  .form-element {
    position:relative;
    width:100px;
    height:100px;
  }

  .form-element input {
    display:none;
  }

  .form-element label {
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:100%;
    cursor:pointer;
    border:2px solid #ddd;
    background:#7FFFD4;
    box-shadow:0px 5px 20px 2px rgba(0,0,0,0.1);
    text-align:center;
    transition:all 200ms ease-in-out;
    border-radius:5px;
  }

  .icon {
    margin-top:10px;
    font-size:30px;
    transition:all 200ms ease-in-out;
  }

  .title {
    font-size:15px;
    padding:5px 0px;
    transition:all 200ms ease-in-out;
  }

  .form-element label:before {
    content:"✓";
    position:absolute;
    width:18px;
    height:18px;
    top:8px;
    left:8px;
    background:#FF0000;
    color:#FFFFF;
    text-align:center;
    line-height:18px;
    font-size:14px;
    font-weight:600;
    border-radius:50%;
    opacity:0;
    transform:scale(0.5);
    transition:all 200ms ease-in-out;
  }
  .form-element input:checked + label:before {
    opacity:1;
    transform:scale(1);
  }
  .form-element input:checked + label .icon {
    color:#FF0000;
  }
  .form-element input:checked + label .title {
    color:#FF0000;
  }
  .form-element input:checked + label {
    border:2px solid #FF0000;
  }
   
    

`
export const  Wrapper = styled.div`


`