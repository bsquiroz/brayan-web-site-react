import React from "react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { ViewAdm } from "./screens/ViewAdm";
import { ViewUser } from "./screens/ViewUser";

import { ProtectedRoute } from "./helpers/protectedRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div className="container_principal">
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <ProtectedRoute exact path="/view-adm">
                        <ViewAdm />
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/view-user">
                        <ViewUser />
                    </ProtectedRoute>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}
