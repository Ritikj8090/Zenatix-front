import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';

const Edit = () => {
    const navigate = useNavigate();
	const { id } = useParams();
	const initialFormData = Object.freeze({
		id: '',
		title: '',
		slug: '',
		excerpt: '',
		content: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	useEffect(() => {
		axiosInstance.get('admin/edit/postdetail/' + id).then((res) => {
			updateFormData({
				...formData,
				['title']: res.data.title,
				['excerpt']: res.data.excerpt,
				['slug']: res.data.slug,
				['content']: res.data.content,
			});
			console.log(res.data);
		});
	}, [updateFormData]);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance.put(`admin/edit/` + id + '/', {
			title: formData.title,
			slug: formData.slug,
			author: 1,
			excerpt: formData.excerpt,
			content: formData.content,
		});
		navigate({
			pathname: '/post/' + formData.slug,
		});
		window.location.reload();
	};
  return (
    <Container component="main" maxWidth="sm">
			<CssBaseline />
			<div >
				<Typography component="h1" variant="h5" sx={{marginBottom:2,marginTop:2}} >
					Edit Post
				</Typography>
				<form  noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="title"
								label="Post Title"
								name="title"
								autoComplete="title"
								value={formData.title}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="excerpt"
								label="Post Excerpt"
								name="excerpt"
								autoComplete="excerpt"
								value={formData.excerpt}
								onChange={handleChange}
								multiline
								rows={8}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="slug"
								label="slug"
								name="slug"
								autoComplete="slug"
								value={formData.slug}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="content"
								label="content"
								name="content"
								autoComplete="content"
								value={formData.content}
								onChange={handleChange}
								multiline
								rows={8}
							/>
						</Grid>
					</Grid>
					<button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className="mt-2 text-white font-semibold bg-gradient-to-r from-blue-600 via-blue-900 to-purple-800 w-1/2 h-14 rounded-md cursor-pointer p-[1px]"
						onClick={handleSubmit}
					>
						Update Post
					</button>
				</form>
			</div>
		</Container>
  )
}
export default Edit