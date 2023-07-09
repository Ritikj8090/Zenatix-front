import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { Card, CardContent, CardMedia, Container, Grid, Link, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';



const Search = () => {
	const search = 'search';
	const [appState, setAppState] = useState({
		search: '',
		posts: [],
	});

	useEffect(() => {
		axiosInstance.get(search + '/' + window.location.search).then((res) => {
			const allPosts = res.data;
			setAppState({ posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);

    if (!appState.posts || appState.posts.length === 0) return <p>Can not find any posts, sorry</p>;

	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{appState.posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={post.id} xs={12} md={4}>
								<Card >
                                    <NavLink to={'/post/' + post.slug}>
									<CardContent>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
											
										>
											{post.title.substr(0, 50)}...
										</Typography>
										<div >
											<Typography color="textSecondary">
												{post.excerpt.substr(0, 40)}...
											</Typography>
										</div>
									</CardContent>
                                    </NavLink>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Search;