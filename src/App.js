import Admin from "./components/CURD/Admin";
import Create from "./components/CURD/Create";
import Delete from "./components/CURD/Delete";
import Edit from "./components/CURD/Edit";
import Topbar from "./components/topbar/Topbar";
import Logout from "./pages/Logout";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import APosts from "./components/CURD/APost";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [ currentUser, setcurrentUser ] = useState(false);
  return (
    <Router>
      <Topbar currentUser={currentUser} setcurrentUser = {setcurrentUser}/>
      <Routes>
        <Route path="/" element={<Homepage currentUser={currentUser} setcurrentUser = {setcurrentUser} />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={currentUser ? <Homepage /> : <Register />} />
        <Route path="/login" element={currentUser ? <Homepage /> : <Login currentUser={currentUser} setcurrentUser = {setcurrentUser}/>} />
        <Route path="/post/:slug" element={<Single currentUser={currentUser} setcurrentUser = {setcurrentUser}/>} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
        <Route path="/logout/" element={<Logout currentUser={currentUser} setcurrentUser = {setcurrentUser}/>} />
        <Route path="admin/" element={<Admin />} />
        <Route path="admin/edit/:id/" element={<Edit currentUser={currentUser} setcurrentUser = {setcurrentUser}/>} />
        <Route path="admin/create/" element={<Create currentUser={currentUser} setcurrentUser = {setcurrentUser}/>} />
        <Route path="admin/delete/:id/" element={<Delete currentUser={currentUser} setcurrentUser = {setcurrentUser}/>} />
        <Route path="a/" element={<APosts />} />
        <Route path="/search" element={<Search />} />

      </Routes>
    </Router>
  );
}

export default App;
