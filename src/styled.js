import styled from "styled-components";
import backgroundImage from "./background-image.jpg";

export const FullScreenContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
`;
