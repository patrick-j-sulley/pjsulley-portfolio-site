import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery";

export default function Home() {

    useEffect(() => {

        $("#about-mobile").hide()
        $("#work-mobile").hide()
        $("#contact-mobile").hide()

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

        $("#mobile-tap-area").click(
            function () {
                $(this).hide()
                $("#about-mobile-toggle").hide()
                $("#work-mobile-toggle").hide()
                $("#contact-mobile-toggle").hide()
                $("#about-mobile").show()
                $("#work-mobile").show()
                $("#contact-mobile").show()
            });
    })

    return (
        <>
            
                <div class="home content maxheight">
                <div id="mobile-tap-area" class="mobile-tap-area d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-xxl-block d-xxl-none">
                            Tap to continue
                        </div>
                    <div class=" row maxheight">
                        <div class=" row align-items-center g-0 ">
                            <div class="col-2" />

                            {/* Desktop */}
                            <div class="col-3 header d-sm-none d-md-block d-none d-sm-block">
                                <Link to='/about'>
                                    <h1 id="about" class="home-nav user-select-none">Kia ora!</h1>
                                </Link>
                                <Link to='/work'>
                                    <h1 id="work" class="home-nav user-select-none">I am</h1>
                                </Link>
                                <Link to='/contact'>
                                    <h1 id="contact" class="home-nav user-select-none">Patrick</h1>
                                </Link>
                            </div>

                            {/* Mobile */}
                            <div class="col-4 header d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-xxl-block d-xxl-none">
                                <h1 id="about-mobile-toggle" class="home-nav-mobile-toggle user-select-none">Kia ora!</h1>
                                <h1 id="work-mobile-toggle" class="home-nav-mobile-toggle user-select-none">I am</h1>
                                <h1 id="contact-mobile-toggle" class="home-nav-mobile-toggle user-select-none">Patrick</h1>
                                <Link id="about-mobile" to='/about'>
                                    <h1 class="home-nav-mobile user-select-none">About</h1>
                                </Link>
                                <Link id="work-mobile" to='/work'>
                                    <h1 class="home-nav-mobile user-select-none">Work</h1>
                                </Link>
                                <Link id="contact-mobile" to='/contact'>
                                    <h1 class="home-nav-mobile user-select-none">Contact</h1>
                                </Link>
                            </div>
                            
                            <div class="col-md-7 col-sm-6 col-6" />
                            
                        </div>
                        
                    </div>
                    
                </div>
        </>
    )
}