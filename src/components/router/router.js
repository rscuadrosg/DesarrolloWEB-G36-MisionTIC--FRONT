import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Inicio from "../Index";

function AppRoutes(){
    

    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/" element={<Inicio />}></Route>
                <Route exact path="/index" element={<Inicio />}></Route>
                <Route path="/*" element={
                    (
                        <h1 style={{ marginTop: 300 }}>404 <br></br> Pagina no Encontrada</h1>
                    )
                }>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;