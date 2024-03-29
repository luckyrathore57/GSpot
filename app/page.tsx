"use client";

import SideBar from "@/components/home/sidebar";
import Gspot from "@/components/ui/gspot";
import PostCard from "@/components/ui/postCard";
import { PostSchema } from "@/zod/schema/postSchema";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";



export default function Home() {
  const [postNo,setPostNo]=useState<number>(0);
  const [posts,setPost]=useState<z.infer<typeof PostSchema>[]>([]);
  const router=useRouter();
  useEffect(()=>{
    axios.get('/api/user/post/feed',{params:{postno:postNo}})
    .then((data)=>{
      console.log(data);
      
      const newPost=data.data.data;      
      setPost((post)=>([...post,...newPost]));
    })
    
  },[postNo])

  return (
    <div className="grid grid-cols-12 h-screen">

      <div className="xl:col-span-2 lg:col-span-3 col-span-2">
        <SideBar 
        onHome={()=>{router.push("/")}} 
        onSearch={()=>{router.push("/people")}} 
        onFriends={()=>{router.push("/friendrequest")}} 
        onNotification={()=>{router.push("/notification")}} 
        onProfile={()=>{router.push(`/profile`)}} 
        onPost={()=>{router.push("/post")}} 
        />
      </div>
      <div className="xl:col-span-8 lg:col-span-6 col-span-10">
        {posts.map((post,i)=>(
          <div key={i}>
          <PostCard title={post.title} description={post.description?post.description:undefined} authorUsername={post.author?.username||""} images={post.images}/>
          </div>
        ))}
          

      </div>
      <div>

      </div>
      
    </div>
  );
}
