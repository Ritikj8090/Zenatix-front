import "./register.css"
import React, { useState } from "react";
import axiosInstance from "../../axios";
import { NavLink, useNavigate } from "react-router-dom";
import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io";

export default function Register() {
  const navigate = useNavigate();

  const initialFormData = Object.freeze({
    email: "",
    username: "",
    password: "",
  });

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`user/create/`, {
        email: formData.email,
        user_name: formData.username,
        password: formData.password,
      })
      .then((res) => {
        navigate("/login");
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="register">
      <div>
        <div className="text-center">
          <div className="text-4xl font-bold text-slate-50">Create New Account</div>
          <div className="mt-3 text-c3">
            Connect and chat with anyone, anywhere
          </div>
        </div>
        
        <form className="flex flex-col items-center gap-3 w-[500px] mt-5">
          <input
            type="text"
            id="username"
            placeholder="username"
            name="username"
            autoComplete="username"
            onChange={handleChange}
            className="w-full h-14 bg-c5 rounded-xl outline-none boarder-none px-5 text-c3"
          />
          <input
            type="text"
            id="email"
            placeholder="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            className="w-full h-14 bg-c5 rounded-xl outline-none boarder-none px-5 text-c3"
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            name="password"
            autoComplete="current-password"
            onChange={handleChange}
            className="w-full h-14 bg-c5 rounded-xl outline-none boarder-none px-5 text-c3"
          />
          <button
            className="text-white mt-4 w-full h-14 rounded-xl outline-none text-base font-semibold bg-gradient-to-r from-blue-600 via-blue-900 to-purple-800"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-center gap-1 text-c3 mt-5">
          <span>Already have an Account?</span>
          <NavLink
            to="/login"
            className="font-semibold text-white underline underline-offset-2 cursor-pointer"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  )
}