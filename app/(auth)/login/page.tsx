"use client"

import { LoginCard } from "@/components/auth/LoginCard"
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios"

export default function Page(){
    const [loading,setLoading]=useState(false);
    const router=useRouter();

    const onClickLogin=async (username:string,password:string)=>{
        //login logic to be written
        try {

            setLoading(true)
            const response=await axios.post(`/api/auth/login`,{username,password});
            console.log("login success",response.data);
            router.push("/");
            
        } catch (error:any) {
            console.log("login faild",error.message)
        } finally{
            setLoading(false);
        }
    }
    const onClickBack=()=>{
        router.back();
    }
    const redirectSignup=()=>{
        router.push("/signup");
    }

    
    return (
    <>
        <div className="grid lg:grid-cols-5 grid-cols-2 justify-center items-center h-screen bg-background">
            <div className=" col-span-3 hidden lg:block">

            </div>
            <div className={`col-span-2 grid justify-center items-center ${loading?'pointer-events-none' : ''}`} >
                <LoginCard onClickBack={onClickBack} onClickLogin={onClickLogin} redirectSignup={redirectSignup}/>
            </div>
        </div>  
    </>
)}