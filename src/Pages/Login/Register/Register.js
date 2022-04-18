import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Register.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.chcked;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
    // console.log(email, password);
  };
  if (loading || updating) {
    return <Loading></Loading>;
  }

  return (
    <div className="register-form">
      <h3 style={{ textAlign: "center" }}>Register please</h3>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="name" required />

        <input type="email" name="email" id="" placeholder="email" required />

        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />
        <input
          onClick={() => setAgree(!agree)}
          className="mt-2 me-2"
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept terms And Condition
        </label>
        {/* <label
          className={agree ? "text-primary" : "text-danger"}
          htmlFor="terms"
        >
          Accept terms And Condition
        </label> */}

        <input
          disabled={!agree}
          className="bg-primary text-white mt-2"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        Already have an Account?
        <Link to="/login" className="text-primary">
          Login
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
