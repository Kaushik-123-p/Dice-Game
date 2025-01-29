import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  color: white;
  background: #000000;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: 0.4s background ease-in;
  min-width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;


export const OutlineButton = styled(Button)`
background-color: #fff;
color: #000000;
border: 1px solid black;
 &:hover {
    background-color: #000000;
    color: #ffffff;
    border: 1px solid transparent;
   
  }
`;