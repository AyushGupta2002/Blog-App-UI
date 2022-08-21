
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import React from './home.css'
import axios from "axios"
import {BASE_URL} from "../../constant/constants";
import { useLocation } from 'react-router-dom';

const api = axios.create({
  baseURL: BASE_URL
})

export default function Home() {

  const [posts, setPosts] = useState([]);
  const {search} = useLocation();


  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await api.get("/post"+search);
      setPosts(res.data)
    }
    fetchPosts()
  },[search]);


  return (
    <>
      <Header/>
      <div className='home'>
        <Posts posts={posts}/>
        <Sidebar/>
      </div>
    </>
    
  )
}
