import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery";

export default function Work() {
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
    })

    return (
        <>
            <div class="work content maxheight">
                <Link to="/">
                    <h2 id="redirect-home" class="position-fixed m-6 redirect-home m-4 top-0 end-0 user-select-none">patricksullivan</h2>
                </Link>
                <div class="row text-center align-items-center g-0 maxheight">
                    <div class="col-1" />
                    <div class="col-5 header">
                        <h1 class="title m-3 user-select-none">Web and software development projects I've worked on.</h1>
                    </div>
                    <div class="col-6" />
                </div>
            </div>

            <div class="content maxheight py-4">
                <div class="row align-items-center pb-4 g-0">
                    <div class="col header text-center">
                        <h1 class="display-1 m-3">My Work.</h1>
                        <h6 class="display-6 m-3 py-4">A selection of my portfolio. For a complete look at my output, please check out my <a class="redirect-home" href="https://github.com/patrick-j-sulley" target="_blank">GitHub.</a></h6>
                    </div>
                </div>
                <div class="row align-items-center g-0">
                    <div class="row row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-xs-12 row-cols-s-12">
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4mZDKSCA3YKTU-RQDUc_EBAYid26K_oAczc1aB6EOFVUa7plnoZ6Uk6VCVTY20aaXK2NDbypSYwl0mYDvhcCI_tpyjLGnDcqciS9kLgrbXCzsD5EiJiCY5FcNCrkXtJyWC8pZW2slG3hfrzi2SPLThBXUw_H1NbnrsaMLdoRqo9PyLUMJUQG7vQIUW37rKDsIa?width=876&height=876&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">HiHi</h5>
                                    <p class="card-text fs-5">HiHi is a social media web app inspired by Twitter, created by Team HiHi for the final week long group project of the web dev bootcamp at Enspiral Dev Academy. Built with HTML, CSS, JavaScript, SASS, ReactJS, Redux, Node.JS, Express, Authenticare, SQLite, Postgres, Knex.JS.</p>
                                    <a href="https://github.com/patrick-j-sulley/hihi" class="btn btn-outline-light fs-5" target="_blank">GitHub</a>
                                    <a href="https://hihi-app.herokuapp.com/" class="btn btn-outline-light fs-5 mx-2" target="_blank">Heroku</a>
                                </div>
                            </div>
                        </div>
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4mHI8sFR2tGzmtwXUK-0W9PpH0BTsp8CrWNlTEFcRTq8__M26hY9ma1w-8z7bD6Wej0UpO_zOv5hZy_y04znPJiDjJnUYJf7pqqclNbxyKQHpnUo5RD_iBm-yV_1XNhIY7L9G0patH89oyVt4a4uHVWD2XeSzNlui7HI97qlE2Sv0P2wY3gXv2xo8cexQ5uxly?width=902&height=902&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">Party Party!</h5>
                                    <p class="card-text fs-5">Party Party is an random cocktail generator web app. Party Party was created by Team Party Party for a one day length group project at Enspiral Dev Academy, and uses TheCocktailDB external API. Built with HTML, CSS, JavaScript, ReactJS, Redux, Node.JS, and Express.</p>
                                    <a href="https://github.com/patrick-j-sulley/party-party" class="btn btn-outline-light fs-5" target="_blank">GitHub</a>
                                    <a href="https://solo-party-party.herokuapp.com/" class="btn btn-outline-light fs-5 mx-2" target="_blank">Heroku</a>
                                </div>
                            </div>
                        </div>
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4mQmIWR1cXGEWviU4frD-VYJM0BWqZPD_GnLgKSWzesGSFv7Ji08cD4lzZ-oGJJqc_X6FVATAiBec2a1h7Nsrbjy21Zqyl-YZkh56fxZBPCg8acvjExFpgbVwXXVK-W6Jl2nUQwYlLCNp12BtjKUVBlspcgOPAx9Y39hrlwVIvscktPp2vJ8qhzCOBv7U6BvC0?width=873&height=873&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">PJSIT Portfolio Site</h5>
                                    <p class="card-text fs-5">PJSIT is a developer portfolio site that I created for myself before the one that you're on right now. It is basic single page site, programmed in HTML, CSS, and JavaScript.</p>
                                    <a href="https://github.com/patrick-j-sulley/Developer-Portfolio-HTTP-Website" class="btn btn-outline-light fs-5" target="_blank">GitHub</a>
                                    <a href="https://pjsit.neocities.org/" class="btn btn-outline-light fs-5 mx-2" target="_blank">Hosted Site</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4m1fcIxowuu4V3r7m_H48iljnAKqBS-HnIIvsCeQYvdYXcUthbWU_VL7H4JLqZ8YACbVTIPUDUBGPCAfyohmafH_1DXB82HLbZvjmFQUbsTWZNO21yQ6Kw6RHZPz52SL1h1I0LM6iGLO3IkkUWlPQnzhSz75Lyh9qcg6sSAxwZvhcADqT3u6Av8aR_G9aVjQ9Z?width=287&height=287&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">FieldGO Dispatch KPI Dashboard</h5>
                                    <p class="card-text fs-5">A KPI dashboard page component for FieldGO's enterprise mobility software suite. Built with Angular, TypeScript, Node.JS, Angular Material, Google Charts, RxJS, and Moment.JS</p>
                                    <a href="https://fieldgo.com/" class="btn btn-outline-light fs-5" target="_blank">FieldGO</a>
                                </div>
                            </div>
                        </div>
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4m81NnRVoqXmzM5yOhCxpIeqJfpZAmF2M3r0oD2s63WDYJ370U_b9zdUYG-U8_3p7tHd99RME1tO3BfOKpDwnJOC959cXYMX-QFnb27u1xdprB5UB9tXxRR2GoFM6ikkSDPYNT_D3wGFTzvmTZrldP_SWuDULizXLQcmYSJ9wGMkYxnmtY-UGe2etjkB4PpsqB?width=901&height=901&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">Lost and Found</h5>
                                    <p class="card-text fs-5">Lost and found is a digital billboard web app that enables users to register/login, and create listings for lost and found pets. This was a 2 day web dev group project at Enspiral Dev Academy. Built with HTML, CSS, JavaScript, React, Redux, Node.JS, SQLite, Postgres, and Authenticare.</p>
                                    <a href="https://github.com/patrick-j-sulley/lost-and-found" class="btn btn-outline-light fs-5" target="_blank">GitHub</a>
                                    <a href="https://missingfursons.herokuapp.com/" class="btn btn-outline-light fs-5 mx-2" target="_blank">Heroku</a>
                                </div>
                            </div>
                        </div>
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4mEY0j6AJGeMTxD-t0bUNjdY6926W0xeNDjuZkf1piWsYAeU_H1xRwUg6otv799Y9B9HOlQNuk8KI4Pkwk1COy-RoxWHamKO56tTVkubjOBd-l_VOF5nwRSHPU_heSjVkp5i5vX84ZOHPja5vXwszQJQUe4bOMGe_C2daGOJaGPruzHfsPZEPcP2UIHCCwdrxr?width=903&height=903&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">IBGNZ WordPress Site</h5>
                                    <p class="card-text fs-5">IBGNZ (Independent Berry Growers of New Zealand) is a website built with the WordPress CMS. IBGNZ is an e-commerce marketplace website that allows for users to login/authenticate and list items for sale. E-commerce functionality powered by 'WC Vendors Marketplace' and 'WooCommerce' plugins, price calculation functionality powered by 'Calculated Fields Form' plugin.</p>
                                    <a href="https://github.com/patrick-j-sulley/IBGNZ-WordPress-Site" class="btn btn-outline-light fs-5" target="_blank">GitHub</a>
                                    <a href="https://newsimland.com/~Patrick-Sullivan2/wordpress/" class="btn btn-outline-light fs-5 mx-2" target="_blank">Hosted Site</a>
                                </div>
                            </div>
                        </div>
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4muW23cctvHANBhD_gY4EZcSq3DMuvhGBrWOIBBoOuI6RVxznuZKoijf7BI_wf-Jjpea69pIPuZ10ObVuSoaBIat2Zt88R_85f4BsBm7Cv9Njq4XQsxKluXPufOa97awibFKXKDarLR7e9yyanemRz1PWslA5x0kWVSr4voCjCZxW8mZh2IM1pcimNOiwpapDl?width=600&height=600&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">Yeezy Jump</h5>
                                    <p class="card-text fs-5">Yeezy Jump is a Kanye West themed 2D mobile run & jump game. Engine powered by unity, in game scripts/assets programmed with C# in Visual Studio 2017.</p>
                                    <a href="https://github.com/patrick-j-sulley/Yeezy-Jump" class="btn btn-outline-light fs-5" target="_blank">GitHub</a>
                                </div>
                            </div>
                        </div>
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4m4bCqJH_M6G3y2TKAL3Fu8ueaZKP_5Le7_QU4GIUuytqorWiXQNqY0T4laJuKWGprt8KwZC6UIi14snVmzs_fwBS7-KJfd0YgXfrtRm2QIxX_TeBuyz9CGkNsGc6rat1mSi7GsadviGvGthbmWk8CSC9zM4PMx0NpEVxw87X4HzFx6O_z4-FjIufSAooUVsk4?width=876&height=876&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">Crystal Moon Art Portfolio Site</h5>
                                    <p class="card-text fs-5">Crystal Moon Art & Design is a digital artist portfolio website. Built with HTML, CSS, JavaScript, and Bootstrap.</p>
                                    <a href="https://s3-ap-southeast-2.amazonaws.com/crystalmoonad/index.html" class="btn btn-outline-light fs-5" target="_blank">Hosted Site</a>
                                </div>
                            </div>
                        </div>
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4mSLY_Ytf75tqy6E_uUf_vPzNKrfFab-nBJHfD013ZNUFxIVq3qm_ErdhxxvLmUof5R9-o474GFhRsZy9NDnb6WSgVztNt8eqW0ZZI3J-_e3PJZHjtRT_Z8FnglQHuY_ZcCnoBh3f4XXnxrVEMMrhaQ-bnzqGEmZgl9wRaj3Gt_CpML4oURoIBh408hp4x6fig?width=895&height=895&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">Goodbye Fresh</h5>
                                    <p class="card-text fs-5">Goodbye Fresh is a takeout randomizer web app. The app uses the Nearby Search API within the Google Maps Places API for all GET & POST routes. Created by Team Ravenclaw for a one day group project at Enspiral Dev Academy. Built with HTML, CSS, JavaScript, ReactJS, Node.JS, and Express.</p>
                                    <a href="https://github.com/patrick-j-sulley/goodbye-fresh" class="btn btn-outline-light fs-5" target="_blank">GitHub</a>
                                </div>
                            </div>
                        </div>
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4mNnLrq1QXKx79TwN_R2mrg0l19vmFdyqH1j7-9uoMPC0WCdzccwZkV-yj0iMfG2xtgV3mEoK-GSpIX8MABh-oQjIysNs2DYo0sw71uNj194Ed2tPhaKwJcEhGAvvTk4J5SVyqElaQNsBQ_XT6Wu8HqJOEBlNKbKyKqToVlZCXsZerf-DSPYCQsZyEgHJRLonT?width=877&height=877&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">PixArt</h5>
                                    <p class="card-text fs-5">PixArt is a digital pixel art web app. Created by Team PixArt for a one day group project at Enspiral Dev Academy. Built with HTML, CSS, JavaScript, ReactJS, Node.JS, and Express.</p>
                                    <a href="https://github.com/patrick-j-sulley/PixArt" class="btn btn-outline-light fs-5" target="_blank">GitHub</a>
                                </div>
                            </div>
                        </div>
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4mt7DHAM9can7-qHWH16E_Vq5R92aVu_pt-zEOdNjj3NOnmquai85bemrsvLDkFyVoRYA9GPNQ99rtyZ6sjaJ-_Lc-_4Ve3ZNpz67u1Zj2DmP6xhs_GDxBat8aDwZzwLAbvRMAQYJL88hT5jfSmun_1Zxc6yS_RJ43Z8JrZiNPC5tW6fUY5F7AxiSuZtpr4MJc?width=897&height=897&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">The One Word Story</h5>
                                    <p class="card-text fs-5">The one word story is an interactive text based web app that contains an ongoing story that users can input one word at a time to. Created by Team 3dom for a one day group project at Enspiral Dev Academy. Built with HTML, CSS, and JavaScript.</p>
                                    <a href="https://github.com/patrick-j-sulley/the-one-word-story" class="btn btn-outline-light fs-5" target="_blank">GitHub</a>
                                    <a href="https://theonewordstory.herokuapp.com/" class="btn btn-outline-light fs-5 mx-2" target="_blank">Heroku</a>
                                </div>
                            </div>
                        </div>
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4m5QXjEHd2kZaeUsikpo3bflHJzAC8mtTipJ2hhCaTuMQC0i8y-GyGVrVSikwISCYrnpc5aP9B-jG1EGZ1noeRLki85dOuleqj4ph8sK_bw7GFLI-9VuqksOW8DMys7wDGiofsR8G5lllvSUTN9v_6RqbkZ1a4CdfATjupyJ6XoLM02aL9Djq_n_VqY8RLowGK?width=907&height=907&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">EDA Foundations Blog Site</h5>
                                    <p class="card-text fs-5">My EDA Foundations Blog Site documents my 5 week journey through the foundations stage of the web development bootcamp at Enspiral Dev Academy. Built with HTML/CSS, JavaScript, and Bootstrap.</p>
                                    <a href="https://github.com/patrick-j-sulley/patrick-j-sulley.github.io" class="btn btn-outline-light fs-5" target="_blank">GitHub</a>
                                    <a href="https://patrick-j-sulley.github.io/" class="btn btn-outline-light fs-5 mx-2" target="_blank">Hosted Site</a>
                                </div>
                            </div>
                        </div>
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4mRJdN9IOs6wCv20788yAJwZS4cHpHjQi5PL-OuQ6WAI1iSgeWOg7OEcaGK8sQ1E-Ug6bMyo57m_m4uBh28isOnphKCe-4WweoqCFMLoOCU2NYvcgMtJIYuEqNPiLzVo_Mj0CSFc3eyCgy5h-a48YqVpQpXPa75U2VF8S8HfA05BIVGmQlAWa7-G645HueURGK?width=439&height=439&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">Chefrachy</h5>
                                    <p class="card-text fs-5">Chefrachy is a recipe sharing web app, constructed with the MVC design pattern. Data storage and functionality done via connected MySQL database. Built with HTML, CSS, JavaScript, jQuery, PHP, and Bootstrap.</p>
                                    <a href="https://github.com/patrick-j-sulley/Chefrachy-PHP-MVC-Site" class="btn btn-outline-light fs-5" target="_blank">GitHub</a>
                                </div>
                            </div>
                        </div>
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4mRLwE-kxByMJ-dTmugnsmmHufvNQ_x-Pc-qev5dbFhjJbA0VPaKQJPfv9T39G1tREHWrTQ0KLj7ptwbATQeXauJa_sk5NZfiqPgL3GTv3EJeSwGXbywl-xxH0PWH--TF8o_y9L4sb0U8ohyk4EJGPPdHXJ2ojYoYgAvRGBOy2YwiVvUmcD0oTn_Z6A6cdvAkB?width=844&height=844&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">That's a Rap</h5>
                                    <p class="card-text fs-5">That's a Rap is a hip hop themed blog site built using WordPress. Created and operated by me as a part of a level 5 social media class at NMIT.</p>
                                    <a href="https://thatsarap.home.blog/" class="btn btn-outline-light fs-5" target="_blank">WordPress</a>
                                </div>
                            </div>
                        </div>
                        <div class="col p-5">
                            <div class="card text-white bg-dark mb-3">
                                <img src="https://snz04pap001files.storage.live.com/y4m8Jz4OBq1fjiPvJbMQl6DNRt8sZBWh-ZN6P6gjjdsN8oof4d24EfX4HpbhKUS2SoC5D8d96Zc5bov4-iHCHXo1VHR0BRR8Ym-9xUAP3rnsLhJTh3Jp_uzr7RgsTWtUiHqoYzs6R6SUQpJr7QJb3uN831cLttUjRSxAfnFjf6p7TkKZNByP_yyJRfCP9XxTBBW?width=865&height=865&cropmode=none" 
                                class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-1">NMIT Student Blog</h5>
                                    <p class="card-text fs-5">During my time studying at NMIT, I operated a blog site built using WordPress to document my studies throughout my 4 year tenure.</p>
                                    <a href="https://patricksullivannmit.wordpress.com/" class="btn btn-outline-light fs-5" target="_blank">WordPress</a>
                                </div>
                            </div>
                        </div>                    
                    </div>
                    <h6 class="display-6 m-3 py-4 text-center" style={{color:"#eeebe4"}}>Like what you see? <Link class="redirect-home" to="/contact" target="_top">Let's get in contact.</Link></h6>
                </div>
            </div>
        </>
    )
}
