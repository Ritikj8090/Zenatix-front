import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";
import { useState } from "react";

export default function Topbar(props) {
  const user = true;

  let navigate = useNavigate();
  const [data, setData] = useState({ search: '' });

  const goSearch = (e) => {
    navigate({
      pathname: '/search/',
      search: '?search=' + data.search,
    });
    window.location.reload();
  };

  return (
    <div className="top">
      <div className="topLeft">
        <Link to={'https://www.facebook.com'} className="topIcon fab fa-facebook-square"></Link>
        <Link to={'https://github.com/Ritikj8090'} className="topIcon fab fa-instagram-square"></Link>
        <Link to={'https://github.com/Ritikj8090'} className="topIcon fab fa-github-square"></Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          {props.currentUser === true && <> <li className="topListItem ">
            <Link to={'/admin/create'} className="link">
              WRITE
            </Link>
          </li>
            <Link to={"./logout"}>{user && <li className="topListItem">LOGOUT</li>}</Link>
          </>
          }

          {props.currentUser === false &&<li className="topListItem ">
            <Link to={'/login'} className="link">
              LOGIN
            </Link>
          </li>
}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
             
          
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <input
          className="rounded-xl border-r-amber-950 px-2"
          type="text"
          placeholder="  Search..."
          value={data.search}
          onChange={(newvalue) => setData({ search: newvalue.target.value })}
        />
        <i onClick={() => goSearch(data.search)} className="ml-1 topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}