import React from "react";
import ReactDOM from "react-dom";
import StarWarsHeroesPage from "./pages/StarWarsHeroesPage";
import StarWarsHeroesBlockingPage from "./pages/StarWarsHeroesBlockingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <StarWarsHeroesPage />
            </Route>
            <Route path="/blocking">
                <StarWarsHeroesBlockingPage />
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
