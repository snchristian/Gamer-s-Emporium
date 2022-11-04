import styled from "styled-components";

export const Container = styled.div`
color: yellow;

.review-form{
    margin-top: 20px;
    margin-bottom: 40px;
}

.list{
    width: 100%;
    margin-bottom: .7rem;
    background: rgb(45, 43, 64);
    border-radius: 5px;
    list-style: none;
    margin: 0 0 20px 0;
}
     li {
      margin: 0 0 20px 0;
      padding: 10px;
    } 


textarea{
    display:block;
    max-width: 100%;
    box-sizing:border-box;
    width: 100%;
    padding: 0.5rem;
    margin: 0 0 1rem;
    border: 1px soild grey;
    border-radius: 0 

}

.submit{
    display: inline-block;
    margin: 0 0 1rem;
    padding: 0.85em 2em;
    font-size .9rem;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    background-color: RoyalBlue;
    color:white;

}


.body{
    color:white;
    margin-left:4rem;
    }

`

export const  Wrapper = styled.div `

input[type = "radio"]{
   display:none; 
}

.star{
    cursor:pointer;
    transition:color 200mms
}

`

export const User = styled.div`
    display: flex;
    gap: 10px;
    


    .img {
        width: 50px;
        height: 50px;
        // background: purple;
        border-radius: 50%;
        outline: none;
    }

    .name{
        text-transform: uppercase;
        color:#FFFFF;
        font-weight: 100;

    }



    .name .one {
        background: rgb(0, 139, 8) ;
        
    }

    .name, .name .img {
    display: flex;
    align-items: center;
    gap: 10px;
}

.name .img {
    justify-content: center;
}

.card-content p {
    font-size: .8rem;
    color: rgb(152, 152, 165);
}

    .icons{
        display: list-item;
    }  
    
    
.fa-pen{
    margin-left:7px;
    margin-right: 14px;
    &:hover {
      color: #1468a0;
      cursor: pointer;
    }
}

.fa-trash{
    &:hover {
        color: #ef4135;
        cursor: pointer;
      }
}

`