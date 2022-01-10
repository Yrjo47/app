import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    height: 200px;
    width: 100%;
    .Logo{
        font-size: 4rem;
        color: #fff;
    }
`

export const LoginBtn = styled.button`
    position: absolute;
    right: 0;
    color: #fff;
    background-color: #000;
    border: 2px #fff solid;
    border-radius: 10%;
    font-size: 2rem;
    cursor: pointer;
    margin: 32px;
`