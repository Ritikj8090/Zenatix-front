import Post from "../post/Post";
import "./posts.css";
import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import axiosInstance from "../../axios";

export default function Posts() {
  const PostLoading = Loading(Post);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);
  
  return (
    <div className="posts">
      <PostLoading isLoading={appState.loading} posts={appState.posts}/>
    </div>
  );
}