import styled from "styled-components";
const Button = styled.button`
  border: 1px ${(props) => (props.Border ? `${props.Border}` : null)};
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 80px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.primary ? `${props.primary}` : "white"};
  color: ${(props) => (props.Text ? `${props.Text}` : "black")};
`;

export { Button };
