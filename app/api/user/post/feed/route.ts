import prisma from "@/lib/db";
import { GetFeedSchema } from "@/zod/schema/getFeedSchema";
import { PostSchema } from "@/zod/schema/postSchema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request:NextRequest){

    /*ye change karna hai jab middleware banalo */
    try{
        const userId=""
        const reqBody=GetFeedSchema.safeParse(await request.json());

        if(!reqBody.success){
            reqBody.error.issues;
        }
        else{
            const {postNo}=reqBody.data;

        const posts:z.infer<typeof PostSchema>[]=await prisma.post.findMany({
            where:{
                authorId:{
                    not:userId
                }
            },

            orderBy:{
                createdAt:"desc"
            },
            skip:postNo,
            take:20
        })
        const response=NextResponse.json({
            message:"Login successful",
            success:true,
            data:posts
        })
        return response;
    }

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}