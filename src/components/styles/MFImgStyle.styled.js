import styled from "styled-components";
import MFImg from "../MFImg";

export const Image = styled.img`
    height: 720px;
    animation: 60s linear infinite fullrotate;
    #plane{
        animation: 20s linear infinite fullrotate;
    }

    @keyframes fullrotate{
        to{
            transform: rotate(360deg);
        }
    }
`
