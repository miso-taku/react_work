import { NextResponse } from "next/server";
import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";

export async function POST(request) {
  const reqBody = await request.json();
  try {
    await connectDB();
    await ItemModel.create(reqBody);
    return NextResponse.json({ message: "item created" });
  } catch {
    return NextResponse.json({ message: "error" });
  }
}
