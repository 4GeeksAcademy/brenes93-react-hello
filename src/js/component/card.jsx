import React from "react";
const Card = (props) => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <img 
                            src={props.image} 
                            className="card-img-top" 
                            alt="Imagen de ejemplo" 
                        />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.text}</p>
                            <a href={props.link} className="btn btn-primary">
                                {props.buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card