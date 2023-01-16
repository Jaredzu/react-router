import React from "react";
import { Link } from "react-router-dom";


const Card = ({ title, desc, link }) => {
    return (
        <>
            <div className="card mt-2">
                <div className="card-body">
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <p className="card-text">
                        {desc}
                    </p>
                    <Link className="btn btn-primary" to={link}>
                        Ver más
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card