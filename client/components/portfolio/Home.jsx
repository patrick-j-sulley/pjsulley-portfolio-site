import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <h1>Patrick John Sullivan</h1>
            <h2>Full Stack Developer</h2>
            <Link to="/about"><h3>About</h3></Link>
            <Link to="/work"><h3>Work</h3></Link>
            <Link to="/contact"><h3>Contact</h3></Link>
        </>
    )
}
