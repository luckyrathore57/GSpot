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
    axios.get('/api/user/post/feed',{postNo})
    setPost((post)=>(post.concat(newPost)));
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
          <PostCard title="india" description="india is my country" authorUsername="laks57" authorProfilePhoto="https://avatars.githubusercontent.com/u/11613311?v=4" images={["https://avatars.githubusercontent.com/u/11613311?v=4","https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F8cbbd391-ac04-4427-8a19-1bfc68fba8e8%2FD27qoI0JTz-VN8mh6L8fgw.png?table=block&id=a8af0593-7683-4afc-925d-0d92e052f153&cache=v2"]}/>

      </div>
      <div>

      </div>
      
    </div>
  );
}
