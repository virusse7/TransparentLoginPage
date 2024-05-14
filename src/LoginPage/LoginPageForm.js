import {
    ButtonLogin, Form, ContainerForm, Input, Label
} from "./styled";

export function FormElement() {
    return (
        <Form>
            <ContainerForm>
                <Label for="email">Email</Label>
                <Input type="email" id="email"></Input>
            </ContainerForm>
            <ContainerForm>
                <Label for="password">Password</Label>
                <Input type="password" id="password"></Input>
            </ContainerForm>
            <ButtonLogin type="submit">Login</ButtonLogin>
        </Form>
    )
}