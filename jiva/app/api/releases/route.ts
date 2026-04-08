import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Album } from "@/models/Album";

export async function GET() {
  try {
    await connectToDatabase();
    const releases = await Album.find({}).sort({ releaseDate: -1 }).limit(6).lean();
    return NextResponse.json(releases);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch releases" }, { status: 500 });
  }
}
