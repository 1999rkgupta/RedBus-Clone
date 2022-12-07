import React, { useState, useEffect, Fragment } from "react";
import styles from "./_auth.module.css";
import { Button } from "@mui/material/Button";
import { toast } from "react-toastify";
import { auth } from "../../apis/firebase";
import { updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import md5 from "md5";
const Register = () => {
  let navigate = useNavigate();
  let [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let { username, email, password, confirmPassword } = form;
  let handleChange = e => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  let handleSubmit = async e => {
    console.log(form);
    try {
      e.preventDefault();
      if (password !== confirmPassword) {
        toast.error(" password  not matching");
      } else {
        let userData = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setForm(userData);
        sendEmailVerification(userData.user);
        let message = `Email verification mail has sent to ${email} address please verify...`;

        updateProfile(userData.user, {
          displayName: username,
          photoURL: `https://www.gravatar.com/avatar/${md5(email)}?q=identicon`,
        });
        toast.success(message);
        navigate("/login");
        // console.log(state);
      }
    } catch (error) {
      toast.error(error.code);
    }
  };
  let fetchdata = async () => {
    let data = await window.fetch("https://restcountries.com/v3.1/all");
    // let finaldata = await data.json();
    // console.log(finaldata);
    // setState(finaldata);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <section id={styles.register}>
      <article>
        <div className={styles.container}>
          <div className={styles.img}>
            <img src="https://s3.rdbuz.com/Images/webplatform/contextualLogin/desktop-payment-offers.svg" />
          </div>
          <div className={styles.form}>
            <div>
              {" "}
              <img
                src="https://i.pinimg.com/736x/fe/db/15/fedb15f5569540fcdf58e1fa2bb80ef0.jpg"
                alt=""
              />
            </div>
            <div>
              <h1>Register and Avail Offers</h1>
            </div>

            {/* <div className={styles.formDiv}>
              <select name="" id="" className={styles.drop}>
                {state.map((val, i) => {
                  // console.log(i);
                  return (
                    <Fragment>
                      <option>
                        <span>+{i + 1}</span> {val.name.common}
                      </option>
                    </Fragment>
                  );
                })}
              </select>
              <input
                type="tel"
                className={styles.tel}
                placeholder="Enter your phone number"
              />
            </div> */}

            <form onSubmit={handleSubmit}>
              <div className={styles.formDiv2}>
                <div>
                  {/* <label htmlFor="name">UserName</label> */}
                  <input
                    type="text"
                    placeholder="Enter username"
                    id="name"
                    name="username"
                    value={username}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  {/* <label htmlFor="email">Email</label> */}
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email address"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  {/* <label htmlFor="psw">Password</label> */}
                  <input
                    type="password"
                    id="psw"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  {/* <label htmlFor="cpsw">confirmPassword</label> */}
                  <input
                    type="password"
                    id="cpsw"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button>Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Register;
