import React, { useEffect } from 'react';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';

const Logout = (props) => {
    const navigate = useNavigate();
	props.setcurrentUser(false)
    useEffect(() => {
		const response = axiosInstance.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		console.log(response)
		navigate('/login');
	});
  return (
    <div>Logout</div>
  )
}
export default Logout;