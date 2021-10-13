import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>

            <div class="home text-center">
                <div class="row maxheight">
                    <div class="row align-items-center g-0">
                        <div class="col g-0">
                            <h1 class="display-1">Patrick John Sullivan</h1>
                            <h6 class="display-6">Full Stack Developer</h6>
                            <ul class="list-inline">
                                <h3 class="lead list-inline-item"><Link to="/about">About</Link></h3>
                                <h3 class="lead list-inline-item"><Link to="/work">Work</Link></h3>
                                <h3 class="lead list-inline-item"><Link to="/contact">Contact</Link></h3>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
