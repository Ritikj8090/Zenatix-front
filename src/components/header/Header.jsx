import "./header.css";
import logo from './canada_3081.jpg'
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src={logo}
        alt=""
      />
    </div>
  );
}