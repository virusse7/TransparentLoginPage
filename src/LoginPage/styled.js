import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
`;

export const LoginContainer = styled.div`
    background-color: hsl(${({ theme }) => theme.color.darkBlueHsl}, .8);
    border-radius: 10px;
    padding: 40px 30px;
    box-shadow: 0 0 15px 0 hsl(${({ theme }) => theme.color.darkBlueHsl});
    width: 500px;
`;

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-bottom: 5px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    margin-bottom: 20px;
    font-weight: normal;
    font-size: 2rem;
`;

export const ButtonLogin = styled.button`
    margin-top: 0.75em;
    padding: 0.5em 1em;
    font-size: 1.5rem;
    font-weight: lighter;
    color: ${({ theme }) => theme.color.white};
    background-color: hsl(${({ theme }) => theme.color.blueHsl}, 0.25);
    border: 1px solid hsl(${({ theme }) => theme.color.blueHsl});
    border-radius: 0.25em;
    outline: none;
    cursor: pointer;
    &:hover, &:focus {
        background-color: hsl(${({ theme }) => theme.color.blueHsl}, 0.4);
    }
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.color.white};
    font-weight: lighter;
`;

export const Input = styled.input`
    font-size: 1.25rem;
    padding: 0.5em;
    background-color: hsl(${({ theme }) => theme.color.lightBlueHsl}, 0.3);
    border: none;
    outline: none;
    border-radius: 0.25em;
    font-weight: lighter;
    color: ${({ theme }) => theme.color.white};
    &:hover {
        box-shadow: 0 0 0 1px hsl(${({ theme }) => theme.color.blueHsl});
    }
`;