import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery";

export default function Home() {

    useEffect(() => {
        $("#kiaora").hover(
            function () {
                $(this).animate({ paddingLeft: '10%' }, 'fast')
                $(this).text("About")
            },
            function () {
                $(this).animate({ paddingLeft: '0' }, 'fast')
                $(this).text("Kia ora!")
            });
    
        $("#iam").hover(
            function () {
                $(this).animate({ paddingLeft: '10%' }, 'fast')
                $(this).text("Work")
            },
            function () {
                $(this).animate({ paddingLeft: '0' }, 'fast')
                $(this).text("I am")
            });
    
        $("#patrick").hover(
            function () {
                $(this).animate({ paddingLeft: '10%' }, 'fast')
                $(this).text("Contact")
            },
            function () {
                $(this).animate({ paddingLeft: '0' }, 'fast')
                $(this).text("Patrick")
            });
    }) 

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