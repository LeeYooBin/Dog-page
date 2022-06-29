import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import background from '../img/background.jpg';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.main`
    background-image: url(${background});
    background-position: cover;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 920px){
        background-repeat: repeat;
    }
`;

export const Main = styled.div`
    position: relative;
    width: 50%;
    height: 80%;
    border: #000 3px solid;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 920px){
        width: 90%;
        height: 90%;
    }
`;

export const Image = styled.img`
    max-height: 65vh;
    max-width: 40vw;

    @media screen and (max-width: 920px){
        max-height: 70vh;
        max-width: 70vw;
    }
`;

export const IggyImage = styled.img`
    position: absolute;
    left: -10%;
    bottom: -5%;
    width: 15%;
    height: 30%;

    @media screen and (max-width: 700px){
        width: 30%;
    }

    @media screen and (max-width: 920px){
        width: 25%;
    }
`;

export const Button = styled.button`
    position: absolute;
    bottom: -4%;
    padding: 2%;
    min-width: 5vw;
    cursor: pointer;

    @media screen and (max-width: 920px){
        bottom: -2.5%;
    }
`;