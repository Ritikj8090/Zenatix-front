import { Link } from "react-router-dom";
import "./post.css";

export default function Post(props) {
  const { posts } = props;
  if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
  return (
    <>
      {posts.map((post) => {
        return (
          <Link key={post.id} className="post" to={'post/' + post.slug}>
            <img
              className="postImg"
              src={post.image}
              alt=""
            />
            <div className="postInfo">
              <div className="postCats">
                <span className="postCat">
                  <span >
                    {post.category}
                  </span>
                </span>
              </div>
              <span className="postTitle">
                <div>
                  {post.title}
                </div>
              </span>
              <hr />
              <span className="postDate">12 hour ago</span>
            </div>
            <p className="postDesc">
              {post.content}
            </p>
          </Link>
        )
      })}
    </>

  );
}

/*
{posts.map((post) => {
        return (
          <div className="post">
            <img
              className="postImg"
              src='{img}'
              alt=""
            />
            <div className="postInfo">
              <div className="postCats">
                <span className="postCat">
                  <Link className="link" to="/posts?cat=Music">
                    Music
                  </Link>
                </span>
                <span className="postCat">
                  <Link className="link" to="/posts?cat=Music">
                    Life
                  </Link>
                </span>
              </div>
              <span className="postTitle">
                <Link to="/post/abc" className="link">
                  Lorem ipsum dolor sit amet{post.title}
                </Link>
              </span>
              <hr />
              <span className="postDate">12 hour ago</span>
            </div>
            <p className="postDesc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
              officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
              fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
              atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
          </div>
        )
      })}
*/