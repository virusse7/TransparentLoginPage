import { LoginContainer, Container, Title } from "./styled.js";
import { FormElement } from "./LoginPageForm.js";

export function LoginPage() {
  return (
    <LoginContainer>
      <Title>Login to chat</Title>
      <Container>
        <FormElement />
      </Container>
    </LoginContainer>
  )
}