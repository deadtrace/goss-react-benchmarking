import React from "react";
import ReactDOM from "react-dom";
import StarWarsHeroesPage from "./pages/StarWarsHeroesPage";
import StarWarsHeroesBlockingPage from "./pages/StarWarsHeroesBlockingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

ReactDOM.render(
    <ChakraProvider>
        <BrowserRouter>
            <Breadcrumb separator="-">
                <BreadcrumbItem>
                    <Link to="/">Постепенный CSR рендеринг</Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link to="/blocking">Блокирующий CSR</Link>
                </BreadcrumbItem>
            </Breadcrumb>

            <Switch>
                <Route path="/" exact>
                    <StarWarsHeroesPage />
                </Route>
                <Route path="/blocking">
                    <StarWarsHeroesBlockingPage />
                </Route>
            </Switch>
        </BrowserRouter>
    </ChakraProvider>,
    document.getElementById("root")
);
