import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

export default function Single(props) {
  return (
    <div className="single">
      <SinglePost currentUser={props.currentUser} setcurrentUser = {props.setcurrentUser}/>
      <Sidebar />
    </div>

  );
}