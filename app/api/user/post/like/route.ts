import prisma from "@/lib/db";
import { GetFeedSchema } from "@/zod/schema/getFeedSchema";
import { PostSchema } from "@/zod/schema/postSchema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request:NextRequest){

    /*ye change karna hai jab middleware banalo */
    try{
        
        return NextResponse.json({
            message:"post fetched successful",
            success:true
        })
        
        
    // }

    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }
}