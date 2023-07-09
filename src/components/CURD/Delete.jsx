import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Container } from '@mui/material';


export default function Delete() {
	const history = useNavigate();
	const { id } = useParams();

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.delete('admin/delete/' + id)
			.catch(function (error) {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				}
			})
			.then(function () {
					history('/',
					);
					window.location.reload();
			});
	};

	return (
		<Container component="main" maxWidth="sm">
			<Box
				display="flex"
				justifyContent="center"
				m={1}
				p={1}
				bgcolor="background.paper"
			>
				<button
					variant="contained"
					className="text-white mt-4 w-full h-14 rounded-xl outline-none text-base font-semibold bg-red-700"
					type="submit"
					onClick={handleSubmit}
				>
					Press here to confirm delete
				</button>
			</Box>
		</Container>
	);
}