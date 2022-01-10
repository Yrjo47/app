import styled from "styled-components";
import { Container, Flex } from './Invisible.styled'

export const StyledMainFrame = styled(Flex)`
    box-sizing: content-box;
    height: calc(100vh - 200px);
`

export const StyledSVG = styled.svg`
    width: 720px;
    overflow: visible; 
    #RotateBlock{
        animation: 60s linear infinite fullrotate;
        transform-origin: center;
    }
    #Plane{
        animation: 20s linear infinite fullrotateop;
        transform-origin: center;
        transform-box: content-box;
    }
    #Baloon{
        animation: 5s linear infinite float;
    }
    @keyframes fullrotate{
        to{
            transform: rotate(360deg);
        }
    }
    @keyframes fullrotateop{
        to{
            transform: rotate(-360deg);
        }
    }
    @keyframes float{
        50%{
            transform: translate(-10px, 5px);
        }
        to{
            transform: translate(0px 0px);
        }
    }
    
`