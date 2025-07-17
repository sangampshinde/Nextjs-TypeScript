import { NextRequest, NextResponse } from "next/server";

export function GET(response:NextRequest){

    return NextResponse.json([
        { id:1,name:"sangam"},
        { id:2,name:"pavan"},
        { id:3,name:"soni"},
    ])


}