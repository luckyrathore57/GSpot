import prisma from "@/lib/db";
import { GetFeedSchema } from "@/zod/schema/getFeedSchema";
import { PostSchema } from "@/zod/schema/postSchema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request:NextRequest){

    /*ye change karna hai jab middleware banalo */
    try{
        
        const userId=""
        const postno=Number(request.nextUrl.searchParams.get("postno"))||0;

        const posts:z.infer<typeof PostSchema>[]=await prisma.post.findMany({
            where:{
                authorId:{
                    not:userId
                }
            },
            include:{
                author:true,
                likedBY:true
            },

            orderBy:{
                createdAt:"desc"
            },
            skip:postno,
            take:20
        })
        
        return NextResponse.json({
            message:"post fetched successful",
            success:true,
            data:posts
        })
        
        
    // }

    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }
}