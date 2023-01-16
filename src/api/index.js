import Axios from "axios";

const api = Axios.create({
    baseURL: "https://swapi.dev/api/"
})

const getPlanets = async () => {
    const data = await api.get("/planets")
    return data

}

export {
    getPlanets
}