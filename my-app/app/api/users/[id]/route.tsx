import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch Data from DB
  // if data not found 404 error
  // if found return data

  if (params.id > 10)
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "peter" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Validate the Request Body
  // if Invalid Return 404
  // Fetch User With id
  // if doesn't exist return 404
  // update User
  // Return Updated user

  const body = await request.json();
  const validation = schema.safeParse(body);

 if (!validation.success) {
  return NextResponse.json(
    {
      validation,
      error: validation.error
    },
    { status: 400 }
  );
}

  if (!body.name)
    return NextResponse.json({ error: "Name is Required" }, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });

  return NextResponse.json({
    id: 1,
    name: body.name,
  });
}


export function DELETE(request: NextRequest, { params }: { params: { id: number } })
{

  // FETCH USER FROM DTABASE
  // IF NOT FOUND THROEW 404
  // FOUND DELETE USER
  // RETURN 200 RESPONSE

  if(params.id>10){
    return NextResponse.json({error:'User Not Found'},{status:404});

  }

  return NextResponse.json({});




}
