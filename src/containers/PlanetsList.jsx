import React, { useEffect, useState } from 'react'
import { Card } from "../components"
import { getPlanets } from '../api'
import config from '../config'


const PlanetsList = () => {

    const [planets, setPlanets] = useState([])

    const getData = async () => {

        // ------------------------IMPORTANTE PARA API -----------------------//
        const res = await getPlanets() // hacer la petición
        //console.log(res.data); // Limpiar la data
        //console.log(res.data.results); // usar la data 
        setPlanets(res.data.results)
    }

    useEffect(() => {
        getData()

    }, []) // El array del segundo parámetro está para que solo se ejecute la función una vez

    // ------------------------IMPORTANTE PARA API -----------------------//



    return (
        <>
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