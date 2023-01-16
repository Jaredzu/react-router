import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import config from '../config'


const Navbar = () => {
    return (
        <>
            <nav className='navbar navbar-expand-md bg-light'>
                <div className='container-fluid'>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                </div>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to={config.routes.HOME} />
                            Home
                            <Link />
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to={config.routes.PRODUCTS} />
                            Planets
                            <Link />
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar
