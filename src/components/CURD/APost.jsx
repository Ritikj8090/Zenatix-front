import { Container, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
const APosts = (props) => {
	const { posts } = props;
	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Paper >
					<TableContainer >
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									<TableCell>Id</TableCell>
									<TableCell align='left'>Author</TableCell>
									<TableCell align="left">Category</TableCell>
									<TableCell align="left">Title</TableCell>
									<TableCell align="left">Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{posts.map((post) => {
									return (
										<TableRow key={post.id}>
											<TableCell component="th" scope="row">
												{post.id}
											</TableCell>
											<TableCell component="th" scope="row">
												{post.author}
											</TableCell>
											<TableCell align="left">{post.category}</TableCell>
											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'/post/' + post.slug}

												>
													{post.title}
												</Link>
											</TableCell>

											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'/admin/edit/' + post.id}

												>
													edit
												</Link>
												<Link
													color="textPrimary"
													href={'/admin/delete/' + post.id}

												>
													delete
												</Link>
											</TableCell>
										</TableRow>
									);
								})}
								<TableRow>
									<TableCell colSpan={4} align="right">
										<NavLink
											to={'/admin/create'}
											variant="contained"
											color="primary"
										>
											New Post
										</NavLink>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Container>
		</React.Fragment>
	);
};
export default APosts;