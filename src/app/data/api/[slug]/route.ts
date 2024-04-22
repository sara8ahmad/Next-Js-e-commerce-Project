import { NextResponse } from "next/server";

// request : Request helps me to acess the HTTP parameters/informations with out it the slug will be undefined.

export async function GET( request : Request, {params} : {params :  {slug : string } }){
     

    const res = await fetch(`https://fakestoreapi.com/products/${params.slug}`);
    const data = await res.json();
     
  /* const req = data.filter((item) => item.id.toString() === params?.slug )*/
    return NextResponse.json(data)
}