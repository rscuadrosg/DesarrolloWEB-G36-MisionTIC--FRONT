import React from "react";

class Encabezado extends React.Component {
    render() {
        return (
            <div>
                <img  className="mx-auto d-block" src={process.env.PUBLIC_URL+"./Resources/DKfries-logo.png"} alt="dkfries_logo" width="200" height="auto"/>
            </div>
        )
    }
}

export default Encabezado;