import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    height: 200px;
    width: 100%;
    .Logo{
        font-size: 4rem;
        color: #fff;
    }
`

export const LoginBtn = styled(Link)`
    position: absolute;
    right: 0;
    color: #fff;
    text-decoration: none;
    border: 2px #fff solid;
    border-radius: 10%;
    font-size: 2rem;
    cursor: pointer;
    margin: 32px;
    padding: 4px 8px;
`