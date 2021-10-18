import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
            <div class="about content maxheight">
                <div class="row">
                    <div class="col">
                        <Link to="/">
                            <button type="button" class="btn btn-lg btn-outline-light m-3">⬅ PJS
                            </button>
                        </Link>
                    </div>
                    <div class="col" />
                    <div class="col" />
                </div>
                <div class="row text-center">
                    <div class="row align-items-center g-0">
                        <div class="col header">
                            <h1 class="display-1 title m-3">Get to know me.</h1>
                        </div>
                    </div>
                    <div class="row align-items-center g-0">
                        <div class="col-1" />
                        <div class="col-10 header">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum</p>
                        </div>
                        <div class="col-1" />
                    </div>
                </div>
            </div>
        </>
    )
}
