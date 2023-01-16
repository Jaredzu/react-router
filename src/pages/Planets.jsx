import React from "react";
import { PlanetsList } from "../containers";

const Planets = () => {
    return (
        <>
            <div className="container-fluid d-flex flex-column">
                <h1>Welcome to planets</h1>
                <PlanetsList />
            </div>

        </>
    )
}

export default Planets