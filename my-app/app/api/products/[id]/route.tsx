import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

let products = [
  { id: 1, name: "Milk", price: 2.5 },
  { id: 2, name: "Bread", price: 3.5 },
];

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id); 
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation, { status: 400 });
  }

  const product = products.find(p => p.id === id);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // Update product
  product.name = body.name;
  product.price = body.price;

  return NextResponse.json({
    id: product.id,
    name: product.name,
    price: product.price,
  });
}

export async function DELETE(request:NextRequest,{params}:{params:{id:number}}) {


if(params.id>10){
    return NextResponse.json({error:'Product Not Found'},{status:404});

  }

  return NextResponse.json({});





    
}