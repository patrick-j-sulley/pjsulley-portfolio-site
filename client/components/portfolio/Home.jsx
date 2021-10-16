import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>

            <div class="home">
                <div class="row maxheight">
                    <div class="row align-items-center g-0">
                        <div class="col-2" />
                        <div class="col-3 header">
                            <Link to='/about'>
                                <h1 id="kiaora" class="display-1 title m-3">Kia ora!</h1>
                            </Link>
                            <Link to='/work'>
                                    <h1 id="iam" class="display-1 title m-3">I am</h1>
                            </Link>
                            <Link to='/contact'>
                                    <h1 id="patrick" class="display-1 title m-3">Patrick</h1>
                            </Link>
                        </div>
                        <div class="col-7" />
                    </div>
                </div>
            </div>

        </>
    )
}

{/* <div id="title" class="btn-group m-3" role="group" aria-label="First group">
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
                            </div> */}