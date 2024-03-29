"use client"

import { SignupCard } from "@/components/auth/SignupCard";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";
import {SignupSchema} from "@/zod/schema/authenticationSchema"



export default function Page(){

    const [loading,setLoading]=useState(false);
    const [collegeOption,setCollegeOption]=useState<string[]>([]);
    const router=useRouter();

    const onClickSignup=async ({username,password,email,collegeName}:z.infer<typeof SignupSchema>)=>{

        try {
            setLoading(true);
            console.log({username,password,email,collegeName});
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