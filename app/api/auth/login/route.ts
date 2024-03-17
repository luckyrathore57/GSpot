import prisma from "@/lib/db";
import { LoginSchema } from "@/zod/schema/authenticationSchema";
import { NextRequest ,NextResponse} from "next/server";
import { z } from "zod";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"



export async function POST(request:NextRequest){
    try {
        const reqBody=LoginSchema.safeParse(await request.json());
        if(!reqBody.success){
            reqBody.error.issues;
        }
        else{
            const {username,password}=reqBody.data;
            const user=await prisma.user.findFirst({
                where:{
                    username:username,
                }
            });
            if(!user){
                return NextResponse.json({error:"user not found"},{status:400});
            }
            // console.log("user exist");

            const validPassword=await bcryptjs.compare(password,user.password);

            if(!validPassword){
                return NextResponse.json({error: "Invalid password"}, {status: 400})
            }

            // console.log(user);

            const tokenData={
                id:user.id,
                username:user.username,
                email:user.email,
                user

            }

            const token=await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"});

            const response=NextResponse.json({
                message:"Login successful",
                success:true,
            })
            response.cookies.set("token",token,{
                httpOnly:true,
            })

            return response;   
        }
        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}