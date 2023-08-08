import styled from "styled-components";

const Button = styled.button`
    color: ${props => props.primary ? "#F08" : "rgb(36, 35, 35)"};
    background-color: ${props => props.primary ? "rgb(36, 35, 35)" : "#F08"};
    font-size: 20px;
    margin: 1em;
    padding: 5px, 5px;
    border: 2px solid #F08;
    border-radius: 40px;

    :hover {
        color: ${props => props.primary ? "rgb(36, 35, 35)" : "#F08"};
        background-color: ${props => props.primary ? "#F08" : "rgb(36, 35, 35)"};
    }
`;

export default Button;