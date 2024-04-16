import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);

`;

export const GridElement = styled.div`
    border: 1px solid ${({ theme }) => theme.color.gray};
`;