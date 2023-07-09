import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import axiosInstance from '../../axios'
import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io";

export default function Login(props) {
 	const navigate = useNavigate();
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	})
	const [formData, setFormData] = useState(initialFormData);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
                props.setcurrentUser(true)
				navigate('/');
				console.log(res);
				console.log(res.data);
			});
	};
	return (
		<div className="login h-[100vh] flex justify-center items-center">
			<div className="flex items-center flex-col">
				<div className="text-center">
					<div className="text-4xl font-bold text-white">
						Login to Your Account
					</div>
					<div className="mt-3 text-yellow-50">
						Connect and chat with anyone, anywhere
					</div>
				</div>
				
				<form
                    className="flex flex-col items-center gap-3 w-[500px] mt-5"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                        className="w-full h-14 bg-white rounded-xl outline-none border-none px-5 text-c3"
                        
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        name="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                        className="w-full h-14 bg-white rounded-xl outline-none border-none px-5 text-c3"
                    />
                    <div className="text-right w-full text-zinc-300">
                        
                    </div>
                    <button 
                    className="text-white mt-4 w-full h-14 rounded-xl outline-none text-base font-semibold bg-gradient-to-r from-blue-600 via-blue-900 to-purple-800"
                    type="submit" 
                    onClick={handleSubmit}
                    >
                        Login to Your Account
                    </button>
                </form>
				<div className="flex justify-center gap-1 text-c3 mt-5">
                    <span>Not a member yet?</span>
                    <NavLink
                        to="/register"
                        className="font-semibold text-white underline underline-offset-2 cursor-pointer"
                    >
                        Register Now
                    </NavLink>
                </div>
			</div>
		</div>
	);
}