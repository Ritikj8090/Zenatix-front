import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';
import { Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
//MaterialUI

export default function Create() {

	const history = useNavigate();

	const [title, settitle] = useState(null);
	const [postimage, setPostImage] = useState(null);
	const [slug, setslug] = useState(null);
	const [content, setcontent] = useState(null);
	const [excerpt, setexcerpt] = useState(null);


	const handleSubmit = async (e) => {
		let formField = new FormData()
        formField.append('title',title)
        formField.append('slug',slug)
        formField.append('content',content)
        formField.append('excerpt',excerpt)

        if(postimage !== null) {
          formField.append('image', postimage)
        }

        await axios({
			method: 'post',
			url:'http://localhost:8000/admin/create/',
			data: formField
		  }).then(response=>{
			console.log(response.data);
			history('/')
		  })
		window.location.reload();
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div >
		
				<Typography component="h1" variant="h5">
					Create New Post
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
								
								value={title}
								onChange={(e) => settitle(e.target.value)}
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
								value={excerpt}
								onChange={(e) => setexcerpt(e.target.value)}
								multiline
								rows={4}
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
								value={slug}
								onChange={(e) => setslug(e.target.value)}
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
								value={content}
								onChange={(e) => setcontent(e.target.value)}
								multiline
								rows={4}
							/>
						</Grid>
						<input
							accept="image/*"
							
							id="post-image"
							onChange={(e) => setPostImage(e.target.files[0])}
							name="image"
							type="file"
						/>
					</Grid>
					<button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						
						onClick={handleSubmit}
					>
						Create Post
					</button>
				</form>
			</div>
		</Container>
	);
}