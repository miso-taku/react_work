import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModels";

export async function GET(request, context) {
  
  try {
    await connectDB()
    const singleitem = await ItemModel.findById(context.params.id);
    
    return NextResponse.json({message: "item read", singleitem: singleitem})
  } catch {
    return NextResponse.json({ message: "error" }, { status: 500 })
  }
}
