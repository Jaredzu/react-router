import React, { useEffect, useState } from 'react'
import { Card } from "../components"
import { getPlanets } from '../api'
import config from '../config'


const PlanetsList = () => {

    const [planets, setPlanets] = useState([])
    const [error, setError] = useState("")

    const getData = async () => {
        try {
            // ------------------------IMPORTANTE PARA API -----------------------//
            const res = await getPlanets() // hacer la petición
            //console.log(res.data); // Limpiar la data
            //console.log(res.data.results); // usar la data 
            setPlanets(res.data.results)

        } catch (error) {
            setError(error.message)

        }

    }

    useEffect(() => {
        getData()

    }, []) // El array del segundo parámetro está para que solo se ejecute la función una vez

    // ------------------------IMPORTANTE PARA API -----------------------//



    return (
        <>
            {
               error.length > 0 && <p>error: {error}</p> // Shortcircuits,
            }
            {console.log("planets", planets)}
            {
                planets.map((element, id) => <Card
                    key={id}
                    title={element.name}
                    desc={element.terrain}
                    link={`${config.routes.PLANETS}/${id + 1}`} />)
            }
        </>
    )
}

export default PlanetsList