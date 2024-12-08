import React from "react";

const Jumbotron = () => {
    return (
        <div className="bg-light p-5 rounded">
            <h1 className="display-4">¡Bienvenido!</h1>
            <p className="lead">Esto es un diseño destacado que puedes personalizar fácilmente.</p>
            <hr className="my-4"/>
                <p>Es flexible y compatible con las herramientas modernas de Bootstrap.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Aprender más</a>
        </div>
    )
}

export default Jumbotron