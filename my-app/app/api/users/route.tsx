import { error } from "console";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(response:NextRequest){

    return NextResponse.json([
        { id:1,name:"sangam"},
        { id:2,name:"pavan"},
        { id:3,name:"soni"},
    ])
}


// export async function POST(request:NextRequest){

//     const body = await request.json()

    
//     if(!body.name){
//         return NextResponse.json({error:'Name is Required'},{status:400});
//     }

//     return NextResponse.json({
//         id:1,
//         name:body.name
//     },{status:201})

// }



export async function POST(request:NextRequest){

    const body = await request.json()

    const validation = schema.safeParse(body);

    if (!validation.success) {
    return NextResponse.json(validation.error, { status: 400 });
    }

    return NextResponse.json({
        id:1,
        name:body.name
    },{status:201})

}

