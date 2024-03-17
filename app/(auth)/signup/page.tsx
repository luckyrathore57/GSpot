"use client"

import { SignupCard } from "@/components/auth/SignupCard";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page(){

    const [loading,setLoading]=useState(false);
    const [collegeOption,setCollegeOption]=useState<string[]>([]);
    const router=useRouter();

    const onClickSignup=async (username:string,password:string,email:string,collegeName:string)=>{

        try {
            setLoading(true);
            const response = await axios.post("/api/auth/signup", {username,password,email,collegeName});
            // console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);

        }finally {
            setLoading(false);
        }

    }
    const onClickBack=()=>{
        router.back();
    }
    const redirectLogin=()=>{
        router.push("/login");
    }


    useEffect(()=>{
        axios.get(`/api/college`).then((data)=>{
            setCollegeOption(data.data.data.map((college:{collegeName:string})=>(college.collegeName)));
            
        })
    }
    ,[])


    return (
        <>
        <div className="flex flex-col justify-center items-center h-screen">
            <SignupCard onClickBack={onClickBack} onClickSignup={onClickSignup} redirectLogin={redirectLogin} collegeOptions={collegeOption}/>
        </div>
        </>
    )
}