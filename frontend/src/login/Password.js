import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";
import { Toaster } from "react-hot-toast";

const Password = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log("values", values);
    },
  });

  return (
    <div className="container justify-center items-center mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        {/*  justify-center items-center */}
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h6 className="text-5xl font-bold">Hello! Vikash :)</h6>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Do You want to Learn More!
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img className={styles.profile_img} src={avatar} alt="avtar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps('password')}
                className={styles.textbox}
                type="text"
                placeholder="Password"
              />
              <button className={styles.btn} type="submit">
                {" "}
                Let's Go!
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member!
                <Link className="text-red-500" to="/recovery">
                  Recover Password .?
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
