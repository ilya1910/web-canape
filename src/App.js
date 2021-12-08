import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Main from "./pages/main";
import Catalog from "./pages/catalog";
import Product from "./pages/product";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/catalog/product" component={Product} />
                <Route path="/catalog" component={Catalog} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
