import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery";

export default function Home() {

    useEffect(() => {

        $("#about").hover(
            function () {
                $(this).animate({ paddingLeft: '7.5%' }, 'fast')
                $(this).text("About")
            },
            function () {
                $(this).animate({ paddingLeft: '0' }, 'fast')
                $(this).text("Kia ora!")
            });

        $("#work").hover(
            function () {
                $(this).animate({ paddingLeft: '7.5%' }, 'fast')
                $(this).text("Work")
            },
            function () {
                $(this).animate({ paddingLeft: '0' }, 'fast')
                $(this).text("I am")
            });

        $("#contact").hover(
            function () {
                $(this).animate({ paddingLeft: '7.5%' }, 'fast')
                $(this).text("Contact")
            },
            function () {
                $(this).animate({ paddingLeft: '0' }, 'fast')
                $(this).text("Patrick")
            });
    })

    return (
        <>

            <div class="home content">
                <div class=" row maxheight">
                    <div class=" row align-items-center g-0 ">
                        <div class="col-2" />
                        <div class="col-3 header">
                            <Link to='/about'>
                                <h1 id="about" class="home-nav">Kia ora!</h1>
                            </Link>
                            <Link to='/work'>
                                <h1 id="work" class="home-nav">I am</h1>
                            </Link>
                            <Link to='/contact'>
                                <h1 id="contact" class="home-nav">Patrick</h1>
                            </Link>
                        </div>
                        <div class="col-7" />
                    </div>
                </div>
            </div>

        </>
    )
}