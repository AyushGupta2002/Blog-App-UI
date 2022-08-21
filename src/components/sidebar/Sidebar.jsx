import { useEffect, useState } from "react";
import "./sidebar.css"
import {BASE_URL} from "../../constant/constants";
import axios from "axios";
import { Link } from "react-router-dom";

const api = axios.create({
  baseURL: BASE_URL
})

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=>
    {
       const res = await api.get("/category")
       setCats(res.data)
    }
    getCats()
  }, [])
  return (
    <div className="sidebar">

      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://avatars.githubusercontent.com/u/82500354?v=4"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarTitle">
            {cats.map((c)=>(
              <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
            
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
              <i className="sidebarIcon fa-brands fa-square-facebook"></i>
              <i className="sidebarIcon fa-brands fa-twitter"></i>
              <i className="sidebarIcon fa-brands fa-pinterest"></i>
              <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
        
    </div>
  )
}
