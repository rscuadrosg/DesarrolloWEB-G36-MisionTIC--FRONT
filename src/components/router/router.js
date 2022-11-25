import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Inicio from "../Index";
import Privaterouter from "../auth/privaterouter";
import Empleados from "../Empleados/index";
import Designs from "../designs/designs.buscar";

function AppRoutes(){
    
    return(
        <Router>
            <Switch>
                <Route exact path={ [ "/login" ] } component={ Login }></Route>
                <Privaterouter exact path={ [ "/empleados" ] } component={ Empleados } />
                <Privaterouter exact path={ [ "/designs" ] } component={ Designs } />
                <Route exact path={ [ "/" ] } component={ Login }></Route>
                <Route exact path={ [ "/index" ] } component={ Inicio }></Route>
                <Route path={ "*" } component={ () =>
                        (
                            <h1 style={{ marginTop: 300 }}>
                                404 
                                <br></br> 
                                Pagina no Encontrada
                            </h1>
                        )
                    }>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRoutes;