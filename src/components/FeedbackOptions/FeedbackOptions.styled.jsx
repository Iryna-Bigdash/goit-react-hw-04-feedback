import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
    display: flex;
    justify-content:center;
    gap:40px;
    list-style: none;
`

export const FeedbackItem = styled.li`
    text-align:center;
    width: 200px;
`
export const FeedbackBtn = styled.button`
   width:100%;
   height: 50px;
   background-color: blue;
   color: white;
   font-size: 30px;
   cursor: pointer;
   border: 1px solid blue;
   border-radius: 5%;

   &:hover {
    background-color: white;
    color: blue;
   }

`

