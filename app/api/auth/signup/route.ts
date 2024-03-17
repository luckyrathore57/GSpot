import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { SingupSchema } from "@/zod/schema/authenticationSchema";


export async function POST(request:NextRequest){
    try {
        const reqBody=SingupSchema.safeParse(await request.json());
        if(!reqBody.success){
            reqBody.error.issues;
        }
        else{
            const {username,password,email,collegeName}=reqBody.data;
            const user=await prisma.user.findFirst({
                where:{
                    username:username,
                }
            });
            if(user){
                return NextResponse.json({error:"user already found"},{status:400});
                console.log("user exist");
            }

            const salt=await bcryptjs.genSalt(10);
            const hashedPassword=await bcryptjs.hash(password,salt);
            const college=await prisma.college.findUnique({
                where:{
                    collegeName:collegeName
                }
            });

            const newUser=await prisma.user.create({
                data:{
                    username:username,
                    password:hashedPassword,
                    email:email,
                    collegeId:college!.id
                }
            });

            return NextResponse.json({
                message:"user created successfully",
                success:true,
                newUser
            })

        }
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}
