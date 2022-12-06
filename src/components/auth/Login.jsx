import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from "./_auth.module.css";
import { auth } from './../../apis/firebase';
import {  useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate()
  let [state, setState] = useState({
    email: "",
    password: "",
  });
  let { email, password } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({...state,[name]:value})
  };
  let handleSubmit =async (e) => {
    e.preventDefault();
    console.log(state);
    try {
      let userData = await signInWithEmailAndPassword(auth, email, password)
      if (userData.user.emailVerified === true) {
        navigate("/")
        toast.success(`successfully ${email} logged in`)
      } else {
        toast.error(`email not verified`)
      }
    } catch (error) {
      toast.error(error.code)
    }
  };
  return (
    <section id={styles.login}>
      <article>
        <div className={styles.container}>
          <img src="https://s3.rdbuz.com/Images/webplatform/contextualLogin/desktop-payment-offers.svg" />
          <form onSubmit={handleSubmit}>
            <div className={styles.formDiv2}>
              <div>
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button>Login</button>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.form}>
          <div>
            <img
              src="https://i.pinimg.com/736x/fe/db/15/fedb15f5569540fcdf58e1fa2bb80ef0.jpg"
              alt=""
            />
          </div>
          <div>
            <h1>
              Sign in to avail exciting <br /> discounts and cashbacks!!
            </h1>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Login;
