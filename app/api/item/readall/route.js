import { NextResponse } from "next/server";
import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";

export async function GET() {
  try {
    await connectDB()
    const allitems = await ItemModel.find()
    return NextResponse.json({message: "all items read", allitems: allitems})
  } catch {
    return NextResponse.json({ message: "error" }, { status: 500 })
  }
}