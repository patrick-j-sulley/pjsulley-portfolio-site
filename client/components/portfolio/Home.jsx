import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>

            <div class="home text-center">
                <div class="row maxheight">
                    <div class="row align-items-center g-0">
                        <div class="col header">
                            <h1 class="display-1 title m-3">Patrick John Sullivan</h1>
                            <h6 class="display-6 title m-3">Full Stack Developer</h6>
                            <div class="btn-group m-3" role="group" aria-label="First group">
                                <Link to="/about">
                                    <button type="button" class="btn btn-lg btn-outline-light">
                                        About
                                    </button>
                                </Link>
                            </div>
                            <div class="btn-group m-3" role="group" aria-label="First group">
                                <Link to="/work">
                                    <button type="button" class="btn btn-lg btn-outline-light">
                                        Work
                                    </button>
                                </Link>
                            </div>
                            <div class="btn-group m-3" role="group" aria-label="First group">
                                <Link to="/contact">
                                    <button type="button" class="btn btn-lg btn-outline-light">
                                        Contact
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
