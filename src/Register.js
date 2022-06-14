import './pages/css/login.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap/";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const payload = {
            username,
            email,
            password,
        }
        
        axios.post(
            process.env.REACT_APP_API_BASE_URL + 'api/auth/local/register',
            payload
        ).then((res) => {
            if (res.status == 200) {
                console.log("Successfully registered user!")
                navigate("/home")
            } else {
                console.log("Err while registering user!")
                alert("Try again!")
            }

        })
            .catch((err) => console.log(err))
    }

    return (
        <div class = "signin">
            <Container>
                <div className="container h-100">
                    <div className="row justify-content-sm-center h-100">
                        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            {/* <div className="text-center my-5">
                                <img src={logo} alt="logo" width="100" />
                            </div> */}
                            <div className="card shadow-lg">
                                <div className="card-body p-5">
                                    <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                                    <Form>
                                        <div className="mb-3"> <label className="mb-2 text-muted" htmlFor="name">Username</label>
                                            <input id="name" type="text" className="form-control" name="name" onChange={onChangeUsername} required />
                                        </div>

                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                                            <input id="email" type="email" className="form-control" name="email" onChange={onChangeEmail} required />
                                        </div>

                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="password">Password</label>
                                            <input id="password" type="password" className="form-control" name="password" onChange={onChangePassword} required />
                                        </div>

                                        <p className="form-text text-muted mb-3">
                                            I agree the terms and conditions to register.
                                        </p>
                                            <Button onClick={onSubmit} className="btn btn-primary ms-auto"> Register </Button>
                                    </Form>
                                </div>
                                <div className="card-footer py-3 border-0">
                                    <div className="text-center">
                                        Already have an account? <Link to="/login" className="text-dark">Login</Link>
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

export default Register;
