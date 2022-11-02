import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "./UserAuthContext";
import '../css/login.css'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
       
        e.preventDefault();
        setError("");
        try {
            localStorage.setItem("password",password)
           
             alert("LOGGED IN SUCCESSFULLY")
            
             navigate("/")

             
            
            await logIn(email, password);
           
            
           

        } catch (err) {
            setError(err.message);
        }
    };



    return (
        <>
        <div >

        
            <div className="login">
                <div style={{borderRadius:'25px', opacity: '0.9',width:"50%",marginLeft:'22%'}}  className="p-4 box">
                    <h2 className="mb-3">Login to Explore</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="primary" type="Submit">
                                Log In
                            </Button>
                        </div>
                    </Form>
                    <hr />

                </div>
                <div style={{borderRadius:'25px',opacity: '0.9',width:"50%",marginLeft:'22%'}} className="p-4 box mt-3 text-center">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </div>
            </div>
            </div>
        </>
    );
};

export default Login;
