import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';
import $ from "jquery";
import Footer from '../footer/Footer';

export default function Contact() {
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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.USER_ID)
            .then((result) => {
                alert(result.text);

            }, (error) => {
                alert(error.text);
            });
        e.target.reset();
    };

    return (
        <>
            <div class="contact content maxheight">
                <Link to="/">
                    <h2 id="redirect-home" class="position-fixed redirect-home mt-4 me-3 top-0 end-0 user-select-none d-sm-none d-md-block d-none d-sm-block">patricksullivan</h2>
                </Link>
                <div class="row text-center align-items-center g-0 maxheight position-absolute">
                    <div class="col-1" />
                    <div class="col-5 header">
                        <h1 class="title m-3 user-select-none">Want to connect with me? Let's get in touch.</h1>
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

            <div class="content maxheight">
                <div class="row align-items-center g-0">
                    <div class="col header text-center">
                        <h1 class="display-1 m-3">Contact me.</h1>
                    </div>
                </div>
                <div class="row align-items-center g-0">
                    <div class="col-3" />
                    <div class="col-6 header">
                        <form onSubmit={sendEmail}>
                            <div class="row row-cols-1 row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-xs-12 row-cols-s-12">
                                <div class="col mb-3">
                                    <label for="formInputName" class="form-label">Name</label>
                                    <input id="formInputName" type="text" class="form-control form-control-lg" placeholder="Name" aria-label="Name" name="name" required />
                                </div>
                                <div class="col mb-3">
                                    <label for="formInputEmail" class="form-label">Email address</label>
                                    <input id="formInputEmail" type="email" class="form-control form-control-lg" placeholder="Email" aria-label="Email" name="email" required />
                                </div>
                            </div>
                            <div class="row row-cols-1">
                                <div class="col mb-3">
                                    <label for="formInputSubject" class="form-label">Subject</label>
                                    <input id="formInputSubject" type="text" class="form-control form-control-lg" placeholder="Subject" aria-label="Subject" name="subject" required />
                                </div>
                                <div class="col mb-3">
                                    <label for="formInputMessage" class="form-label">Message</label>
                                    <textarea id="formInputMessage" class="form-control form-control-lg" rows="3" placeholder="Message" aria-label="Message" name="message" required />
                                </div>
                            </div>
                            <div class="d-grid gap-2 mt-2">
                                <button type="submit" class="btn btn-outline-light btn-lg">Submit</button>
                            </div>
                        </form>
                        <div class="row row-cols-4 my-4">
                            <div id="col">
                                <a href="https://twitter.com/ThePJSIT" target="_blank" alt="Twitter">
                                    <svg class="svg-icon bi bi-twitter p-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781"></path>
                                    </svg></a>
                            </div>
                            <div id="col">
                                <a href="https://www.linkedin.com/in/patrick-sullivan-833370134/" target="_blank">
                                    <svg class="svg-icon bi bi-linkedin p-4" viewBox="0 0 54 54">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"></path>
                                    </svg></a>
                            </div>
                            <div id="col">
                                <a href="https://github.com/patrick-j-sulley" target="_blank">
                                    <svg class="svg-icon bi bi-github p-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z"></path>
                                    </svg></a>
                            </div>
                            <div id="col">
                                <a href="mailto:thepatrickjohnsullivan@gmail.com&amp;subject=General%20Inquiry">
                                    <svg class="svg-icon p-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M306.768,346.814h0.131c4.615,0,9.176-1.339,12.866-3.777l1.001-0.643c0.218-0.142,0.446-0.271,0.675-0.424l11.658-9.645   l278.259-229.624c-0.576-0.795-1.557-1.339-2.602-1.339H3.233c-0.751,0-1.448,0.272-2.003,0.729l291.125,239.954   C296.024,345.083,301.259,346.814,306.768,346.814z M0,133.899v340.37l208.55-168.471L0,133.899z M403.668,306.941L612,474.356   V135.031L403.668,306.941z M337.431,361.585c-8.305,6.814-19.168,10.57-30.576,10.57c-11.451,0-22.304-3.734-30.587-10.516   l-47.765-39.394L0,506.806v0.587c0,1.753,1.502,3.244,3.276,3.244h605.491c1.741,0,3.232-1.491,3.232-3.255v-0.544L383.693,323.4   L337.431,361.585z"></path>
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-3" />
                </div>
                <Footer />
            </div>
        </>
    )
}
