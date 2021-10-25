import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery";
import Footer from '../footer/Footer';

export default function About() {

    useEffect(() => {

        $("#redirect-home").hover(
            function () {
                $(this).animate({ paddingRight: '1.5%' }, 'fast')
                $(this).text("patricksullivan.live")
            },
            function () {
                $(this).animate({ paddingRight: '0' }, 'fast')
                $(this).text("patricksullivan")
            });

        $("#resume").hover(
            function () {
                $(this).animate({ paddingLeft: '5%' }, 'fast')
            },
            function () {
                $(this).animate({ paddingLeft: '0' }, 'fast')
            });
    })

    return (
        <>
            <div class="about content maxheight">
                <Link to="/">
                    <h2 id="redirect-home" class="position-fixed redirect-home mt-4 me-3 top-0 end-0 user-select-none d-sm-none d-md-block d-none d-sm-block">patricksullivan</h2>
                </Link>
                <div class="row text-center align-items-center g-0 maxheight position-absolute">
                    <div class="col-1" />
                    <div class="col-5 header">
                        <h1 class="title m-3 user-select-none">I'm a full stack developer based in Wellington, New Zealand.</h1>
                    </div>
                    <div class="col-6" />
                </div>
                <div class="container-fluid text-end sticky-top pt-4">
                    <Link to="/">
                        <h2 id="redirect-home"
                            class="redirect-home-mobile mt-2 me-3 top-0 start-0 user-select-none d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-xxl-block d-xxl-none">
                            ps
                        </h2>
                    </Link>
                </div>
            </div>
            <div class="content maxheight py-4">
                <div class="row align-items-center pb-4 g-0">
                    <div class="col header text-center">
                        <h1 class="display-1 m-3">About me.</h1>
                    </div>
                </div>
                <div class="row align-items-center g-0">
                    <div class="col-1 col-md-3" />
                    <div class="col-10 col-md-6 header">

                        <p class="fs-4">Kia ora, I'm Patrick Sullivan (he/him). I'm a tech obsessed kiwi with a passion for full stack
                            web and software development. Being raised on the web, I always dreamt from a very young age about working with
                            a computer for a living.</p>

                        <p class="fs-4">I am proficient and experienced in HTML, CSS, JavaScript, ReactJS, Redux, Node.JS, and C#, among
                            other languages, frameworks and technologies.Through approaching my experiences in coding with a growth and collaberative mindset,
                            I have also come to appreciate the importance of community and collaboration in this field. </p>

                        <p class="fs-4">I began venturing into the world of tech at the start of 2016, enrolling at the Nelson Marlborough
                            Institute of Technology (NMIT). I began pursuing the service side of the industry, but through attending web and
                            software development classes at the same time, I discovered that I really enjoyed the creative outlet that side
                            of the tech landscape provided. This prompted a switch up of my academic path into a coding focused one.</p>

                        <div id="carouselExampleFade" class="py-5 carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://snz04pap001files.storage.live.com/y4mZrttQ716H_8kFBWzLo6XDmHikg3UXAZWUXUWnWxD_Y93-RNXfElj4Oxvz0RUnuNzLyKucKrpqw6xcCLaTIqPtFLSl3m6RZBjj3893ch7b49T7kqbe8Al3n5hO9mRkWpdlJxDsF6xxrRQnVBt2lwnCophK-EB_ORR6-m8glZK9kovwP7jpLpOl1vvw3j55UwK?width=1024&height=576&cropmode=none"
                                        class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://snz04pap001files.storage.live.com/y4m36JkzU-95yJ7cGbhhIi8VHz2Ec8LZPecnT7KzYah9dfYK5TlgXDZ_n0nk97zkTVaRVyj2pqnGg11QTIzzG7et3d4RL3CnlFLyMdxWBUHsQhXGCBe2Lqd-O4OqwOfHA0A15XSIFOZw_zze5uRqIglupDW6Vt1GUEGgnGDhB9OfyJEZSgv4Zjyq_aFBmOxF90X?width=1024&height=576&cropmode=none"
                                        class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://snz04pap001files.storage.live.com/y4mP9gxS4XK99m2HP1vZyDbuO88QKfatwhEdLZmLYpfJlRuNmDN0Mo_HXoUXH0Tcsnk-NF9dWyQiIpt1FgFH8HJqNmidntQAeviXLeuoG0r8FYTdtKgEQ3py5m5OYriJWmz87Hanb16EUWr2WEkXAv8WMT5uxa0TuIoeumriFcNmUSix22Hgon_9nC35CNSwdvR?width=1536&height=864&cropmode=none"
                                        class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                        <p class="fs-4">Throughout my time studying, not only did I get to greatly expand upon my learning of coding,
                            but I also was fortunate enough to pursue incredible oppurtunitues outside of NMIT.</p>

                        <p class="fs-4">In 2019, I was selected alongside
                            another student to assist with teaching an object oriented programming class in Hangzhou, China. This experience more
                            than anything, taught me the rewarding value of sharing experiences and knowledge with other people</p>

                        <p class="fs-4">That same year, another student and I were given the oppurtunity to do a work placement project
                            within an agile dev team. Above all else, this experience taught me the value of teamwork and communication with your
                            whole team in order to achieve a collectively desired outcome.</p>

                        <div id="carouselExampleFade2" class="py-5 carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://snz04pap001files.storage.live.com/y4m6H6igaFGjgliA1zZeqnP_aBglbAcuxdOnSx7Waz58zZ50jH8OV0Gq85Q-UdF7MojmcpoJPNK5qctQ258jz2olT6ryxufszFd9vS3K7iw8b1XXheF2uZqNgRw2mat0vFSBeKoiGTw4o5J3bWEvKPbppinzxQLyame5wkreKVkFcNlJgR1SeczFr81kW8VQwgt?width=1024&height=576&cropmode=none"
                                        class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://snz04pap001files.storage.live.com/y4mf1YlHqGPWykVVUU5JJlOXz70ykb9b8M2q5_R388Yi7jEr74ygoXVmMZzYtrGdaJPPIB3QmyPgMama5lkbmhFRDUV2Mli27iNwFl1fYQXBNVgZD50C6G_y9Q5mwSt59Fj6n_w9WXFGVQ3DtQJFKvVYokQroVuIbedEd5RhDHqhdOJakKchl5gPYP1PBtxdHbD?width=1024&height=576&cropmode=none"
                                        class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://snz04pap001files.storage.live.com/y4msFT31tcSuI-9SVCsbGnEew7Zanm1sgyMzCfjIWTuFZ6pKKikbVAKnqzRpa0mH4jyAJMAiUw6Gcc_LrFdkpWcTBuYAm11G9xFT2kemb7mezk1xh9B-Wj3t3KmfQZXO2ArpIdOY_-cztoXLhazaNPgfG4U4bLQk6I8_hYZq-Ae7y0fKSgv653jorf0Blqo76K0?width=1024&height=576&cropmode=none"
                                        class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                        <p class="fs-4">Since then, I have become a recent graduate of Enspiral Dev Academy, where I expanded even more upon
                            my web development expertise, and my love for working with diverse and vibrant teams and communities. I look forward
                            to bringing my experiences and sharing them with the next team that I am fortunate enough to be a part of.</p>

                        <div id="carouselExampleFade3" class="py-5 carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://snz04pap001files.storage.live.com/y4mGseIkQZgLiu6UTpgp37jirqUGnQqhjyw4qo90kg8mgBP_uqh3oE33U2ckLCg1pZkpBJGcg5CLCMxy1fIx4GKo5Er8AVhaMc-YtK8DNLjWj6uRclOMMK2h07ZNlcYG2udrToVymEzdDW6HqU52yCWiqb92YSlNtxS0cZ2WzhYatS61Al6NSCElNj1t7yem2gp?width=1024&height=576&cropmode=none"
                                        class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://snz04pap001files.storage.live.com/y4m8uJLIMfN9DKaBQP-EjmBVThk67kYkfLuxwlZLLFEpspt0GGeeCNrUVEPCBJFG6mXL6jXXKkj5xJjtODFq_CKrNeqtB5B3wp7a5CXnZJTx02ju9xPMURAnwFFweYP9Z64UuSqB7alpbkw_vOJ-TE_S7Pl1O3llCUkQrirQ9iiRQbgNtqcRbKi923z_pIt22PW?width=1024&height=576&cropmode=none"
                                        class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://snz04pap001files.storage.live.com/y4my6_bQWgrHnE1Kc3Qm2b8CKtxSiSjPnI9VNqzFFJ4fg8sxeTA4qoRP4ykSrt77T8GgH6UFbytnvSBNsS-fhXKnzy2MhfAX6HSRii2MFMfbls6j4OMoY57srNZUTX9Q6W8S8d_ruJTrmX0QlrXZwuBnRnk-y7Es5SwwHtrgnHjFPUCz8wxr-Mcj4DIgZjaAe_B?width=1024&height=576&cropmode=none"
                                        class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                        <p class="fs-4">Keen to know more about me? <Link class="redirect-home" to="/contact" target="_top"><em>Let's get in contact</em></Link>, or check out my resume below.</p>

                        <Link to="/files/CV.pdf" target="_blank">
                            <h2 id="resume" class="py-5 redirect-home user-select-none">My Resume (pdf 90kb)</h2>
                        </Link>

                    </div>
                    <div class="col-1 col-md-3" />
                </div>
                <Footer />
            </div>
        </>
    )
}
