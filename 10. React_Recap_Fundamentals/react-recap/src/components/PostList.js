import React from 'react'
import { useState,useEffect } from 'react'
export default function PostList() {
    
    const [posts,setposts] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/posts"
    useEffect(()=>{
        fetch(url)
        .then(resposnse => resposnse.json())
        .then((data)=>setposts(data))
        .catch((err)=>{
            console.log(err)
        })
    },[])


  return (
    <div>
      <ol>{
        posts.map(post=>{
            return <li key={post.id}> {post.title}</li>
        })
        }</ol>
    </div>
  )
}
