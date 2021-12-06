import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Catalog from "./pages/catalog";
import Product from "./pages/product";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/сatalog/product" component={Product} />
                <Route path="/сatalog" component={Catalog} />
                {/* <Redirect to="/" /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
