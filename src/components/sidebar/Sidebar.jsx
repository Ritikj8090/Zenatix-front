import { Link } from "react-router-dom";
import "./sidebar.css";
import axiosInstance from "../../axios";
import { useEffect, useState } from "react";

export default function Sidebar(props) {
    

  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src='data:image/jpeg;base64,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'
          alt=""
        />
        <p>
          
Traveling is a remarkable experience that allows individuals to explore new places, immerse themselves in different cultures, and create lifelong memories. Whether you're venturing to distant lands or discovering hidden gems closer to home, traveling offers a sense of adventure and personal growth. Here are some key aspects of traveling:
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}