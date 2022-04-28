import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  // login hook:
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // password reset hooK:
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  let errorElement;

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const navigate = useNavigate();
  const location = useLocation();
  let form = location.state?.from?.pathname || "/";
  if (user) {
    // navigate(form, { replace: true });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    localStorage.setItem("accessToken", data.accessToken);
    navigate(form, { replace: true });
  };

  const navigateToRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("enter your email address");
    }
  };
  if (loading || sending) {
    return <Loading></Loading>;
  }

  return (
    <div className="container w-50 mx-auto border border-secondary p-5 mt-5 rounded">
      <h3 className="text-primary text-center mt-2">Please log in</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary d-block w-50 mx-auto mb-2" type="submit">
          LogIn
        </Button>
      </Form>
      {errorElement}
      <p>
        New to This Page?
        <button
          onClick={navigateToRegister}
          className="text-danger btn btn-link"
        >
          {" "}
          Please Register
        </button>
      </p>
      <p>
        Forget Password?
        <button className="text-primary btn btn-link" onClick={resetPassword}>
          Reset Password
        </button>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;
