import { Link, useParams } from "react-router-dom";
import "./singlePost.css";
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import Comments from "../categories/Comments";


export default function SinglePost(props) {
  console.log(props.currentUser)
  const { slug } = useParams();

  const [data, setData] = useState({
    posts: [],
  });

  useEffect(() => {
    axiosInstance.get('post/' + slug).then((res) => {
      setData({
        posts: res.data,
      });
      console.log(res.data);
    });
  }, [setData]);

  // EDITING

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={data.posts.image}
          alt=""
        />
        <h1 className="singlePostTitle">
          {data.posts.title}
          <div className="singlePostEdit">
            {props.currentUser === true && <> <Link to={'/admin/edit/' + data.posts.id} className="singlePostIcon far fa-edit" ></Link>
              <Link to={'/admin/delete/' + data.posts.id} className="singlePostIcon far fa-trash-alt"></Link>
            </>}
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {data.posts.author}
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          {data.posts.content}
        </p>
      </div>
      {props.currentUser === false ? <Link to={'/login'}><Comments /></Link> : <Comments />}
      
    </div>
  );
}