import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import { Home, Planets, Notfound } from './pages'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="*" element={<Notfound />} />
        </Route>


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


{/* <Home />
      <Planets />
      <Notfound /> */}
