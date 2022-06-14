import { Button, Form, Container } from "react-bootstrap/";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './pages/css/login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const payload = {
            identifier: email,
            password
        }

        axios.post(
            process.env.REACT_APP_API_BASE_URL + 'api/auth/local/', payload
        ).then((res) => {
            if (res.status == 200) {
                console.log("Login Successful!")
                navigate("/home")
            } else {
                alert("Login Unsuccessful")
                console.log("Error Logging in")  
            }
        })
            .catch((err) => console.log(err))

    }

    return (
        <div class = "signin">
            <Container>
                <div className="contaner h-100">
                    <div className="row justify-content-sm-center h-100">
                        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            <div className="card shadow-lg">
                                <div className="card-body p-5">
                                    <h1 className="fs-4 card-title fw-bold mb-4">Sign-in</h1>
                                    <Form>
                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="email">E-mail</label>
                                            <input id="email" type="email" className="form-control" name="email" onChange={onChangeEmail} required />
                                        </div>

                                        <div className="mb-3">
                                            <div className="mb-2 w-100">
                                                <label className="text-muted" htmlFor="password">Password</label>
                                            </div>
                                            <input id="password" type="password" className="form-control" name="password" onChange={onChangePassword} required />
                                        </div>
                                            <Button onClick={onSubmit} className="btn btn-primary ms-auto">
                                                Sign In
                                            </Button>
                                    </Form>
                                </div>
                                <div className="card-footer py-3 border-0">
                                    <div className="text-center">
                                        New Here? <Link to="/register" className="text-dark">Sign Up!</Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Login;
