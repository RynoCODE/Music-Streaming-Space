import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prismaClient } from "@/app/lib/db";


const CreateStreamSchema = z.object({
    creatorId : z.string(),
    url : z.string(),
});
export async function POST(req: NextRequest){
    try{
        const data = CreateStreamSchema.parse(await req.json());
        prismaClient.Stream.create({
            userId: data.creatorId,
            
        })


        return NextResponse.json({message: "Stream Added Successfully"});    
    }
    catch(e){
        return NextResponse.json({message: "Error While adding the Stream"}, {status: 400});
    }

}

