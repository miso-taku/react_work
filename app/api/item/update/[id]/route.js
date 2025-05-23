import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModels";

export async function PUT(request, context){
  const reqBody = await request.json()

  try{
    await connectDB()
    await ItemModel.updateOne({_id: context.params.id}, reqBody)
    return NextResponse.json({message: "item update"})
  } catch {
    return NextResponse.json({message: "error"})
  }
}