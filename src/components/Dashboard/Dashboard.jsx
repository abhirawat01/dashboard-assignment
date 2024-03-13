import "../../App.css";
import { useEffect } from "react";
import Content from "../Content/Content"
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('auth')){
      navigate('/');
  }
  },[])

  

  return (
    <>
      <div className="app">
        <Sidebar/>
        <Content/>
      </div>
    </>
  )
}

export default Dashboard;