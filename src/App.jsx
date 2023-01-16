import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom'
import { Navbar } from './layout'
import { Home, Planets, Notfound } from './pages'

import config from './config'
const { routes } = config


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Navbar />}>
                <Route path='/' element={<Home />} />
                <Route path='/planets' element={<Planets />} />
                <Route path='*' element={<Notfound />} />
            </Route>
        </>
    )
)

const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App

{
    /* <Home />
        <Planets />
        <Notfound /> */
}
