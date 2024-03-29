import prisma from "@/lib/db";
import { PostSchema } from "@/zod/schema/postSchema";
import { PublishedStatus } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req:NextRequest){
    try{
        
        const authorId="2fb00e62-6754-48bc-9240-52476779bfa6";
        const {title,description,images,published}:z.infer<typeof PostSchema>=await req.json();
        console.log(req.body);
        
        const post =await prisma.post.create({
            data:{
                title,
                description:description?description:null,
                images:{set:images},
                published:published?published:PublishedStatus.PUBLIC,
                author:{
                    connect:{
                        id:authorId
                    }
                }
            }
        });
        console.log("enter");
        return NextResponse.json({message:"post uploaded successfully"});
        

    }
    catch(e){
        console.log(e);
        
        return NextResponse.json({error:e});
    }
}