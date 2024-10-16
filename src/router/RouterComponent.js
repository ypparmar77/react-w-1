import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function RouterComponent() {
    return (
        <>
            <Link to="/">Dashboard</Link>
            <Link to="/page-1">Page 1</Link>
            <Link to="/page-2">Page 2</Link>
            <div style={{ margin: '10px' }}>
                <Outlet />
            </div>
        </>
    )
}
