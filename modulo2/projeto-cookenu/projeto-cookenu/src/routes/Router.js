import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdicionarReceita from "../pages/AdicionarReceita/AdicionarReceita";
import Cadastro from "../pages/Cadastro/Cadastro";
import DetalheReceita from "../pages/DetalheReceita/DetalheReceita";
import ListaReceita from "../pages/ListaReceita/ListaReceita";
import Login from "../pages/Login/Login";


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route>
                    <AdicionarReceita />
                    <Cadastro />
                    <DetalheReceita />
                    <ListaReceita />
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}