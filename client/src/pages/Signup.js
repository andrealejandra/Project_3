import React, { useRef, useState } from "react"
import { Link } from "react-router-dom";
import API from "../utils/API";
import { AUTH_SET_LOGGED_IN } from "../utils/actions";
import { useStoreContext } from '../utils/GlobalStore';
import { Box } from "rebass";

function Signup() {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const nicknameRef = useRef();
    const [, dispatch] = useStoreContext();

    const handleSignup = (event) => {
        event.preventDefault();
        const signupData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            nickname: nicknameRef.current.value
        };
        API.signup(signupData).then(response => {
            const { nickname, email } = response.data;
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                data: {
                    nickname, email
                }
            });
        }).catch(err => {
            setShowError(true);
            setErrorMessage("An error occurred while signing up");
        })
    }

    return <div>
        <Box
        sx = {{
            p: 4,
            color: 'tomato',
            bg: '#FFD6BA',
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
        }}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Sign Up Form</h2>
                    <form className="signup" onSubmit={handleSignup}>
                    <div className="form-group">
                            <label htmlFor="exampleInputNickname">Nickname</label>
                            <input type="nickname" className="form-control" placeholder="Nickname" ref={nicknameRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="Email" ref={emailRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Password" ref={passwordRef} />
                        </div>
                        <div style={{ "display": showError ? "block" : "none" }} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg">{errorMessage}</span>
                        </div>
                        <button type="submit" className="btn btn-default">Sign Up</button>
                    </form>
                    <br />
                    <p>Or log in <Link to="/login">here</Link></p>
                </div>
            </div>
        </div>
        </Box>
    </div>
}

export default Signup;