import prisma from "@/lib/db";
import { NextRequest ,NextResponse} from "next/server";
import { z } from "zod";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"



export async function GET(request:NextRequest){
    try {

            const collegeOption=await prisma.college.findMany({
               select:{
                collegeName:true
               }
            });
            if(!collegeOption){
                return NextResponse.json({data:[]},{status:400});
            }
            console.log("college exist");

            return NextResponse.json({data:collegeOption},{status:200});   
        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

export async function POST(request:NextRequest){

    const reqBody=await request.json();
    const {collegeName}=reqBody; 
    try {

        const college=await prisma.college.create({
            data:{
                collegeName:collegeName
            }
        });

        return NextResponse.json({data:college},{status:200});   
    
} catch (error:any) {
    return NextResponse.json({error: error.message}, {status: 500})
}
}