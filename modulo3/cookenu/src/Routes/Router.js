import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import AdicionarReceita from "../pages/AdicionarReceita/AdicionarReceita";
import Cadastro from "../pages/Cadastro/Cadastro"
import DetalheReceita from "../pages/detalhereceita/detalhereceita";
import ListaReceita from "../pages/listareceita/listareceita";
import Login from "../pages/login/login";
import PaginaErro from "../pages/PaginaErro/PaginaErro"
import Header from "../components/Header/Header";


function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/Login">
                    <Login />
                </Route>
                <Route exact path="/Cadastro">
                    <Cadastro />
                </Route>
                <Route exact path="/ListaReceita">
                    <ListaReceita />
                </Route>
                <Route exact path="/DetalheReceita/:id">
                    <DetalheReceita />
                </Route>
                <Route exact path="/AdicionarReceita">
                    <AdicionarReceita />
                </Route>
                <Route>
                    <PaginaErro />
                </Route>
            </Switch>
        </BrowserRouter>
    );

}

export default Router