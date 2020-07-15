import React from 'react';
import "./Authentication.css";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillTwitterSquare, AiFillGoogleSquare, AiFillLinkedin } from "react-icons/ai";
import signin from "../Image/signin.svg";
import signup from "../Image/signup.svg";

export default function Authentication() {

    function changeside1() {
        // const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

        // sign_in_btn.addEventListener("click", () => {
        //     container.classList.remove("sign-up-mode");
        // });


    }
    function changeside2() {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        // const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        // sign_up_btn.addEventListener("click", () => {
        //     container.classList.add("sign-up-mode");
        // });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });

    }
    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <div className="form sign-in-form">
                        <h2 className="title">Sign In</h2>
                        <div className="input-field">
                            <i className="material-icons">person</i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="material-icons">lock</i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" className="btn solid" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <Link to="#" className="social-icon">
                                <AiFillFacebook color="blue" size="35px" />
                            </Link>
                            <Link to="#" className="social-icon">
                                <AiFillTwitterSquare color="blue" size="35px" />
                            </Link>
                            <Link to="#" className="social-icon">
                                <AiFillGoogleSquare color="blue" size="35px" />
                            </Link>
                            <Link to="#" className="social-icon">
                                <AiFillLinkedin color="blue" size="35px" />
                            </Link>
                        </div>
                    </div>
                    <div className="form sign-up-form">
                        <h2 className="title">Sign Up</h2>
                        <div className="input-field">
                            <i className="material-icons">person</i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="material-icons">markunread</i>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="material-icons">lock</i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Sign Up" className="btn solid" />
                        <p className="social-text">Or Sign Up with social platforms</p>
                        <div className="social-media">
                            <Link to="#" className="social-icon">
                                <AiFillFacebook color="blue" size="35px" />
                            </Link>
                            <Link to="#" className="social-icon">
                                <AiFillTwitterSquare color="blue" size="35px" />
                            </Link>
                            <Link to="#" className="social-icon">
                                <AiFillGoogleSquare color="blue" size="35px" />
                            </Link>
                            <Link to="#" className="social-icon">
                                <AiFillLinkedin color="blue" size="35px" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
              </p>
                        <button className="btn transparent" id="sign-up-btn" onClick={changeside1}>
                            Sign up
              </button>
                    </div>
                    <img src={signup} className="image" alt="" />

                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
              </p>
                        <button className="btn transparent" id="sign-in-btn" onClick={changeside2} >
                            Sign in
              </button>
                    </div>
                    <img src={signin} className="image" alt="" />
                </div>
            </div>
        </div>
    )

}
