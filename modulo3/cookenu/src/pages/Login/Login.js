import React from "react";
import { InputsContainer, ScreenContainer } from "./styled";
import logo from "../../assets/logo.png"
import { TextField, Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";


const Login = () => {

    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const onSubmitForm = () => {

    }
    return (
        <ScreenContainer>
            <LogoImage src={logo} ></LogoImage>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                    />
                    <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    >
                        Fazer Login
                        </Button>

                </form>
            </InputsContainer>
        </ScreenContainer>
    )

};

export default Login